
  // function waiting for event to happen, this case click, also preventes reset of page //
document.getElementById('generate').addEventListener('click', event => {
event.preventDefault()
  // starts prompt in this case talking about length // 
  let length =prompt('Choose between atleast 8-128 characters long')
    while (length < 8 || length > 128) {
      alert('Please enter correct amount of characters')
      length = prompt('choose between 8 - 128 character long')
    }
  // defines prompts when triggered to be confirmed if they want lowercase, uppercase, special characters // 
  let lowercaseRes = confirm('Do you want between lowercase?')
  let uppercaseRes = confirm('Do you want uppercase?')
  let numericRes = confirm('Do you want numbers?')
  let specialRes = confirm('Do you want special characters?')
  
  // defines lowercase, uppercase, numeric, special characters that are constants for each variable // 
    const lowercase = 'abcdefghijklmopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeric = '1234567890'
    const special = '!@#$%&*'

  let tempPass = ''
  let randomPass =''
  // conditionals check if user wants specific variable options
  // if yes, add variable to tempPass
  if (lowercaseRes) {tempPass += lowercase}
  if (numericRes) {tempPass += numeric}
  if (uppercaseRes) {tempPass += uppercase}
  if (specialRes) {tempPass += special}

  for (let i = 0; i< length; i++) {
    //add a random character from tempPass to random pass every iteration
   randomPass += tempPass[Math.floor(Math.random() * tempPass.length)]
  }

  // populate password textContent with randomPass
  document.getElementById('password').textContent = randomPass

})