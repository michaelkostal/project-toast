import React from 'react';
export const ToastContext = React.createContext();
function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  function dismissAllToasts(){
    setToasts([]);
  }
  function createToast(message, variant){
    const toast = {message:message, variant:variant, id: Math.random()};
    const nextToasts = [...toasts, toast];
    setToasts(nextToasts);
  }
  function dismissToast(id){
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }
  return <ToastContext.Provider value={{
    toasts,
    createToast,
    dismissToast,
    dismissAllToasts
  }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
