
// Tab Logic
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Real-time password feedback
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');
passwordInput.addEventListener('input', () => {
  feedback.textContent = passwordInput.value.length < 8
    ? 'Password must be at least 8 characters.'
    : 'Password looks good!';
});

// Form validation
document.getElementById('myForm').addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || password.length < 8) {
    e.preventDefault();
    alert('Please fill out the form correctly.');
  }
});

// Button click

document.getElementById('clickBtn').addEventListener('click', () =>{
  window.prompt("Do you love sports bike!")
})
// Hover effect

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener('mouseover', () => 
hoverBox.style.background = 'lightgreen')
hoverBox.addEventListener('mouseout', () =>
hoverBox.style.background = 'lightblue'
);

// Color change button
document.getElementById('colorBtn').addEventListener('click', function () {
  this.style.backgroundColor = this.style.backgroundColor === 'orange' ? 'initial' : 'orange'
  this .textContent = "color changed!"

})