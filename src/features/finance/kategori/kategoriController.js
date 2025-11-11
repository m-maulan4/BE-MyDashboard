import { db } from "../../../config/db/index.js";
import { kategoriModel } from "./kategoriModel.js";

export const postKategori = async (req, res) => {
  const t = await db.transaction();
  try {
    const { nama_kategori } = req.body;
    if (!nama_kategori) {
      throw new Error("tidak bisa diproses");
    }
    await kategoriModel.create({ nama_kategori }, { transaction: t });
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
