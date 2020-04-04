function calc(n) {

  if (/[0-9 -+/*()]{1,}/.test(n)) {

    n.trim()
    n = n.replace(/ +/g, ' ')
    n = n.replace(/[()]{1,}/g, '')
    
    for (let index = n.length; index >= 0; index--) {
      if (n[index] == '+' || n[index] == '-' || n[index] == '*' || n[index] == '/') {
      //перезапись в переменную с символа n[index] до третьего пробела
        let spase = 0
        let i
        let index_1 = index + 2

        for (index_1; n[index_1] != ' '; index_1++) {
          i += n[index_1]
        }

        a = Number(i)

        for (index_1 += 1; n[index_1] != ' '; index_1++){
          i += n[index_1]
        }

        b = Number(i)
        
        if (n[index] == '+'){
          i = a + b
        } else if (n[index] == '-') {
          i = a - b
        } else if (n[index] == '*') {
          i = a * b
        } else {
          i = a / b
        }

         i = String(i)
         n = n.substr(0, index) + i + n.substr(index_1, n.length - index_1)
         }
        
         if (index != 0){
           calc(n)
         }
   
    }
    return console.log('result is ', n) 
  } else {
    return console.log(uncorrect )
    }

}
