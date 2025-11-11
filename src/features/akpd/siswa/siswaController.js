import { db } from "../../../config/db/index.js";
import { kelasModel, siswaModel } from "../assocModel.js";

export const postSiswa = async (req, res) => {
  const t = await db.transaction();
  try {
    const { id_kelas, nama, nim, jk } = req.body;
    if (!id_kelas || !nama || !nim || !jk) {
      throw new Error("tidak bisa diproses");
    }
    await siswaModel.create({ id_kelas, nama, nim, jk }, { transaction: t });
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
export const getAllSiswa = async (req, res) => {
  const dataRaw = await siswaModel.findAll({
    include: {
      model: kelasModel,
      as: "kelas",
      attributes: { exclude: ["createdAt", "updatedAt", "guru_kelas"] },
    },
    raw: true,
  });
  return res.json(dataRaw);
};
