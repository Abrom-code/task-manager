const options = {
  day: "numeric",
  month: "short",
  year: "numeric",
};

const formatteDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
  return formattedDate;
};
export default formatteDate;
