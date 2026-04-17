/* Клик по иконке-лупе → открывает Material search-модалку, фокус на input */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.md-search__form');
  if (!form) return;
  form.addEventListener('click', (e) => {
    const toggle = document.querySelector('[data-md-toggle="search"]');
    if (toggle && !toggle.checked) {
      toggle.checked = true;
      setTimeout(() => {
        const input = document.querySelector('.md-search__input');
        if (input) input.focus();
      }, 100);
    }
  });
});
