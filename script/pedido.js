alert("hola carrito");
$(document).ready(function () {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(carrito);

  for (let i = 0; i < carrito.length; i++) {
    let item = i + 1;
    let nameProduct = carrito[i].nombre;
    let img = carrito[i].img;
    let amount = carrito[i].cantidad;
    let price = carrito[i].precio;

    console.log(item);
    console.log(nameProduct);
    console.log(img);
    console.log(amount);
    console.log(price);

    $(".tbody").append(
      "<tr>" +
      "<td>" +
      item +
      "</td>" +
      "<td> <div>" +
      nameProduct +
      '<br><img src="' +
      img +
      '" alt=""> </div>' +
      "<td>" +
      amount +
      "</td>" +
      "<td>" +
      price +
      "</td>" +
      "</tr>"
    );
  }
});
