document.querySelector('#btnSend').addEventListener('click',()=>{
    
    const idGuitar = document.querySelector('#idGuitar').value
    const nameGuitar = document.querySelector('#nameGuitar').value
    const data = {id:idGuitar,name:nameGuitar }

    fetch('http://localhost:3003/',{
      method : "POST",
      headers : {
        "Content-Type":"application/json"
      },
      body : JSON.stringify(data)
    })
    .then( res => res.json())
    .then( res => fetch("http://localhost:3003"))
    .catch( err => console.log(err))
  })