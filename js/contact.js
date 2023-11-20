function sendButtonEmail(){
  let inputValueName = document.getElementById('name-box').value;
  let inputValueEmail = document.getElementById('email-box').value;
  let inputValuePhoneNumber = document.getElementById('phoneNumber-box').value;
  let inputValueSubject = document.getElementById('subject-dropdown').value;
  let inputValueMessage = document.getElementById('textarea-box').value;

  if(inputValueName === ''){
    
    console.log('Masukan Nama!!')
  } else {
    console.log(inputValueName)
  };

  if(inputValueEmail === ''){
    console.log('Masukan Email!!')
  } else {
    console.log(inputValueEmail)
  };

  if(inputValuePhoneNumber === ''){
    console.log('Masukan Nomor Telpon!!')
  } else {
    console.log(inputValuePhoneNumber)
  }

  if(inputValueSubject === ''){
    console.log('Pilih Subject!!')
  } else {
    console.log(inputValueSubject)
  }

  if(inputValueMessage === ''){
    console.log('Masukan Pesan!!')
  } else {
    console.log(inputValueMessage)
  }

  let a = document.createElement("a");
  a.href = `mailto:${inputValueEmail}?subject=${inputValueSubject}&body=${inputValueMessage}`

  a.click()
}