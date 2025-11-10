import { db } from "../../config/db/index.js";
import { todoModel } from "./todoModel.js";

export const getTodoAll = async (req, res) => {
  const dataRaw = await todoModel.findAll({ order: [["createdAt", "DESC"]] });
  const pending = dataRaw.filter((f) => {
    return f.status == 1;
  });
  const on_progress = dataRaw.filter((f) => {
    return f.status == 2;
  });
  const completed = dataRaw.filter((f) => {
    const now = new Date().getMonth();
    const due = new Date(f.due_date).getMonth();
    return f.status == 3 && due === now;
  });
  res.json({ pending, on_progress, completed });
};
export const postTodo = async (req, res) => {
  const t = await db.transaction();
  if (!req.body) return res.status(400).json({ msg: "gagal" });
  const { title, desc, status, priority, due_date } = req.body;

  try {
    await todoModel.create(
      {
        title,
        description: desc,
        status,
        priority,
        due_date,
      },
      { transaction: t }
    );
    await t.commit();
    res.json({ msg: "success" });
    console.log(due_date);
  } catch (error) {
    await t.rollback();
    res.status(500).json({ msg: "gagal" });
  }
};
export const nextStatus = async (req, res) => {
  const t = await db.transaction();
  const { id_todo } = req.body;
  const findData = await todoModel.findByPk(id_todo);
  const newDataStatus = findData.status + 1;
  if (findData.status === 3) return res.status(400).json({ msg: "gagal" });
  try {
    await todoModel.update(
      { status: newDataStatus },
      { where: { id: findData.id }, transaction: t }
    );
    await t.commit();
    res.json({ msg: "success" });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ msg: "gagal" });
  }
};
export const backStatus = async (req, res) => {
  const t = await db.transaction();
  const { id_todo } = req.body;
  const findData = await todoModel.findByPk(id_todo);
  const newDataStatus = findData.status - 1;
  if (findData.status === 1) return res.status(400).json({ msg: "gagal" });
  try {
    await todoModel.update(
      { status: newDataStatus },
      { where: { id: findData.id }, transaction: t }
    );
    await t.commit();
    res.json({ msg: "success" });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ msg: "gagal" });
  }
};
export const editTodo = async (req, res) => {
  const t = await db.transaction();
  if (!req.body) return res.status(400).json({ msg: "gagal" });
  const { id_todo, title, desc, status, priority, due_date } = req.body;
  try {
    await todoModel.update(
      {
        title,
        description: desc,
        status,
        priority,
        due_date,
      },
      { where: { id: id_todo }, transaction: t }
    );
    await t.commit();
    res.json({ msg: "success" });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ msg: "gagal" });
  }
};
