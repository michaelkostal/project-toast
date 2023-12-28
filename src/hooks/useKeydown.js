import React from 'react';
function useKeydown(keyPressed, callback){
    React.useEffect(() => {
        function handleKeyDown(event) {
          if (event.code === keyPressed) {
            callback(event);
          }
        }
      
        window.addEventListener('keydown', handleKeyDown);
      
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [keyPressed, callback]);
}
 
export default useKeydown;