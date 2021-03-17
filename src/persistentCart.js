const persistentCart = () => {
    const key = 'shop';
    
    return {
        persist: (data) => localStorage.setItem(key, data),
        get: () => localStorage.getItem(key),
    }
  
  }
  
  export default persistentCart;
  