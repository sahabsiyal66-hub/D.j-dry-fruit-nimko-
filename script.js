
const weights = ["125 Gram", "250 Gram", "500 Gram", "1 KG"];

const productImages = {
  "Pista": "images/IMG-20261106-WA0019.jpg",
  "Badam": "images/IMG20161106-wa0021.jpg",
  "Kaju": "images/IMG-20261106-WA0029.jpg",
  "Akhrot": "images/IMG-20261106-WA0039.jpg",
  "Anjeer": "images/IMG-20261106-WA0030.jpg",
  "Green Magaz": "images/IMG-20261106-WA0022.jpg",
  "Kishmish": "images/IMG-20261106-WA0020.jpg",
  "Khubani": "images/IMG-20261106-WA0038.jpg",
  "Rewari": "images/IMG-20261106-WA0028.jpg",
  "Moong Phali": "images/IMG-20261106-WA0037.jpg",
  "Nimko": "images/IMG-20261106-WA0034.jpg",
  "Chocolate Moong Phali": "images/IMG-20261106-WA0033.jpg",
  "Dal China": "images/IMG-20261106-WA0023.jpg",
  "Dal Moong": "images/IMG-20261106-WA0032.jpg",
  "Kala Chana": "images/IMG-20261106-WA0024.jpg",
  "Safed Chana": "images/IMG-20261106-WA0027.jpg"
};

const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageBox = document.createElement("div");
  imageBox.className = "product-image";

  const img = document.createElement("img");
  img.src = productImages[product.name] || "";
  img.alt = product.name;

  img.onerror = function() {
    this.style.display = "none";
    imageBox.textContent = "Picture not found";
  };

  imageBox.appendChild(img);

  const heading = document.createElement("h3");
  heading.textContent = product.name;

  const priceList = document.createElement("div");
  priceList.className = "price-list";

  weights.forEach((weight, i) => {
    const line = document.createElement("div");
    line.textContent = weight + ": Rs. " + product.prices[i];
    priceList.appendChild(line);
  });

  const select = document.createElement("select");
  select.className = "weight";

  weights.forEach((weight, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = weight + " - Rs. " + product.prices[i];
    select.appendChild(option);
  });

  const quantity = document.createElement("input");
  quantity.className = "quantity";
  quantity.type = "number";
  quantity.min = "1";
  quantity.value = "1";

  const button = document.createElement("a");
  button.href = "#";
  button.className = "order-btn";
  button.textContent = "Order on WhatsApp";

  button.addEventListener("click", function(event) {
    event.preventDefault();

    const selected = Number(select.value);
    const qty = Math.max(1, Number(quantity.value) || 1);
    const price = product.prices[selected];
    const subtotal = price * qty;
    const delivery = subtotal >= 2000 ? 0 : 200;
    const total = subtotal + delivery;

    const message =
      "Assalam-o-Alaikum! D.J Dry Fruits\n" +
      "Product: " + product.name + "\n" +
      "Weight: " + weights[selected] + "\n" +
      "Quantity: " + qty + "\n" +
      "Price: Rs. " + price + "\n" +
      "Subtotal: Rs. " + subtotal + "\n" +
      "Delivery: " + (delivery === 0 ? "FREE" : "Rs. 200") + "\n" +
      "Total: Rs. " + total;

    window.open(
      "https://wa.me/923198173538?text=" +
      encodeURIComponent(message),
      "_blank"
    );
  });

  card.append(
    imageBox,
    heading,
    priceList,
    select,
    quantity,
    button
  );

  container.appendChild(card);
});
