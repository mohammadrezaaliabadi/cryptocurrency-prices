import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";

function App() {
  const [data, setData] = useState([]);
  const formatLocale = {
    locale: navigator.language,
    currency: "USD",
  };

  const getData = () => {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?&per-page=100&page=1&key=" +
          "bc281b24f1951347de7e1c4b54ee193e5dbb6c0c"
      )
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
      <Table data={data} header={headerTable} firstRowClassName="first-row" />
      <div className="footer">
        <h4>This is footer.</h4>
      </div>
    </div>
  );
}

export default App;
