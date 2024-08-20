import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={css.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
