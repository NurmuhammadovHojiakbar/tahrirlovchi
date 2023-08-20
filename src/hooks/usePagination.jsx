import { useMemo } from "react";

export default function usePagination({
  currentIndex,
  totalItems,
  itemsPerPage,
  siblingCount = 1,
}) {
  const DOTS = "...";
  const rangeItems = useMemo(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const isLeftDots = currentIndex - siblingCount > 2;
    const isRightDots = totalPages - currentIndex > 2 + siblingCount;

    const range = [];

    if (!isLeftDots && isRightDots) {
      for (let i = 1; i <= siblingCount * 2 + 3; i++) {
        range.push(i);
      }
      range.push(DOTS, totalPages);
      return range;
    }
    if (isLeftDots && !isRightDots) {
      range.push(1, DOTS);
      for (let i = siblingCount * 2 + 2; i >= 0; i--) {
        range.push(totalPages - i);
      }
      return range;
    }
    if (isLeftDots && isRightDots) {
      range.push(1, DOTS);
      for (
        let i = currentIndex - siblingCount;
        i <= currentIndex + siblingCount;
        i++
      ) {
        range.push(i);
      }
      range.push(DOTS, totalPages);
      return range;
    }

    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
    return range;
  }, [currentIndex, totalItems, itemsPerPage, siblingCount]);

  return [rangeItems, DOTS];
}
