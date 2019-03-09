export const isThereData = data => Array.isArray(data) && data.length > -1;

export const isTextChild = child =>
  child && (typeof child === "number" || typeof child === "string");

export const renderRowValues = ({
  render,
  rowValues,
  rowIndex,
  colIndex,
  valueKey
}) => {
  return render
    ? render({ rowValues, rowIndex, colIndex })
    : valueKey && typeof valueKey === "string"
    ? rowValues[valueKey]
      ? rowValues[valueKey]
      : ""
    : "";
};
