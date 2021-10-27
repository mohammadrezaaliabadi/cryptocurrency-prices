import "./SearchBar.scss";
import { useCallback, useState } from "react";

const SearchBar = ({
  submitHandler,
  searchChangeInputHandler,
  search,
  btnClear,
}) => {
  const [searchClassName, setSearchClassName] = useState("");

  const searchIconHandler = useCallback(() => {
    if (searchClassName == "") {
      setSearchClassName("active");
    } else {
      setSearchClassName("");
    }
  }, [searchClassName]);

  const clearHandlerClick = useCallback(
    (e) => {
      e.preventDefault();
      search.setSearchValue("");
    },
    [search]
  );
  return (
    <div className={`search ${searchClassName}`}>
      <div onClick={searchIconHandler} className="icon"></div>
      <div className="input">
        <input
          type="text"
          placeholder="Search By ids, smaple:BTC"
          onChange={searchChangeInputHandler}
          value={search?.searchValue}
          className="input-search"
        />
      </div>
      {btnClear && <span onClick={clearHandlerClick} className="clear"></span>}
      <span onClick={submitHandler} className="submit">
        <span className="submit-icon">🔎</span>
      </span>
    </div>
  );
};

export default SearchBar;
