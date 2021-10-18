import { useState } from "react";
import { useCallback, useEffect } from "react/cjs/react.development";
import { getPerPageData } from "../../api/api";
import { maxPerPage } from "../../config/config";

const usePagination = (setData, intervalObject) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = maxPerPage;
  const currentData = useCallback(async () => {
    clearInterval(intervalObject.intervalId);
    setData(await getPerPageData(currentPage));
    intervalObject?.setIntervalId(
      setInterval(async () => {
        setData(await getPerPageData(currentPage));
      }, 10000)
    );
  }, [currentPage, intervalObject.intervalId]);
  useEffect(async () => {
    await currentData();
  }, [currentPage]);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };
  return { next, prev, jump, currentData, currentPage, maxPage };
};

export default usePagination;
