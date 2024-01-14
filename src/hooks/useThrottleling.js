export function createThrottle(callback, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }