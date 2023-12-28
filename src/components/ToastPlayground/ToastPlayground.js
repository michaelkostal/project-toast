import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [message,setMessage] = React.useState('Default notice message');
  const [toastVariant,setToastVariant] = React.useState('notice');
  const [showToast, setShowToast] = React.useState(false);
  function handleToast(){
    setShowToast(true);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && <Toast variant={toastVariant} message={message} setShowToast={setShowToast} />}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={e=>{
              setMessage(e.target.value);
            }}>
              {message}
            </textarea>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(variant => {
              return <label htmlFor={`variant-${variant}`} key={variant}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={toastVariant === variant}
                  onChange={e=>{
                    setToastVariant(e.target.value);
                  }}
                />
                  {variant}
                </label>
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handleToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
