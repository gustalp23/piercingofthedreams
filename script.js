/**
 * Piercing of the Dream — configurações de contato.
 *
 * Adicione o WhatsApp com DDI e DDD, apenas números (ex.: 5531999999999)
 * e/ou a URL completa do Instagram quando houver confirmação do canal.
 * Com os campos vazios, o site NÃO exibe links falsos.
 */
const CONTACT = {
  whatsapp: "",
  instagram: ""
};

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
}

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    mobileNav.hidden = isOpen;
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  });
  mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

const year = document.getElementById("current-year");
if (year) year.textContent = String(new Date().getFullYear());

const socials = document.getElementById("social-links");
const channelStatus = document.getElementById("channel-status");
const configuredInstagram = /^https:\/\/(www\.)?instagram\.com\/[^\s/]+\/?(?:\?.*)?$/i.test(CONTACT.instagram);
const configuredWhatsapp = /^\d{10,15}$/.test(CONTACT.whatsapp);

if (configuredInstagram || configuredWhatsapp) {
  socials.hidden = false;
  channelStatus.textContent = "Entre em contato pelo canal oficial indicado.";
  if (configuredInstagram) {
    const instagram = document.createElement("a");
    instagram.href = CONTACT.instagram;
    instagram.target = "_blank";
    instagram.rel = "noopener noreferrer";
    instagram.textContent = "Instagram ↗";
    socials.append(instagram);
  }
  if (configuredWhatsapp) {
    const whatsapp = document.createElement("a");
    whatsapp.href = "https://wa.me/" + CONTACT.whatsapp;
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";
    whatsapp.textContent = "WhatsApp ↗";
    socials.append(whatsapp);
  }
}

const form = document.getElementById("interest-form");
const result = document.getElementById("form-result");
const status = document.getElementById("form-status");
const generatedMessage = document.getElementById("generated-message");
const copyButton = document.getElementById("copy-message");
const whatsappLink = document.getElementById("send-whatsapp");

function getMessage() {
  const name = document.getElementById("client-name").value.trim();
  const interest = document.getElementById("client-interest").value;
  const note = document.getElementById("client-message").value.trim();
  return "Olá! Meu nome é " + name + ". Gostaria de saber mais sobre piercing.\n"
    + "Tenho interesse em: " + interest + ".\n"
    + (note ? "Minha dúvida/ideia: " + note + "\n" : "")
    + "Podem me informar sobre disponibilidade, valores e como funciona?";
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = getMessage();
    generatedMessage.value = message;
    result.hidden = false;
    status.textContent = "Sua mensagem está pronta. Copie o texto para enviá-lo pelo canal de atendimento do estúdio.";
    if (configuredWhatsapp) {
      whatsappLink.href = "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(message);
      whatsappLink.hidden = false;
    } else {
      whatsappLink.hidden = true;
    }
    result.scrollIntoView({block:"nearest",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  });
  form.addEventListener("input", () => { if (!result.hidden) result.hidden = true; });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const text = generatedMessage.value;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard indisponível");
      await navigator.clipboard.writeText(text);
      status.textContent = "Mensagem copiada! Agora é só enviá-la pelo canal de atendimento.";
    } catch (error) {
      generatedMessage.focus();
      generatedMessage.select();
      const copied = document.execCommand && document.execCommand("copy");
      status.textContent = copied
        ? "Mensagem copiada! Agora é só enviá-la pelo canal de atendimento."
        : "Selecione a mensagem e copie manualmente para enviar.";
    }
  });
}
