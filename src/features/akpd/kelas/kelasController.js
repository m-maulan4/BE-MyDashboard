import { db } from "../../../config/db/index.js";
import { kelasModel, siswaModel } from "../assocModel.js";

export const postKelas = async (req, res) => {
  const t = await db.transaction();
  try {
    const { guru_kelas, kelas, jenis_kelas } = req.body;
    if (!guru_kelas || !kelas || !jenis_kelas) {
      throw new Error("tidak bisa diproses");
    }
    await kelasModel.create(
      { guru_kelas, kelas, jenis_kelas },
      { transaction: t }
    );
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
export const getAllKelas = async (req, res) => {
  const dataRaw = await kelasModel.findAll({
    include: { model: siswaModel, as: "siswa" },
  });
  const kelas_10 = dataRaw.filter((f) => f.kelas === 10);
  const kelas_11 = dataRaw.filter((f) => f.kelas === 11);
  const kelas_12 = dataRaw.filter((f) => f.kelas === 12);
  return res.json({ kelas_10, kelas_11, kelas_12 });
};
