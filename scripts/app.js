const Navigation = {
  currentPage: "home",

  init() {
    this.setupEventListeners();
    ClientManager.init();
    ProductManager.init();
  },

  setupEventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      this.showPage("home");
    });
  },

  showPage(pageId) {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document
      .querySelectorAll(".nav-links button")
      .forEach((b) => b.classList.remove("active"));

    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    const button = event?.target;
    if (button) {
      button.classList.add("active");
    }

    this.currentPage = pageId;

    if (pageId === "clients") {
      ClientManager.loadClients();
    } else if (pageId === "products") {
      ProductManager.displayProducts();
    }
  },
};

function showPage(pageId) {
  Navigation.showPage(pageId);
}

function closeModal() {
  ClientManager.closeModal();
}

Navigation.init();
