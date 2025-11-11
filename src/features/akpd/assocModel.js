import { kelasModel } from "./kelas/kelasModel.js";
import { siswaModel } from "./siswa/siswaModel.js";
siswaModel.belongsTo(kelasModel, { foreignKey: "id_kelas", as: "kelas" });
kelasModel.hasMany(siswaModel, { foreignKey: "id_kelas", as: "siswa" });

export { kelasModel, siswaModel };
