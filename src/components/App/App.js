import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import Row from "../Row/Row";
import { KEY, maxPerPage, URL } from "../../config/config";

function App() {
  const [data, setData] = useState([]);
  const [page, pageNumber] = useState(2);
  const formatLocale = {
    locale: navigator.language,
    currency: "USD",
  };

  const getData = () => {
    axios
      .get(`${URL}?&per-page=${maxPerPage}&page=${page}&key=${KEY}`)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        console.log("Error fetching data from nomics", err);
      });
  };

  const headerTable = ["NAME", "PRICE", "1D CHANGE", "VOLUME", "MARKET CAP"];
  useEffect(() => {
    getData();
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
        <h4>This is footer.</h4>
      </div>
    </div>
  );
}

export default App;
