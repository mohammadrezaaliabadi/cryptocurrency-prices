import { useState } from "react";
import { getPerPageData } from "../../api/api";
import { maxPerPage } from "../../config/config";

const usePagination = (setData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = maxPerPage;
  const currentData = async () => {
    setData(await getPerPageData(currentPage));
  };

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    currentData();
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    currentData();
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    currentData();
  };
  return { next, prev, jump, currentData, currentPage, maxPage };
};

export default usePagination;
