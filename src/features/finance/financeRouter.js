import { Router } from "express";
import * as dompet from "./dompet/dompetController.js";
import * as kategori from "./kategori/kategoriController.js";
import * as transaksi from "./transaksi/transaksiController.js";

export const financeRouter = Router();
//dompet
financeRouter.post("/keuangan/dompet", dompet.postDompet);
financeRouter.get("/keuangan/dompet", dompet.getAllDompet);
//kategori
financeRouter.post("/keuangan/kategori", kategori.postKategori);
//transaksi
financeRouter.post("/keuangan/transaksi", transaksi.postTransaksi);
financeRouter.get("/keuangan/transaksi", transaksi.getTransaksi);
