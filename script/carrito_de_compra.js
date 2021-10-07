
const Clickbutton = document.querySelectorAll('.agregarCarrito')
const tbody = document.querySelector('.tbody')
console.log(tbody)
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.col')
  const itemTitle = item.querySelector('#nameProduct').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemDescription = item.querySelector('.description').textContent;
  const itemImg = item.querySelector('#image').src;

  console.log(itemDescription)
  
  const newItem = {
    title: itemTitle,
    description: itemDescription,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}

function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = document.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  renderCarrito()
  
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    //document.location.
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table_description">${item.description}</td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito);
    tr.querySelector('.input__elemento').addEventListener('change', sumaCantidad);

  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){

  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')
  
  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target;
  
  
  
  const tr = sumaInput.closest('.ItemCarrito');
  
  const title = tr.querySelector('.title').textContent.trim();
  
 
  
  carrito.forEach(item => {
    if(item.title.trim() === title){
      
      sumaInput.value < 1 ?  (sumaInput.value = 1) : item.cantidad = sumaInput.value;
      CarritoTotal();
      
    }
  })
}



function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}

