export const ITEMS_PER_PAGE = {
  works: 9,
  blog: 10,
  news: 10,
} as const;

export function paginate<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number
): {
  paginatedItems: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
} {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    paginatedItems,
    totalPages,
    currentPage: validCurrentPage,
    totalItems,
    startIndex,
    endIndex,
  };
}