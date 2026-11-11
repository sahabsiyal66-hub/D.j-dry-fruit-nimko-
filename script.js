
const weights = ["125 Gram", "250 Gram", "500 Gram", "1 KG"];

const productImages = {
  "Pista": "images/IMG-20261106-WA0019.jpg",
  "Badam": "images/IMG-20261106-WA0021.jpg",
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

const container = document.getElementById("product-list");

if (container && typeof products !== "undefined") {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";

    const img = document.createElement("img");
    img.src = productImages[product.name] || "";
    img.alt = product.name;
    img.loading = "lazy";

    img.onerror = function () {
      this.style.display = "none";
      imageBox.textContent = "Picture not available";
    };

    imageBox.appendChild(img);

    const heading = document.createElement("h3");
    heading.textContent = product.name;

    const priceList = document.createElement("div");
    priceList.className = "price-list";

    weights.forEach((weight, index) => {
      const line = document.createElement("div");
      line.textContent =
        weight + " : Rs. " + product.prices[index];

      priceList.appendChild(line);
    });

    const select = document.createElement("select");
    select.setAttribute("aria-label", "Choose weight");

    weights.forEach((weight, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent =
        weight + " - Rs. " + product.prices[index];

      select.appendChild(option);
    });

    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.min = "1";
    quantity.step = "1";
    quantity.value = "1";
    quantity.setAttribute("aria-label", "Quantity");

    const button = document.createElement("a");
    button.href = "#";
    button.className = "order-btn";
    button.textContent = "ORDER NOW";

    button.addEventListener("click", function (event) {
      event.preventDefault();

      const whatsappURL =
        "https://wa.me/923198173538?text=" +
        encodeURIComponent("Salam");

      window.open(whatsappURL, "_blank");
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
                   }
      
