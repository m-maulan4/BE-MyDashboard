import { db } from "../../../config/db/index.js";
import { tagihanModel } from "./tagihanModel.js";

export const postTagihan = async (req, res) => {
  const t = await db.transaction();
  try {
    const { title, desc, amount, due_date } = req.body;
    if (!title || !desc || !amount || !due_date) {
      throw new Error("kolom tidak boleh kosong");
    }
    await tagihanModel.create(
      { title, desc, amount, due_date },
      { transaction: t }
    );
    t.commit();
    return res.json({ msg: "success" });
  } catch (error) {
    await t.rollback();
    return res.status(400).json({ msg: error.message });
  }
};
export const getTagihan = async (req, res) => {
  const dataRaw = await tagihanModel.findAll({
    attributes: { exclude: ["createdAt"] },
  });
  return res.json(dataRaw);
};
