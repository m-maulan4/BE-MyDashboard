import { db } from "../../../config/db/index.js";
import { dompetModal } from "./dompetModel.js";

export const postDompet = async (req, res) => {
  const t = await db.transaction();
  try {
    const { nama_dompet } = req.body;
    if (!nama_dompet) {
      throw new Error("tidak bisa diproses");
    }
    await dompetModal.create({ nama_dompet }, { transaction: t });
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
export const getAllDompet = async (req, res) => {
  const dataRaw = await dompetModal.findAll();
  return res.json(dataRaw);
};
