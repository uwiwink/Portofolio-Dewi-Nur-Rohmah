// === NAVBAR ACTIVE CLASS ON SCROLL ===
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// === SMOOTH SCROLL (Fallback untuk browser yang tidak mendukung CSS scroll-behavior) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// === PROYEK IMAGE POPUP ===
document.addEventListener("DOMContentLoaded", () => {
  const proyekItems = document.querySelectorAll(".proyek-item img");

  // Buat elemen overlay
  const overlay = document.createElement("div");
  overlay.id = "imageOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";
  overlay.style.cursor = "pointer";
  overlay.style.display = "none"; // Default disembunyikan

  const overlayImage = document.createElement("img");
  overlayImage.style.maxWidth = "90%";
  overlayImage.style.maxHeight = "90%";
  overlayImage.style.boxShadow = "0 0 20px #fff";
  overlay.appendChild(overlayImage);
  document.body.appendChild(overlay);

  // Event untuk menampilkan overlay
  proyekItems.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      overlayImage.src = img.src;
      overlay.style.display = "flex";
    });
  });

  // Event untuk menutup overlay saat diklik
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayImage.src = "";
  });
});


// === FORM KONTAK: Simulasi kirim ===
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  // Tampilkan alert simulasi
  alert(`Terima kasih, ${name}!\nPesanmu telah diterima.`);

  // Reset form
  this.reset();
});
