import { Sequelize } from "sequelize";
import { transaksiModel } from "../transaksi/transaksiModel.js";
export const getOverview = async (req, res) => {
  const dataRaw = await transaksiModel.findAll({
    attributes: [
      [
        Sequelize.literal(
          "CAST(SUM(CASE WHEN jenis_transaksi = 1 THEN jumlah ELSE 0 END) AS UNSIGNED INTEGER)"
        ),
        "total_masuk",
      ],
      [
        Sequelize.literal(
          "CAST(SUM(CASE WHEN jenis_transaksi = 2 THEN jumlah ELSE 0 END) AS UNSIGNED INTEGER)"
        ),
        "total_keluar",
      ],
      [
        Sequelize.literal(
          "CAST(SUM(CASE WHEN jenis_transaksi = 1 THEN jumlah WHEN jenis_transaksi = 2 THEN -jumlah ELSE 0 END) AS SIGNED INTEGER)"
        ),
        "saldo",
      ],
    ],
    raw: true,
  });
  const data = dataRaw[0];
  return res.json({
    total_masuk: data.total_masuk,
    total_keluar: data.total_keluar,
    saldo: data.saldo,
  });
};
