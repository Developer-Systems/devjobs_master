import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";
import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";
import * as vacancyCtrl from "../controllers/vacancy.controller";
import { authJwt } from "../middlewares";

router.get("/", vacancyCtrl.getvacancy);

router.get("/:vancyId", vacancyCtrl.getvacancyById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  vacancyCtrl.createVacancy
);

router.put(
  "/:vacancyId",
  [authJwt.verifyToken, authJwt.isModerator],
  vacancyCtrl.updateVacancyById
);

router.delete(
  "/:vacancyId",
  [authJwt.verifyToken, authJwt.isAdmin],
  vacancyCtrl.deleteVacancyById
);

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp
);

router.post("/signin", authCtrl.signin);

export default router;
