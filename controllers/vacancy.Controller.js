import Vacancy from "../models/Vacantes";

export const createVacancy = async (req, res) => {
  const { titulo, empresa, ubicacion, salario, contrato, descripcion, url , estado, skill, autor } = req.body;

  try {
    const newVacancy = new Vacancy({
      titulo, empresa, ubicacion, salario, contrato, descripcion, url , estado, skill, autor,
    });

    const vacancySaved = await newVacancy.save();

    res.status(201).json(vacancySaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getVacancyById = async (req, res) => {
  const { vacancyId } = req.params;

  const vacancy = await Vacancy.findById(vacancyId);
  res.status(200).json(vacancy);
};

export const getVacancy = async (req, res) => {
  const vacancy = await Vacancy.find();
  return res.json(vacancy);
};

export const updateVacancyById = async (req, res) => {
  const updatedVacancy = await Vacancy.findByIdAndUpdate(
    req.params.vacancyId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedVacancy);
};

export const deleteVacancyById = async (req, res) => {
  const { vacancyId } = req.params;

  await Vacancy.findByIdAndDelete(vacancyId);

  // code 200 is ok too
  res.status(204).json();
};
