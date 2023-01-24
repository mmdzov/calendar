import convertToEn from "./convertToEn";

export default function currentDate(index) {
  let date = new Date();
  date = date.toLocaleDateString("fa-IR").split("/")[index];
  let g = convertToEn(date);
  return +g;
}
