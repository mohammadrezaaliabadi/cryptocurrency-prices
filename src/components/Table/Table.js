import { useEffect } from "react";
import {
  foramtPercent,
  formatCurrency,
  formatNumberCompact,
} from "../../utils/utils";
import "./Table.scss";

const Table = ({ data, header }) => {
  return (
    <table>
      <tr>
        <td>
          <table className="table">
            <thead>
              <tr className="table-head">
                {header.map((head) => (
                  <td>{head}</td>
                ))}
              </tr>
            </thead>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <div style={{ height: "1000px", overflow: "auto" }}>
            <table className="table">
              <tbody>
                {data.map((x) => {
                  return (
                    <tr key={x.id} className="table-row">
                      <td className="first-column">
                        <img
                          srcSet={x.logo_url}
                          alt={""}
                          style={{ width: "1.5rem", height: "1.5rem" }}
                        />
                        <h3>{x.name}</h3>
                        <span className="data-sub">{x.symbol}</span>
                      </td>
                      <td>{formatCurrency(x.price, "en-us", "USD")}</td>
                      <td
                        className={
                          Number.parseFloat(x["1d"].price_change_pct) >= 0
                            ? "high-style"
                            : "low-style"
                        }
                      >
                        {foramtPercent(x["1d"].price_change_pct, "en-us")}
                      </td>
                      <td>{formatNumberCompact(x["1d"].volume)}</td>

                      <td>{formatNumberCompact(x.market_cap)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Table;
