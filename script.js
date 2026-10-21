const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    const icon = toggleButton.querySelector('.toggle-icon');
    icon.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
  });
}
