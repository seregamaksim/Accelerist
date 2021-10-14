interface IMetaData {
  currentPage: string;
  itemCount: number;
  itemsPerPage: string;
  totalItems: number;
  totalPages: number;
}

function bordersNavigation(data: IMetaData) {
  const currentPage = Number(data.currentPage);
  const itemsPerPage = Number(data.itemsPerPage);
  return currentPage * itemsPerPage - (itemsPerPage - data.itemCount);
}

export function useBorberNavigation(metaData: IMetaData) {
  const highBorder = bordersNavigation(metaData);
  const lowBorder = bordersNavigation(metaData) - (metaData.itemCount - 1);

  return `${lowBorder}-${highBorder} of ${metaData.totalItems}`;
}
