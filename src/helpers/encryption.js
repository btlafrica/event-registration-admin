var CryptoJS = require("crypto-js");

export const encryptTranzoData = (message) => {
  const { REACT_APP_BACKEND_SECRET_IV, REACT_APP_BACKEND_SECRET_KEY } =
    process.env;
  var key = REACT_APP_BACKEND_SECRET_KEY; //key used in Python
  key = CryptoJS.enc.Utf8.parse(key);
  var iv = CryptoJS.enc.Utf8.parse(REACT_APP_BACKEND_SECRET_IV);
  var encrypted = CryptoJS.AES.encrypt(message, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
  });
  encrypted = encrypted.toString();
  return encrypted;
};
export const decryptData = (cyphertext) => {
  // const { REACT_APP_BACKEND_SECRET_KEY } =
  // process.env;
  // var key = REACT_APP_BACKEND_SECRET_KEY;
  // key = CryptoJS.enc.Utf8.parse(key);
  // var decrypted =  CryptoJS.AES.decrypt(cyphertext, key {mode:CryptoJS.mode.ECB});
  // console.log(decrypted.toString(CryptoJS.enc.Utf8));
};
