import React from "react";

export const utils = (length) => {
  let str = "";
  const strCollection = "qertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < length; i++) {
    const charPosition = Math.round(Math.random() * strCollection.length);

    str += strCollection[charPosition];
  }
  return str;
};
