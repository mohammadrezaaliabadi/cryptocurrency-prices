import axios from "axios";
import { maxPerPage, URL, KEY, formatLocale } from "../config/config";

const getPerPageData = async (page) => {
  const res = await axios.get(
    `${URL}?&per-page=${maxPerPage}&page=${page}&currency=${formatLocale.currency}&key=${KEY}`
  );
  return await res.data;
};

const getDataBySymbols = async (symbols) => {
  const res = await axios.get(
    `${URL}?interval=1h,1d,7d,30d,365d,ytd&symbols=${symbols}&quote-currency=${formatLocale.currency}&key=${KEY}`
  );
  return await res.data;
};

const getDataByIds = async (id) => {
  const res = await axios.get(
    `${URL}?interval=1h,1d,7d,30d,365d,ytd&ids=${id}&quote-currency=${formatLocale.currency}&key=${KEY}`
  );
  return await res.data;
};

export { getPerPageData, getDataByIds, getDataBySymbols };
//https://nomics.com/data/currencies-ticker?interval=1h,1d,7d,30d,365d,ytd&quote-currency=USD&symbols=BTC&key=bc281b24f1951347de7e1c4b54ee193e5dbb6c0c
//https://api.nomics.com/v1/currencies/ticker?interval=1h,1d,7d,30d,365d,ytd&symbols=BTC&quote-currency=USD&key=bc281b24f1951347de7e1c4b54ee193e5dbb6c0c
