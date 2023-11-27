import styles from './Notification.module.css';
const Notification = (props) => {
  let statusClasses = '';
  if (props.status === 'pending') statusClasses = styles.pending;
  if (props.status === 'error') statusClasses = styles.error;
  if (props.status === 'success') statusClasses = styles.success;

  return (
    <section className={`${styles.notification} ${statusClasses}`}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    </section>
  );
};

export default Notification;