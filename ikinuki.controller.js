// controllers/omikuji.controller.js

import { getIkinuki } from "../services/ikinuki.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getIkinuki({});
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Successfully get ikinuki!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
