import { useState, useMemo } from "react";
import { orders as ordersData } from "../../data/orders";
import Pagination from "./Pagination";  
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import TuneIcon from "@mui/icons-material/Tune";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import styles from "./OrdersTable.module.css";

export default function OrdersTable() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(
    () =>
      ordersData.filter(
        (o) =>
          o.id.includes(query) ||
          o.user.toLowerCase().includes(query.toLowerCase()) ||
          o.project.toLowerCase().includes(query.toLowerCase()) ||
          o.address.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className={styles.container}>
      {/* Table Header and Controls */}
      <div className={styles.header}>
        <h2 className={styles.title}>Order List</h2>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <AddIcon />
          </button>
          <button className={styles.actionButton}>
            <TuneIcon />
          </button>
          <button className={styles.actionButton}>
            <FilterAltIcon />
          </button>
          <div className={styles.searchContainer}>
            <SearchOutlinedIcon className={styles.searchIcon} />
            <input
              placeholder="Search..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((r, i) => (
              <tr key={r.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{r.id}</td>
                <td className={styles.userCell}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      sx={{ width: 24, height: 24, fontSize: 12 }}
                      src={r.avatar}
                    >
                      {r.user.charAt(0)}
                    </Avatar>
                    <span className={styles.userName}>{r.user}</span>
                  </div>
                </td>
                <td>{r.project}</td>
                <td>{r.address}</td>
                <td>{r.date}</td>
                <td>
                  <div className={styles.statusPill} data-status={r.status}>
                    <span className={styles.statusDot}></span>
                    {r.status}
                  </div>
                </td>
                <td>
                  <button className={styles.moreButton}>
                    <span className={styles.moreDot}></span>
                    <span className={styles.moreDot}></span>
                    <span className={styles.moreDot}></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <Pagination
          totalPages={totalPages}
          activePage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
