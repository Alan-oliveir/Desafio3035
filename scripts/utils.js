const Utils = {
  showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  },

  formatCurrency(value) {
    return `$ ${value.toFixed(2)}`;
  },

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("pt-BR");
  },

  getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  },
};
