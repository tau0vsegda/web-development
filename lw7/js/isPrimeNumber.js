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
        console.log(n, 'is prime number')
      } else {
        console.log(n, ' is not prime number')
      }
    } else if (Array.isArray(n)) {
      len = n.length
  
      for (let index = 0; index < len; index++) {
        j = n[index]
        
        if (Number.isInteger(j)) {
          isPrime = true
          
          for (let i = 2; i < j; i++) {
            if (j % i == 0) {
              isPrime = false
              break
            }
          }
      
          if (isPrime) {
            console.log(j, ' is prime number')
          } else {
            console.log(j, ' is not prime number')
          }
        } else {
          console.log('This parameter is not number')
        }
      }
  
    } else {
      console.log('This parameter is not number')
    }
  
  }