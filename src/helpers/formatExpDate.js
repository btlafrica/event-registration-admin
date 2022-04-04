export const formatExpDate = (date) => {
  let s = date?.split("-");
  let year = s?.[0]?.substring(2, 4);
  let month = s?.[1];
  return `${month}/${year}`;
};
