/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getPerPageData } from "../api/api";
import { maxPerPage } from "../config/config";

const usePagination = (setData, intervalObject) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = maxPerPage;
  useEffect(async () => {
    clearInterval(intervalObject.intervalId);
    setData(await getPerPageData(currentPage));
    intervalObject?.setIntervalId(
      setInterval(async () => {
        setData(await getPerPageData(currentPage));
      }, 10000)
    );
    return () => clearInterval(intervalObject.intervalId);
  }, [currentPage]);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };
  const reset = () => {
    setCurrentPage(1);
  };
  return { next, prev, jump, currentPage, maxPage, reset };
};

export default usePagination;
