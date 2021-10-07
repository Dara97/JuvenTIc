const tbodyResumen= document.querySelector('.tbodyResumen')
let carrito = []

function renderCarrito(){
  tbodyResumen.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
            <td class="table__productos">
              <h6 class="title">${item.title}</h6>
            </td>
        
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">${item.cantidad}
            </td>
          
    
    ` //<input type="number" min="1" value=${item.cantidad} >
    tr.innerHTML = Content;
    tbodyResumen.append(tr)
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
  
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
    
  }
}
 
