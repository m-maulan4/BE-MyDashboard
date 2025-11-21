import { col, fn, literal, Op } from "sequelize";
import { transaksiModel, kategoriModel } from "../assocModel.js";

export default async function analyticPieService() {
  const data = await transaksiModel.findAll({
    attributes: [[fn("SUM", col("jumlah")), "jumlah"]],
    where: {
      jenis_transaksi: 2,
      createdAt: {
        [Op.gte]: literal("NOW() - INTERVAL 30 DAY"),
      },
    },
    include: {
      model: kategoriModel,
      attributes: ["nama_kategori"],
    },
    group: ["transaksi.jenis_transaksi", "kategori.id"],
  });
  const result = data.map((item) => ({
    nama_kategori: item.kategori.nama_kategori,
    jumlah: Number(item.jumlah),
  }));
  return result;
}
