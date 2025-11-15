import { db } from "../../../config/db/index.js";
import { kategoriModel } from "./kategoriModel.js";

export const postKategori = async (req, res) => {
  const t = await db.transaction();
  try {
    const { nama_kategori, type } = req.body;
    if (!nama_kategori || !type) {
      throw new Error("tidak bisa diproses");
    }
    await kategoriModel.create({ nama_kategori, type }, { transaction: t });
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
export const getAllKategori = async (req, res) => {
  const dataRaw = await kategoriModel.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
    order: [["type", "ASC"]],
  });
  return res.json(dataRaw);
};
