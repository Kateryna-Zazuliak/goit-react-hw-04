import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit, toastStyles }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchInput.value.trim();
    if (searchQuery === "") {
      toast("Please enter search word.", toastStyles);
      return;
    }
    onSubmit(searchQuery);
    event.target.elements.searchInput.value = "";
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchIcon}>
          <FiSearch />
        </button>
        <input
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
        />
      </form>
      <Toaster toastOptions={toastStyles} />
    </header>
  );
};

export default SearchBar;
