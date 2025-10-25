/* assets/js/scripts.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidade do Menu Hambúrguer
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            const isExpanded = nav.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });
    }

    // 2. Feedback do Formulário de Cadastro
    const cadastroForm = document.querySelector("#cadastroForm");
    const formAlert = document.querySelector("#form-alert");

    if (cadastroForm && formAlert) {
        cadastroForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede o envio real (para fins de demonstração)
            
            // Simula uma verificação de validade (em um projeto real, seria mais robusto)
            if (cadastroForm.checkValidity()) {
                formAlert.classList.remove("hidden");
                cadastroForm.classList.add("hidden");
            } else {
                // Força a validação visual do navegador
                cadastroForm.reportValidity();
            }
        });
    }

    // 3. (Bônus) Máscaras de Input (para CPF, Telefone, CEP)
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");

    if (cpfInput) {
        cpfInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = value.slice(0, 14);
        });
    }

    if (telInput) {
        telInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 10) { // Celular (11 dígitos)
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
            } else { // Fixo (10 dígitos)
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
            }
            e.target.value = value.slice(0, 15);
        });
    }

    if (cepInput) {
        cepInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.replace(/(\d{5})(\d)/, "$1-$2");
            e.target.value = value.slice(0, 9);
        });
    }
});