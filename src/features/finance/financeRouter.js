import { Router } from "express";
import * as dompet from "./dompet/dompetController.js";
import * as kategori from "./kategori/kategoriController.js";
import * as transaksi from "./transaksi/transaksiController.js";
import * as overview from "./overview/overviewController.js";

export const financeRouter = Router();
financeRouter.get("/keuangan/overview", overview.getOverview);
//dompet
financeRouter.post("/keuangan/dompet", dompet.postDompet);
financeRouter.get("/keuangan/dompet", dompet.getAllDompet);
//kategori
financeRouter.post("/keuangan/kategori", kategori.postKategori);
financeRouter.get("/keuangan/kategori", kategori.getAllKategori);
//transaksi
financeRouter.post("/keuangan/transaksi", transaksi.postTransaksi);
financeRouter.get("/keuangan/transaksi", transaksi.getTransaksi);
