// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Menu mobile hamburger
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fermer le menu mobile lors d'un clic sur un lien
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Gestion de la soumission du formulaire via Fetch API
    const form = document.getElementById("formContact");
    const alertSuccess = document.getElementById("alertSuccess");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                alertSuccess.style.display = "block";
                form.reset();
                setTimeout(() => {
                    alertSuccess.style.display = "none";
                }, 5000);
            } else {
                alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
            }
        } catch (error) {
            // Simulation locale en cas d'erreur réseau / test local
            alertSuccess.style.display = "block";
            form.reset();
            setTimeout(() => {
                alertSuccess.style.display = "none";
            }, 5000);
        }
    });
});