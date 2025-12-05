const ProductManager = {
  products: [],

  async init() {
    await this.loadProductsFromFile();
  },

  async loadProductsFromFile() {
    try {
      const response = await fetch("./data/products.json");
      this.products = await response.json();
    } catch (error) {
      console.error("Error loading products:", error);
      this.products = [];
    }
  },

  displayProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    if (this.products.length === 0) {
      grid.innerHTML =
        '<p style="color: white; text-align: center; grid-column: 1/-1;">No products available.</p>';
      return;
    }

    grid.innerHTML = this.products
      .map(
        (product) => `
      <div class="product-card" onclick='ProductManager.addToCart(${JSON.stringify(
        product
      ).replace(/'/g, "&apos;")})'>
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <p class="product-price">${Utils.formatCurrency(product.price)}</p>
        </div>
      </div>
    `
      )
      .join("");
  },

  addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push({
      ...product,
      addedAt: new Date().toISOString(),
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    Utils.showToast(`${product.name} added to cart! 🛒`);
  },

  getCartItems() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  },

  clearCart() {
    localStorage.removeItem("cart");
    Utils.showToast("Cart cleared! 🗑️");
  },
};
