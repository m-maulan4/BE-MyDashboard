import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const dompetModal = db.define(
  "dompet",
  {
    nama_dompet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "dompet",
  }
);
(async () => {
  await dompetModal.sync();
})();
