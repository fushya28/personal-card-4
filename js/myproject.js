let dataLog = []


function submitBlog(event){
  event.preventDefault()

  const nameValue = document.getElementById('projectname').value
  const descValue = document.getElementById('descbox').value
  let imageValue = document.getElementById('uploadCont').files
  // let nodeJsLogo = document.getElementById('nodeJs').checked;
  // let reactJsLogo = document.getElementById('reactJs').checked;
  // let bootstrapLogo = document.getElementById('bootstrap').checked;
  // let vueJsLogo = document.getElementById('vueJs').checked;
  let logoHTMLValue = logoValueCheck()
  console.log(logoHTMLValue)


  // console.log(inputName)
  // console.log(inputDesc)

  imageValue = URL.createObjectURL(imageValue[0])
  console.log(imageValue)

  const blog = {
    name: nameValue,
    desc: descValue,
    image: imageValue,
    date: '1 januari 2001',
    tect: logoHTMLValue,
    author: 'Naufal Daffa'
  }

  dataLog.push(blog)
  console.log(dataLog)

  htmlMaker();
  
}

function htmlMaker (){
  document.querySelector('.blogPage').innerHTML = ''
  for (let i=0; i < dataLog.length; i++){
  document.querySelector('.blogPage').innerHTML += `
    <div class="sub-container">
        <img src="${dataLog[i].image}" alt="Image 1">
        <h3>${dataLog[i].name}</h3>
        <p id="date">${dataLog[i].date}</p>
        <p>${dataLog[i].desc}</p>
        <div class="logo">
        ${dataLog[i].tect}
        <i class="fa-brands fa-bootstrap"></i>
        </div>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    ` 

    
  }
}

function logoValueCheck (){
  let logohtml = ``

  let nodeJsLogo = document.getElementById('nodeJs').checked;
  let reactJsLogo = document.getElementById('reactJs').checked;
  let bootstrapLogo = document.getElementById('bootstrap').checked;
  let vueJsLogo = document.getElementById('vueJs').checked;

  if(nodeJsLogo === true){
    logohtml += `<i class="fa-brands fa-node-js"></i>`
  } else {
    false
  }

  if(reactJsLogo === true){
    logohtml += `<i class="fa-brands fa-react"></i>`
  } else {
    false
  }

  if(bootstrapLogo === true){
    logohtml += `<i class="fa-brands fa-bootstrap"></i>`
  } else {
    false
  }

  if(vueJsLogo === true){
    logohtml += `<i class="fa-brands fa-vuejs"></i>`
  } else {
    false
  }

  return logohtml;
}