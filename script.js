// Produtos do petshop
const produtos = [
  {
    id: 1,
    nome: "Ração Premium Cães",
    preco: 89.9,
    emoji: "🍖",
    descricao: "Ração de alta qualidade para cães adultos",
  },
  {
    id: 2,
    nome: "Ração Premium Gatos",
    preco: 79.9,
    emoji: "🐟",
    descricao: "Ração especial para gatos adultos",
  },
  {
    id: 3,
    nome: "Coleira Ajustável",
    preco: 29.9,
    emoji: "🦴",
    descricao: "Coleira confortável e resistente",
  },
  {
    id: 4,
    nome: "Brinquedo Interativo",
    preco: 39.9,
    emoji: "🎾",
    descricao: "Brinquedo estimulante para pets",
  },
  {
    id: 5,
    nome: "Cama Confortável",
    preco: 149.9,
    emoji: "🛏️",
    descricao: "Cama macia e aconchegante",
  },
  {
    id: 6,
    nome: "Shampoo Pet",
    preco: 24.9,
    emoji: "🧴",
    descricao: "Shampoo hipoalergênico",
  },
  {
    id: 7,
    nome: "Comedouro Duplo",
    preco: 34.9,
    emoji: "🥣",
    descricao: "Comedouro com compartimentos",
  },
  {
    id: 8,
    nome: "Arranhador Gatos",
    preco: 119.9,
    emoji: "🪵",
    descricao: "Arranhador vertical resistente",
  },
];

// Navegação entre páginas
function showPage(pageId) {
  // Remove classe active de todas as páginas
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));

  // Remove classe active de todos os botões
  document
    .querySelectorAll(".nav-links button")
    .forEach((b) => b.classList.remove("active"));

  // Adiciona classe active na página selecionada
  document.getElementById(pageId).classList.add("active");

  // Adiciona classe active no botão clicado
  event.target.classList.add("active");

  // Carrega dados específicos da página
  if (pageId === "clientes") {
    loadClientes();
  } else if (pageId === "produtos") {
    loadProdutos();
  }
}

// Cadastro de clientes
document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const cliente = {
      id: Date.now(),
      tutor: {
        nome: document.getElementById("tutorNome").value,
        telefone: document.getElementById("tutorTelefone").value,
        endereco: document.getElementById("tutorEndereco").value,
      },
      animal: {
        nome: document.getElementById("animalNome").value,
        idade: document.getElementById("animalIdade").value,
        porte: document.getElementById("animalPorte").value,
      },
      dataAtendimento: document.getElementById("dataAtendimento").value,
    };

    // Salvar no localStorage
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    showToast("Cliente cadastrado com sucesso! 🎉");
    this.reset();

    // Define a data de hoje novamente após reset
    document.getElementById("dataAtendimento").valueAsDate = new Date();
  });

// Carregar e exibir clientes
function loadClientes() {
  const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  const grid = document.getElementById("clientesGrid");

  if (clientes.length === 0) {
    grid.innerHTML =
      '<p style="color: white; text-align: center; grid-column: 1/-1;">Nenhum cliente cadastrado ainda.</p>';
    return;
  }

  grid.innerHTML = clientes
    .map(
      (cliente) => `
        <div class="card" onclick='showClienteModal(${JSON.stringify(
          cliente
        ).replace(/'/g, "&apos;")})'>
            <h3>🐾 ${cliente.animal.nome}</h3>
            <p><strong>Tutor:</strong> ${cliente.tutor.nome}</p>
            <p class="date">📅 ${new Date(
              cliente.dataAtendimento
            ).toLocaleDateString("pt-BR")}</p>
        </div>
    `
    )
    .join("");
}

// Exibir modal com detalhes do cliente
function showClienteModal(cliente) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
        <div class="form-section">
            <h3>👤 Tutor</h3>
            <div class="modal-info">
                <strong>Nome:</strong>
                <p>${cliente.tutor.nome}</p>
            </div>
            <div class="modal-info">
                <strong>Telefone:</strong>
                <p>${cliente.tutor.telefone}</p>
            </div>
            <div class="modal-info">
                <strong>Endereço:</strong>
                <p>${cliente.tutor.endereco}</p>
            </div>
        </div>
        <div class="form-section">
            <h3>🐕 Animal</h3>
            <div class="modal-info">
                <strong>Nome:</strong>
                <p>${cliente.animal.nome}</p>
            </div>
            <div class="modal-info">
                <strong>Idade:</strong>
                <p>${cliente.animal.idade} anos</p>
            </div>
            <div class="modal-info">
                <strong>Porte:</strong>
                <p>${cliente.animal.porte}</p>
            </div>
        </div>
        <div class="modal-info">
            <strong>📅 Data do Atendimento:</strong>
            <p>${new Date(cliente.dataAtendimento).toLocaleDateString(
              "pt-BR"
            )}</p>
        </div>
    `;

  modal.classList.add("active");
}

// Fechar modal
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

// Carregar e exibir produtos
function loadProdutos() {
  const grid = document.getElementById("produtosGrid");

  grid.innerHTML = produtos
    .map(
      (produto) => `
        <div class="product-card" onclick='addToCart(${JSON.stringify(
          produto
        ).replace(/'/g, "&apos;")})'>
            <div class="product-image">${produto.emoji}</div>
            <div class="product-info">
                <h3>${produto.nome}</h3>
                <p class="product-description">${produto.descricao}</p>
                <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// Adicionar produto ao carrinho
function addToCart(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

  carrinho.push({
    ...produto,
    addedAt: new Date().toISOString(),
  });

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  showToast(`${produto.nome} adicionado ao carrinho! 🛒`);
}

// Exibir notificação toast
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Event listeners
// Fechar modal ao clicar fora do conteúdo
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Definir data padrão como hoje ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("dataAtendimento").valueAsDate = new Date();
});
