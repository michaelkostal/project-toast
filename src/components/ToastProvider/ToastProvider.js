import React from 'react';
export const ToastContext = React.createContext();
function ToastProvider({children}) {
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
  const [toasts, setToasts] = React.useState([]);
  return <ToastContext.Provider value={{
    toasts,
    createToast,
    dismissToast
  }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
