const form = document.querySelector('form')
const formInput = document.querySelector('.form__container-input')
const formMessage = document.querySelector('.form__message')

const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const emailValidation = validateEmail(data.email)

    if (!emailValidation) {
        formInput.style.border = '1px solid red'
        formMessage.innerText = 'Please provide a valid email address'
    }
})
