export const getDataFormat = <Data>(data: Data[], currentPage = 1) => {
  const totalData = data.length;
  const limit = 5;
  const startIndex = currentPage * limit - limit;
  const endIndex = currentPage * limit;
  const totalPages = Math.ceil(totalData / limit);
  data = data.slice(startIndex, endIndex);

  return {
    totalData,
    limit,
    totalPages,
    currentPage,
    data,
  };
};
