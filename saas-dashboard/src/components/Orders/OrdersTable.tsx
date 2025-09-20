import   { useState, useMemo } from 'react';
import { orders as ordersData } from '../../data/orders';
import styles from './OrdersTable.module.css';

export default function OrdersTable(){
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(() => ordersData.filter(o =>
    o.id.includes(query) || o.user.toLowerCase().includes(query.toLowerCase()) || o.project.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  const pageData = filtered.slice((page-1)*perPage, page*perPage);

  return (
    <div>
      <div className={styles.controls}>
        <input placeholder="Search orders" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((r, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{r.id}</td>
              <td>{r.user}</td>
              <td>{r.project}</td>
              <td>{r.address}</td>
              <td>{r.date}</td>
              <td><span className={styles.status}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination controls */}
      <div className={styles.pager}>
        <button onClick={() => setPage(p => Math.max(1,p-1))}>Prev</button>
        <span>{page}</span>
        <button onClick={() => setPage(p => p+1)}>Next</button>
      </div>
    </div>
  );
}
