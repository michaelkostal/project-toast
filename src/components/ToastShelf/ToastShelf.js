import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts}) {
  function handleDismiss(id){
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({id,message,variant}) => {
        return <li key={id} className={styles.toastWrapper}>
          <Toast toasts={toasts} id={id} variant={variant} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
