const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
let cart = 0;

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    cart++;
    cartCount.textContent = cart;
    toast.textContent = `${button.dataset.name} added to cart`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

document.getElementById('newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email');
  const message = document.getElementById('formMessage');
  message.textContent = `Thanks! ${email.value} has been added to the Phased Intelligence list.`;
  email.value = '';
});
