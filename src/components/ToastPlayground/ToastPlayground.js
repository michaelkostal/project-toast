import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

// import Toast from '../Toast';

import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [message,setMessage] = React.useState('');
  const [variant,setVariant] = React.useState(VARIANT_OPTIONS[0]);
  

  const [toasts, setToasts] = React.useState([]);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} setToasts={setToasts} />
      <form 
        className={styles.controlsWrapper} 
        onSubmit={(e)=>{
          e.preventDefault();
          const toast = {message:message, variant:variant, id: Math.random()};
          const nextToasts = [...toasts, toast];
          setToasts(nextToasts);
          // Reset form to default states
          setMessage('');
          setVariant(VARIANT_OPTIONS[0]);
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
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message} 
              required={true}
              onChange={e=>{
              setMessage(e.target.value);
              }}
            >
            </textarea>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => {
              const id = `variant-${option}`;
              return <label key={id} htmlFor={id}>
                <input
                  id={id}
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
