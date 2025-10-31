# 🐾 PetShop Manager

Sistema de gerenciamento para petshops desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Descrição

O PetShop Manager é uma aplicação web simples e intuitiva para gerenciar clientes e produtos de um petshop. O sistema permite cadastrar informações de tutores e seus animais, visualizar produtos disponíveis e gerenciar um carrinho de compras.

## ✨ Funcionalidades

### 🏠 Página Inicial
- Apresentação do PetShop Premium
- Formulário de cadastro de clientes integrado

### 👥 Gestão de Clientes
- **Cadastro de Clientes**: Registro completo do tutor e do animal
  - Dados do tutor: nome, telefone, endereço
  - Dados do animal: nome, idade, porte
  - Data do atendimento
- **Visualização de Clientes**: Lista todos os clientes cadastrados
- **Detalhes do Cliente**: Modal com informações completas

### 🛍️ Catálogo de Produtos
- **8 produtos disponíveis**:
  - Ração Premium para Cães e Gatos
  - Coleira Ajustável
  - Brinquedo Interativo
  - Cama Confortável
  - Shampoo Pet
  - Comedouro Duplo
  - Arranhador para Gatos
- **Carrinho de Compras**: Adicionar produtos ao carrinho
- **Preços atualizados** com emojis temáticos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Funcionalidades interativas e armazenamento local
- **LocalStorage**: Persistência de dados no navegador

## 📁 Estrutura do Projeto

```
Desafio3035/
├── petshop_manager.html    # Arquivo principal HTML
├── petshop_css.css         # Estilos da aplicação
├── petshop_js.js          # Lógica e funcionalidades
└── README.md              # Este arquivo
```

## 🚀 Como Executar

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/Alan-oliveir/Desafio3035.git
   ```

2. **Navegue até a pasta do projeto**
   ```bash
   cd Desafio3035
   ```

3. **Abra o arquivo HTML no navegador**
   - Duplo clique em `petshop_manager.html`, ou
   - Abra com seu navegador preferido (Chrome, Firefox, Safari, etc.)

## 💾 Armazenamento de Dados

O sistema utiliza o **LocalStorage** do navegador para armazenar:
- 📋 Dados dos clientes cadastrados
- 🛒 Itens do carrinho de compras

**Nota**: Os dados ficam salvos localmente no navegador até serem limpos manualmente.

## 🎯 Funcionalidades Principais

### Navegação
- Interface de abas para alternar entre páginas
- Navegação fluida sem recarregamento da página

### Formulários
- Validação de campos obrigatórios
- Data padrão definida como hoje
- Reset automático após cadastro

### Modal
- Exibição das informações do cliente
- Abertura/fechamento intuitivo

## 🎨 Design

- **Interface moderna** com gradientes e cores vibrantes
- **Responsivo** para diferentes tamanhos de tela
- **Emojis temáticos** para melhor experiência visual
- **Cards interativos** para produtos e clientes
