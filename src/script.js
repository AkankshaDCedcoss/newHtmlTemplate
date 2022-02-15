var product = [];
$(document).ready(function () {
  
});

$("#add_product").on("click", function () {
    var id = document.getElementById("product_id").value;
    var name = document.getElementById("product_name").value;
    var price = parseInt(document.getElementById("product_price").value);
    var quantity = parseInt(document.getElementById("product_quantity").value);
    console.log("id "+id);
    var product_details = {
      id: id,
      name: name,
      price: price,
      quantity: quantity
    };
    product.push(product_details);
    //readData(product);
    console.log("product "+product);
  });


function readData(product) {
    console.log("product.length "+product.length);
  html =
    "<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";
  for (var i = 0; i < product.length; i++) {
    html +=
      "<tr><td>" +
      product[i].id +
      "</td><td>" +
      product[i].name +
      "</td><td>" +
      product[i].price +
      "</td><td>" +
      product[i].quantity +
      "</td></tr>";
  }
  html += "</table>";
  console.log("Exiting function");
  document.getElementById("display").innerHTML = html;
}
function search() {
  var val1 = $("#select1 :selected").text();

  var id = document.getElementById("product_id").value;
  var name = document.getElementById("product_name").value;
  var price = parseInt(document.getElementById("product_price").value);
  var quantity = parseInt(document.getElementById("product_quantity").value);
  console.log(val1);
  console.log("id" + id);
  var z = parseInt(document.getElementById("query").value);

  if (val1 == "Id") {
    html =
      "<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";

    for (var i = 0; i < product.length; i++) {
      if (product[i].id == z) {
        html +=
          "<tr><td>" +
          product[i].id +
          "</td><td>" +
          product[i].name +
          "</td><td>" +
          product[i].price +
          "</td><td>" +
          product[i].quantity +
          "</td></tr>";
      }
    }
      html += "</table>";
      document.getElementById("display").innerHTML = html;
    
  } else if (val1 == "Name") {
    html =
      "<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";

    for (var i = 0; i < product.length; i++) {
      if (product[i].name == z) {
        html +=
          "<tr><td>" +"   "+
          product[i].id +
          "</td><td>" +
          product[i].name +
          "</td><td>" +
          product[i].price +
          "</td><td>" +
          product[i].quantity +
          "</td></tr>";
      }
    }
      html += "</table>";
      document.getElementById("display").innerHTML = html;
    
  } else if (val1 == "Price") {
    ("<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th></tr>");
    for (var i = 0; i < product.length; i++) {
      if (product[i].price == z) {
        html = html +=
          "<tr><td>" +
          product[i].id +
          "</td><td>" +
          product[i].name +
          "</td><td>" +
          product[i].price +
          "</td><td>" +
          product[i].quantity +
          "</td></tr>";
      }
    }
      html += "</table>";
      document.getElementById("display").innerHTML = html;
    
  } else {
    html =
      "<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";
    for (var i = 0; i < product.length; i++) {
      if (product[i].quantity == z) {
        html +=
          "<tr><td>" +
          product[i].id +
          "</td><td>" +
          product[i].name +
          "</td><td>" +
          product[i].price +
          "</td><td>" +
          product[i].quantity +
          "</td></tr>";
      }
    }
      html += "</table>";
      document.getElementById("display").innerHTML = html;
    
  }
}
