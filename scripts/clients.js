const ClientManager = {
  clients: [],

  init() {
    this.setupEventListeners();
    this.setDefaultDate();
  },

  setupEventListeners() {
    const form = document.getElementById("clientForm");
    if (form) {
      form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    const modal = document.getElementById("modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          this.closeModal();
        }
      });
    }
  },

  setDefaultDate() {
    const dateInput = document.getElementById("appointmentDate");
    if (dateInput) {
      dateInput.value = Utils.getCurrentDate();
    }
  },

  handleSubmit(e) {
    e.preventDefault();

    const client = {
      id: Date.now(),
      owner: {
        name: document.getElementById("ownerName").value,
        phone: document.getElementById("ownerPhone").value,
        address: document.getElementById("ownerAddress").value,
      },
      pet: {
        name: document.getElementById("petName").value,
        age: document.getElementById("petAge").value,
        size: document.getElementById("petSize").value,
      },
      appointmentDate: document.getElementById("appointmentDate").value,
    };

    this.saveClient(client);
    Utils.showToast("Client registered successfully! 🎉");
    e.target.reset();
    this.setDefaultDate();
  },

  saveClient(client) {
    let clients = JSON.parse(localStorage.getItem("clients") || "[]");
    clients.push(client);
    localStorage.setItem("clients", JSON.stringify(clients));
  },

  loadClients() {
    const clients = JSON.parse(localStorage.getItem("clients") || "[]");
    const grid = document.getElementById("clientsGrid");

    if (!grid) return;

    if (clients.length === 0) {
      grid.innerHTML =
        '<p style="color: white; text-align: center; grid-column: 1/-1;">No clients registered yet.</p>';
      return;
    }

    grid.innerHTML = clients
      .map(
        (client) => `
      <div class="card" onclick='ClientManager.showModal(${JSON.stringify(
        client
      ).replace(/'/g, "&apos;")})'>
        <h3>🐾 ${client.pet.name}</h3>
        <p><strong>Owner:</strong> ${client.owner.name}</p>
        <p class="date">📅 ${Utils.formatDate(client.appointmentDate)}</p>
      </div>
    `
      )
      .join("");
  },

  showModal(client) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    if (!modal || !content) return;

    content.innerHTML = `
      <div class="form-section">
        <h3>👤 Owner Information</h3>
        <div class="modal-info">
          <strong>Name:</strong>
          <p>${client.owner.name}</p>
        </div>
        <div class="modal-info">
          <strong>Phone:</strong>
          <p>${client.owner.phone}</p>
        </div>
        <div class="modal-info">
          <strong>Address:</strong>
          <p>${client.owner.address}</p>
        </div>
      </div>
      <div class="form-section">
        <h3>🐕 Pet Information</h3>
        <div class="modal-info">
          <strong>Name:</strong>
          <p>${client.pet.name}</p>
        </div>
        <div class="modal-info">
          <strong>Age:</strong>
          <p>${client.pet.age} years</p>
        </div>
        <div class="modal-info">
          <strong>Size:</strong>
          <p>${client.pet.size}</p>
        </div>
      </div>
      <div class="modal-info">
        <strong>📅 Appointment Date:</strong>
        <p>${Utils.formatDate(client.appointmentDate)}</p>
      </div>
    `;

    modal.classList.add("active");
  },

  closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.classList.remove("active");
    }
  },
};
