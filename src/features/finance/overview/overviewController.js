import { widget } from "./widgetService.js";

export const getOverview = async (req, res) => {
  const widgets = await widget();
  res.json({ widgets });
};
