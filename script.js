const languageButtons = document.querySelectorAll("[data-set-lang]");
const languagePanels = document.querySelectorAll("[data-language]");
const footerCopies = document.querySelectorAll("[data-copy]");

function setLanguage(language) {
  document.documentElement.lang = language;

  for (const panel of languagePanels) {
    panel.hidden = panel.dataset.language !== language;
  }

  for (const copy of footerCopies) {
    copy.hidden = copy.dataset.copy !== language;
  }

  for (const button of languageButtons) {
    const active = button.dataset.setLang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }

  document.title = language === "ko"
    ? "BrAIn Club · 인천에서 함께 만들어요"
    : "BrAIn Club · Build with us in Incheon";
}

for (const button of languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
}
