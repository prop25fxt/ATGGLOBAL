function toggleMenu(){
  const el = document.getElementById("mobileMenu");
  el.classList.toggle("show");
}

function sendWhatsApp(e){
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const division = form.division.value;
  const message = form.message.value.trim();

  const text =
`Hello ATG Global,
Name: ${name}
Phone: ${phone}
Division: ${division}
Message: ${message}`;

  const waNumber = "2348036210340";
  const url = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank", "noopener");
  return false;
}

// Auto-select division when user clicks a division CTA or quick button
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-division]");
  if(!el) return;

  const division = el.getAttribute("data-division");
  const select = document.getElementById("divisionSelect");
  if(!select) return;

  for(const opt of select.options){
    if(opt.text === division){
      select.value = opt.text;
      break;
    }
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
