import "./Table.scss";

const Table = ({ data, header, rowMap }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <table className="table">
              <thead>
                <tr className="table-head">
                  {header.map((head) => (
                    <td key={`head-${head}`}>{head}</td>
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
      </tbody>
    </table>
  );
};

export default Table;
