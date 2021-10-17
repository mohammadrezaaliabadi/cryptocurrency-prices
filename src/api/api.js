import axios from "axios";
import { maxPerPage, URL, KEY, formatLocale } from "../config/config";

const getPerPageData = async (page) => {
  const res = await axios.get(
    `${URL}?&per-page=${maxPerPage}&page=${page}&currency=${formatLocale.currency}&key=${KEY}`
  );
  return await res.data;
};

export { getPerPageData };
