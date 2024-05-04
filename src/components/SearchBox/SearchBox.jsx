import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;