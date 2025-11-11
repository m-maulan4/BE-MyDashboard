import { db } from "../../../config/db/index.js";
import { bidangModel } from "./bidangModel.js";

export const postBidang = async (req, res) => {
  const t = await db.transaction();
  try {
    const { bidang, skkpd, pengenalan, akomodasi, tindakan, kelas } = req.body;
    if (!bidang || !skkpd || !pengenalan || !akomodasi || !tindakan || !kelas) {
      throw new Error("tidak bisa diproses");
    }
    await bidangModel.create(
      { bidang, skkpd, pengenalan, akomodasi, tindakan, kelas },
      { transaction: t }
    );
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
export const getAllBidang = async (req, res) => {
  const dataRaw = await bidangModel.findAll();
  const bidangKelas10 = dataRaw.filter((f) => f.kelas === 10);
  const bidangKelas11 = dataRaw.filter((f) => f.kelas === 11);
  const bidangKelas12 = dataRaw.filter((f) => f.kelas === 12);
  return res.json({ bidangKelas10, bidangKelas11, bidangKelas12 });
};
