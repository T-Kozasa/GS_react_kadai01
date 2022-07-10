// services/omikuji.service.js

export const getIkinuki = async (query) => {
    try {
      const ikinuki = ["読書", "散歩", "筋トレ", "飲み会", "ショッピング"];
      const min = 0;
      const max = ikinuki.length - 1;
      const index = Math.floor(Math.random() * (max - min + 1)) + min;
      return { result: ikinuki[index] };
    } catch (e) {
      throw Error("Error while getting ikinuki.");
    }
  };
