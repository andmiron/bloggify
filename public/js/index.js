const signupForm = document.querySelector('.signup-form')

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;
    })
}
