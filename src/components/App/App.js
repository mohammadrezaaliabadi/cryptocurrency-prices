import "./App.scss";
import { useEffect, useState } from "react";
import Table from "../Table/Table";
import Row from "../Row/Row";
import usePagination from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";

function App() {
  const [data, setData] = useState([]);
  const headerTable = ["NAME", "PRICE", "1D CHANGE", "VOLUME", "MARKET CAP"];
  const DATA = usePagination(setData);

  useEffect(async () => {
    await DATA.currentData();
  }, []);
  return (
    <div className="App">
      <div className="header">
        <h1>Crypto price</h1>
      </div>
      <Table
        data={data}
        header={headerTable}
        rowMap={(x) => <Row rowData={x} />}
      />
      <div className="footer">
        <Pagination
          count={10}
          onChange={(i) => {
            console.log(i);
            DATA.jump(i);
          }}
          prev={DATA.next}
          next={DATA.prev}
        />
      </div>
    </div>
  );
}

export default App;
