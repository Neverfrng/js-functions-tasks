// BEGIN
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, limit = Math.sqrt(num); i <= limit; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  export default function sayPrimeOrNot(num) {
    console.log(isPrime(num) ? 'yes' : 'no');
  }
// END