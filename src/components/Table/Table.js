import { useEffect } from "react";
import {
  foramtPercent,
  formatCurrency,
  formatNumberCompact,
} from "../../utils/utils";
import "./Table.scss";

const Table = ({ data, header, rowMap }) => {
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
              <tbody>{data.map(rowMap)}</tbody>
            </table>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Table;
