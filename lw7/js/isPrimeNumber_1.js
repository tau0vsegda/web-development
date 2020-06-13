function isPrimeNumber(number) {
    let isPrime;
    if (Number.isInteger(number)) {
      isPrime = true;

      if (number < 2) {
        isPrime = false;
      }
      
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        return console.log(number, " is prime number");
      } else {
        return console.log(number, " is not prime number");
      }
    } else if (Array.isArray(number)) {
      let len = number.length;
      let j;
  
      for (let index = 0; index < len; index++) {
        j = number[index];
        
        isPrimeNumber(j);
      }
  
    } else {
      return console.log("This parameter is not number");
    }
  
  }