const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) {
      return 1;
    }

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        return i;
      }
    }
    // END
  };
  
export default smallestDivisor;
  