import { Router } from "express";
import * as kelas from "./kelas/kelasController.js";
import * as siswa from "./siswa/siswaController.js";
import * as bidang from "./bidang/bidangController.js";

export const akpdRouter = Router();
//kelas
akpdRouter.post("/akpd/kelas", kelas.postKelas);
akpdRouter.get("/akpd/kelas", kelas.getAllKelas);
//siswa
akpdRouter.post("/akpd/siswa", siswa.postSiswa);
akpdRouter.get("/akpd/siswa", siswa.getAllSiswa);
//bidang
akpdRouter.post("/akpd/bidang", bidang.postBidang);
akpdRouter.get("/akpd/bidang", bidang.getAllBidang);
