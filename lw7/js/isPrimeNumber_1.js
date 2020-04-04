function isPrimeNumber(n) {
    let isPrime
    if (Number.isInteger(n)) {
      isPrime = true
      
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          isPrime = false
          break
        }
      }
  
      if (isPrime) {
        return console.log(n, " is prime number")
      } else {
        return console.log(n, " is not prime number")
      }
    } else if (Array.isArray(n)) {
      len = n.length
  
      for (let index = 0; index < len; index++) {
        j = n[index]
        
        isPrimeNumber(j)
      }
  
    } else {
      return console.log("This parameter is not number")
    }
  
  }