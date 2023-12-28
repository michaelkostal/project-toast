import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';

// import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [message,setMessage] = React.useState('Default notice message');
  const [variant,setVariant] = React.useState('notice');
  const [showToast, setShowToast] = React.useState(false);
  function handleToast(){
    setShowToast(true);
  }
  const [toasts, setToasts] = React.useState([]);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && <Toast variant={variant} message={message} handleDismiss={setShowToast} />}
      <form 
        className={styles.controlsWrapper} 
        onSubmit={(e)=>{
          const toast = {message:message, variant:variant, id: Math.random()};
          const nextToasts = [...toasts, toast];
          setToasts(nextToasts);
          e.preventDefault();
          handleToast();
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={e=>{
              setMessage(e.target.value);
            }}>
            </textarea>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => {
              return <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={e=>{
                    setVariant(e.target.value);
                  }}
                />
                  {option}
                </label>
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
