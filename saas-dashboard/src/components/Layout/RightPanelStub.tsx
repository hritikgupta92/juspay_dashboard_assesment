import type { FC } from "react";
import styles from "./RightPanelStub.module.css";

/**
 * Simple right-side panel stub with Notifications, Activities and Contacts.
 * Replace the hard-coded arrays with data imports later (src/data/*).
 */

const notifications = [
  { id: 1, title: "New order #CM9801 placed", time: "2m ago" },
  { id: 2, title: "Payment received from Kate", time: "10m ago" },
  { id: 3, title: "Promo code claimed", time: "1h ago" },
];

const activities = [
  { id: 1, text: "Natali created a new project", time: "just now" },
  { id: 2, text: "Order #CM9802 moved to Complete", time: "5m ago" },
  { id: 3, text: "Deployment succeeded", time: "40m ago" },
];

const contacts = [
  { id: 1, name: "Bradley Cooper", label: "Product", avatar: "" },
  { id: 2, name: "Natali Craig", label: "Design", avatar: "" },
  { id: 3, name: "Kate Morrison", label: "Frontend", avatar: "" },
];

const RightPanelStub: FC = () => {
  return (
    <aside className={styles.container} aria-label="Right panel">
      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Notifications</h3>
          <button className={styles.clearBtn} aria-label="Clear notifications">Clear</button>
        </div>
        <ul className={styles.list}>
          {notifications.map((n) => (
            <li key={n.id} className={styles.item}>
              <div className={styles.itemLeft}>
                <div className={styles.dot} aria-hidden />
                <div>
                  <div className={styles.title}>{n.title}</div>
                  <div className={styles.time}>{n.time}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.header}><h3>Activities</h3></div>
        <ul className={styles.list}>
          {activities.map((a) => (
            <li key={a.id} className={styles.activityItem}>
              <div className={styles.activityText}>{a.text}</div>
              <div className={styles.time}>{a.time}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.header}><h3>Contacts</h3></div>
        <ul className={styles.contacts}>
          {contacts.map((c) => (
            <li key={c.id} className={styles.contactItem}>
              <div className={styles.avatar} aria-hidden>
                {c.avatar ? <img src={c.avatar} alt={c.name} /> : c.name.slice(0, 2).toUpperCase()}
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{c.name}</div>
                <div className={styles.contactLabel}>{c.label}</div>
              </div>
              <button className={styles.msgBtn} aria-label={`Message ${c.name}`}>Msg</button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default RightPanelStub;
