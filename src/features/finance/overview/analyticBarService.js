import { col, fn, literal, Op } from "sequelize";
import { transaksiModel } from "../transaksi/transaksiModel.js";

export default async function analyticBarService() {
  const data = await transaksiModel.findAll({
    attributes: [
      [fn("DAYOFWEEK", col("createdAt")), "tanggal"],
      [
        fn(
          "SUM",
          literal("CASE WHEN jenis_transaksi = 1 THEN jumlah ELSE 0 END")
        ),
        "masuk",
      ],
      [
        fn(
          "SUM",
          literal("CASE WHEN jenis_transaksi = 2 THEN jumlah ELSE 0 END")
        ),
        "keluar",
      ],
    ],
    where: {
      createdAt: {
        [Op.gte]: literal("NOW() - INTERVAL 7 DAY"),
      },
    },
    group: literal("DAYOFWEEK(createdAt)"),
    order: literal("tanggal ASC"),
    raw: true,
  });
  const namaHari = {
    1: "Minggu",
    2: "Senin",
    3: "Selasa",
    4: "Rabu",
    5: "Kamis",
    6: "Jumat",
    7: "Sabtu",
  };
  const result = data.map((item) => ({
    hari: namaHari[item.tanggal],
    uangMasuk: parseInt(item.masuk, 10) || 0,
    uangKeluar: parseInt(item.keluar, 10) || 0,
  }));
  return result;
}
