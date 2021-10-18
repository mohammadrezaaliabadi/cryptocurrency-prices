import "./App.scss";
import { useCallback, useState } from "react";
import Table from "../Table/Table";
import Row from "../Row/Row";
import usePagination from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SeaachBar/SerachBar";
import { getDataByIds } from "../../api/api";

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
    },
    [intervalId, searchValue]
  );

  const searchChangeInputHandler = useCallback(
    (event) => {
      setSearchValue(event.target.value);
    },
    [searchValue]
  );

  return (
    <div className="App">
      <div className="header">
        <h1
          style={{ cursor: "pointer" }}
          onClick={async () => {
            await DATA.currentData();
          }}
        >
          Crypto prices
        </h1>
        <SearchBar
          search={{ searchValue: searchValue, setSearchValue: setSearchValue }}
          submitHandler={submitHandler}
          searchChangeInputHandler={searchChangeInputHandler}
        />
      </div>
      <Table
        data={data}
        header={headerTable}
        rowMap={(x, i) => <Row key={x.id} i={i} rowData={x} />}
      />
      <div className="footer">
        <Pagination
          count={10}
          onChange={(i) => {
            DATA.jump(i);
          }}
          prev={DATA.prev}
          next={DATA.next}
        />
      </div>
    </div>
  );
}

export default App;
