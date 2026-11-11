
const weights = ["125 Gram", "250 Gram", "500 Gram", "1 KG"];

const container = document.getElementById("products");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-image">
      <img src="images/${index + 1}.jpg"
           alt="${product.name}"
           onerror="this.style.display='none'; this.parentElement.textContent='Your Product Picture';">
    </div>

    <h3>${product.name}</h3>

    <div class="price-list">
      ${weights.map((weight, i) =>
        `<div>${weight}: Rs. ${product.prices[i]}</div>`
      ).join("")}
    </div>

    <select class="weight">
      ${weights.map((weight, i) =>
        `<option value="${i}">${weight} - Rs. ${product.prices[i]}</option>`
      ).join("")}
    </select>

    <input class="quantity" type="number" min="1" value="1">

    <a href="#" class="order-btn">Order on WhatsApp</a>
  `;

  const button = card.querySelector(".order-btn");

  button.addEventListener("click", function(event) {
    event.preventDefault();

    const selected = Number(card.querySelector(".weight").value);
    const quantity = Math.max(1, Number(card.querySelector(".quantity").value) || 1);
    const price = product.prices[selected];
    const subtotal = price * quantity;
    const delivery = subtotal >= 2000 ? 0 : 200;
    const total = subtotal + delivery;

    const message =
      `Assalam-o-Alaikum! D.J Dry Fruits\n` +
      `Product: ${product.name}\n` +
      `Weight: ${weights[selected]}\n` +
      `Quantity: ${quantity}\n` +
      `Price: Rs. ${price}\n` +
      `Subtotal: Rs. ${subtotal}\n` +
      `Delivery: ${delivery === 0 ? "FREE" : "Rs. 200"}\n` +
      `Total: Rs. ${total}`;

    window.open(
      "https://wa.me/923198173538?text=" + encodeURIComponent(message),
      "_blank"
    );
  });

  container.appendChild(card);
});
                                        
