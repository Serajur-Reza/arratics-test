export const dateFormatter = (date) => {
  let tempDate = new Date(date);
  let day =
    tempDate.getDate() < 10 ? `0${tempDate.getDate()}` : tempDate.getDate();
  let month =
    tempDate.getMonth() + 1 < 10
      ? `0${tempDate.getMonth() + 1}`
      : tempDate.getMonth() + 1;
  let year = tempDate.getFullYear();

  return `${year}-${month}-${day}`;
};
