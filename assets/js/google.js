let emailInput = document.querySelector('.emailInput')
let passwordInput = document.querySelector('.passwordInput')
let nextBtn = document.querySelector('.nextButton')
let sybmitBtn = document.querySelector('.submitBtn')

nextBtn.addEventListener ('click', () => {
    emailInput.style.display = nextBtn.style.display = 'none';
    passwordInput.style.display= sybmitBtn.style.display = 'block';
})