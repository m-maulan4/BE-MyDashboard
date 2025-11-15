import { col } from "sequelize";
import { db } from "../../../config/db/index.js";
// import { transaksiModel } from "./transaksiModel.js";
import { dompetModal, transaksiModel } from "../assocModel.js";

export const postTransaksi = async (req, res) => {
  const t = await db.transaction();
  try {
    const { id_dompet, id_kategori, jenis_transaksi, jumlah, ket } = req.body;
    if (!id_dompet || !id_kategori || !jumlah || !ket || !jenis_transaksi) {
      throw new Error("tidak bisa diproses");
    }
    await transaksiModel.create(
      { id_dompet, id_kategori, jumlah, ket, jenis_transaksi },
      { transaction: t }
    );
    await t.commit();
    return res.json({ msg: "success" });
  } catch (err) {
    await t.rollback();
    return res.status(400).json({ msg: err.message });
  }
};
export const getTransaksi = async (req, res) => {
  const dataTaw = await transaksiModel.findAll({
    include: {
      model: dompetModal,
      attributes: {
        exclude: ["updatedAt", "createdAt", "id", "nama_dompet"],
      },
    },
    // raw: true,
    attributes: {
      include: [
        [col("dompet.nama_dompet"), "nama_dompet"], // <- Tambahkan ini
      ],
      exclude: ["id", "id_dompet", "id_kategori", "createdAt", "updatedAt"],
    },
  });
  return res.json(dataTaw);
};
