import styles from './Pagination.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({ totalPages, activePage, onPageChange }:any) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pager}>
      <button
        className={styles.pageArrow}
        onClick={() => onPageChange(Math.max(1, activePage - 1))}
        disabled={activePage === 1}
      >
        <IoIosArrowBack />
      </button>

      {pages.map((page) => (
        <span
          key={page}
          className={`${styles.pageNumber} ${
            activePage === page ? styles.active : ''
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}

      <button
        className={styles.pageArrow}
        onClick={() => onPageChange(Math.min(totalPages, activePage + 1))}
        disabled={activePage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
