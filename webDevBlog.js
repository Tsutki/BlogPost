// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const cThm = document.querySelector("#cThm");
const darkmode = document.querySelector("#darkmode");
darkmode.addEventListener("click", () => {
    runThm();
});

const runThm = () => {
    document.body.classList.toggle('darkThm');
    if (cThm.innerText === "Darkmode") {
        cThm.innerText = "Lightmode";
    } else {
        cThm.innerText = "Darkmode";
    }
};

// Modal functionality
const modal = document.getElementById("postModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const title = this.getAttribute('data-title');
        const content = this.getAttribute('data-content');
        const image = this.getAttribute('data-image');
        
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modalImage.src = image;
        modal.style.display = "block";
    });
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

