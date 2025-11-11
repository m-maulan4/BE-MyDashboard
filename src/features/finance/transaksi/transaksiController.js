import { db } from "../../../config/db/index.js";
import { transaksiModel } from "./transaksiModel.js";

export const postTransaksi = async (req, res) => {
  const t = await db.transaction();
  try {
    const { id_dompet, id_kategori, jumlah, ket } = req.body;
    if (!id_dompet || !id_kategori || !jumlah || !ket) {
      throw new Error("tidak bisa diproses");
    }
    await transaksiModel.create(
      { id_dompet, id_kategori, jumlah, ket },
      { transaction: t }
    );
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
