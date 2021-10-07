import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import * as usersCtrl from "../controllers/user.controller";
import * as vacancyCtrl from "../controllers/vacancy.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get("/vancancy/", () =>{ vacancyCtrl.getvacancy});

router.get("/vancancy/:vacancyId", () =>{ vacancyCtrl.getvacancyById });

router.post(
  "/vancancy/", () =>{
  [authJwt.verifyToken, authJwt.isModerator],
  vacancyCtrl.createVacancy
  });

router.put(
  "/vancancy/:vacancyId", () => {
  [authJwt.verifyToken, authJwt.isModerator],
  vacancyCtrl.updateVacancyById
  });

router.delete(
  "/vancancy/:vacancyId", () =>{
  [authJwt.verifyToken, authJwt.isAdmin],
  vacancyCtrl.deleteVacancyById
  });

router.post(
  "/user/", () => {
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
  });

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/auth/signup", () =>{
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp
  });

router.post("/auth/signin", () =>{ authCtrl.signin});

export default router;
