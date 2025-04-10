const run = (text) => {
    // BEGIN
    const takeLast = (text, n) => {
      if (text.length < n || n <= 0) {
          return null;
      }

      const lastNChars = text.slice(-n);
      return lastNChars.split('').reverse().join(''); 
  };
    // END
  
    return takeLast(text, 4);
  };
  
export default run;