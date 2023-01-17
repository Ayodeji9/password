let output = document.getElementById('output')
let passlength = document.getElementById('passlength')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let btn = document.getElementById('btn')
let trash = document.getElementById('trash')


let numval = ['1','2','3','4','5','6','7','8','9','0']
let uppercaseval = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let lowercaseval = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let symbolval = ["'",",",";",":","<",">","/","?"]
let passHolder = []
let password = ''
let y = ''




numbers.addEventListener('click', ()=> {
    if (numbers) {
        passHolder.push(numval.join(''))  
    }
} )
uppercase.addEventListener('click', ()=> {
    if (uppercase) {
        passHolder.push(uppercaseval.join(''))  
    }
} )
lowercase.addEventListener('click', ()=> {
    if (lowercase) {
        passHolder.push(lowercaseval.join(''))  
    }
} )
symbols.addEventListener('click', ()=> {
    if (symbols) {
        passHolder.push(symbolval.join(''))  
    }
} )




function PassGen() {
    password += passHolder.join('')
  for (let x = 0; x <= passlength.value -1 ; x++) {
    let passRand = Math.floor(Math.random() * password.length);
    y += password[passRand];
  }

  output.value = y
  y = ''

}

trash.addEventListener('click',()=>{
    let x = output.value 
    output.value =''
    let y = passlength.value
    passlength.value = ''
    
})


