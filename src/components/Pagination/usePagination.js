import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getPerPageData } from "../../api/api";
import { maxPerPage } from "../../config/config";

const usePagination = (setData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = maxPerPage;
  const currentData = async () => {
    setData(await getPerPageData(currentPage));
  };
  useEffect(() => {
    currentData();
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
