document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DO MENU MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- 2. LÓGICA DO FAQ (ACORDEÃO) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // (Opcional) Fecha outros itens abertos para deixar apenas um por vez
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna o estado do item clicado
            item.classList.toggle('active');
        });
    });

    // --- 3. SMOOTH SCROLL (ROLAGEM SUAVE) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Fecha o menu mobile automaticamente após clicar no link
                navLinks.classList.remove('active');
            }
        });
    });

    // --- 4. REDIRECIONAMENTO WHATSAPP ---
    // Adicionei uma classe .btn-whatsapp nos botões do HTML para centralizar aqui
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    const myNumber = "5511999999999"; // <--- COLOQUE SEU NÚMERO AQUI (apenas números)

    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = `https://wa.me/${myNumber}`;
        });
    });

});
