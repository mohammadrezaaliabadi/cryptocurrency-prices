import "./App.scss";
import { useCallback, useState } from "react";
import Table from "../Table/Table";
import Row from "../Row/Row";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import { getDataByIds } from "../../api/api";
import usePagination from "../../hooks/usePagination";

function App() {
  const [data, setData] = useState([]);
  const headerTable = ["NAME", "PRICE", "1D CHANGE", "VOLUME", "MARKET CAP"];
  const [searchValue, setSearchValue] = useState("");
  const [intervalId, setIntervalId] = useState();
  const DATA = usePagination(setData, { intervalId, setIntervalId });
  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      clearInterval(intervalId);
      setData(await getDataByIds(searchValue));
      setIntervalId(
        setInterval(async () => {
          setData(await getDataByIds(searchValue));
        }, 10000)
      );
      return () => clearInterval(intervalId);
    },
    [intervalId, searchValue]
  );

  const searchChangeInputHandler = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);
  const handleOnChangePaginaion = (i) => {
    DATA.jump(i);
  };
  const rowMapTable = (x, i) => <Row key={x.id} i={i} rowData={x} />;

  const handleClickH1 = () => {
    DATA.reset();
  };
  return (
    <div className="App">
      <div className="header">
        <h1 style={{ cursor: "pointer" }} onClick={handleClickH1}>
          Crypto prices
        </h1>
        <SearchBar
          search={{ searchValue: searchValue, setSearchValue: setSearchValue }}
          submitHandler={submitHandler}
          searchChangeInputHandler={searchChangeInputHandler}
        />
      </div>
      <Table data={data} header={headerTable} rowMap={rowMapTable} />
      <div className="footer">
        <Pagination
          count={10}
          onChange={handleOnChangePaginaion}
          prev={DATA.prev}
          next={DATA.next}
        />
      </div>
    </div>
  );
}

export default App;
