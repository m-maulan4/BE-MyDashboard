import { goalsModel } from "../goals/goalsModel.js";
import { tagihanModel } from "../tagihan/tagihanModel.js";
import analyticBarService from "./analyticBarService.js";
import analyticPieService from "./analyticPieService.js";
import { widget } from "./widgetService.js";

export const getOverview = async (req, res) => {
  const widgets = await widget();
  const analyticBar = await analyticBarService();
  const analyticPie = await analyticPieService();
  const goals = await goalsModel.findAll({
    attributes: { exclude: ["createdAt"] },
  });
  const tagihan = await tagihanModel.findAll({
    attributes: { exclude: ["createdAt"] },
  });
  res.json({ widgets, goals, tagihan, analyticBar, analyticPie });
};
