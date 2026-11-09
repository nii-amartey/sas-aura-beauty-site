document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("hide"), 2400);
  });

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.textContent = opened ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));

  const cfg = window.SAS_ALURA_CONFIG || {};
  const wa = document.getElementById("whatsappLink");
  const phone = document.getElementById("phoneLink");
  const insta = document.getElementById("instagramLink");
  if (cfg.whatsapp) wa.href = `https://wa.me/${cfg.whatsapp}`;
  else wa.addEventListener("click", e => { e.preventDefault(); alert("Add the WhatsApp number in js/config.js first."); });
  if (cfg.phone) phone.href = `tel:${cfg.phone.replace(/[^\d+]/g, "")}`;
  else phone.addEventListener("click", e => { e.preventDefault(); alert("Add the phone number in js/config.js first."); });
  if (cfg.instagram) insta.href = cfg.instagram;
  else insta.addEventListener("click", e => { e.preventDefault(); alert("Add the Instagram link in js/config.js first."); });

  const gallery = document.getElementById("gallery");
  const photos = window.SAS_ALURA_GALLERY || [];
  const render = filter => {
    const items = photos.filter(p => filter === "all" || p.category === filter);
    gallery.innerHTML = "";
    if (!items.length) {
      gallery.innerHTML = '<div class="gallery-empty">Your portfolio is ready for its first photos.<br>Follow the photo upload guide in <strong>README.txt</strong> to add your work here.</div>';
      return;
    }
    items.forEach(photo => {
      const card = document.createElement("article");
      card.className = "gallery-item";
      const img = document.createElement("img");
      img.src = photo.image;
      img.alt = photo.title || `${photo.category} work`;
      img.loading = "lazy";
      img.onerror = () => { card.innerHTML = '<div class="gallery-empty">Photo not found.<br>Check the file name in js/gallery.js.</div>'; };
      const label = document.createElement("div");
      label.className = "gallery-label";
      label.textContent = photo.title || photo.category;
      card.append(img, label);
      gallery.appendChild(card);
    });
  };
  document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    render(tab.dataset.filter);
  }));
  render("all");
  document.getElementById("year").textContent = new Date().getFullYear();
});