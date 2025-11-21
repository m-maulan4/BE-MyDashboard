import { col, Op } from "sequelize";
import { dompetModal, kategoriModel, transaksiModel } from "../assocModel.js";

export default async function transactionLastWeekService() {
  const dataRaw = await transaksiModel.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]],
    attributes: {
      include: [
        [col("dompet.nama_dompet"), "nama_dompet"],
        [col("kategori.nama_kategori"), "nama_kategori"],
      ],
      exclude: ["id", "id_dompet", "id_kategori", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: dompetModal,
        attributes: [],
      },
      {
        model: kategoriModel,
        attributes: [],
      },
    ],
  });
  return dataRaw;
}
