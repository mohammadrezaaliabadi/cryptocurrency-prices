import {
  foramtPercent,
  formatCurrency,
  formatNumberCompact,
} from "../../utils/utils";

const Row = ({ rowData, i }) => {
  return (
    <tr className="table-row">
      <td style={{ width: "1.8rem" }}>{i + 1}</td>
      <td className="first-column">
        <img
          srcSet={rowData.logo_url}
          alt={""}
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
        <h3>{rowData.name}</h3>
        <span className="data-sub">{rowData.symbol}</span>
      </td>
      <td>{formatCurrency(rowData.price, "en-us", "USD")}</td>
      <td
        className={
          Number.parseFloat(rowData["1d"]?.price_change_pct) >= 0
            ? "high-style"
            : "low-style"
        }
      >
        {foramtPercent(rowData["1d"]?.price_change_pct, "en-us")}
      </td>
      <td>{formatNumberCompact(rowData["1d"]?.volume)}</td>

      <td>{formatNumberCompact(rowData?.market_cap)}</td>
    </tr>
  );
};

export default Row;
