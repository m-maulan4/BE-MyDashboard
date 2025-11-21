import { dompetModal } from "./dompet/dompetModel.js";
import { kategoriModel } from "./kategori/kategoriModel.js";
import { transaksiModel } from "./transaksi/transaksiModel.js";
kategoriModel.hasMany(transaksiModel, {
  foreignKey: "id_kategori",
});
transaksiModel.belongsTo(kategoriModel, {
  foreignKey: "id_kategori",
});
//
dompetModal.hasMany(transaksiModel, { foreignKey: "id_dompet" });
transaksiModel.belongsTo(dompetModal, { foreignKey: "id_dompet" });

export { dompetModal, transaksiModel, kategoriModel };
