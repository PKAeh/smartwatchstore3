const ownerNameInput = document.getElementById('owner-name-form')
const bankNameInput = document.getElementById('bank-name-form')
const cardNumberInput = document.getElementById('card-number-form')
const validDateInput = document.getElementById('valid-form')
const cvcInput = document.getElementById('cvc-form')


ownerNameInput.addEventListener('input', () => {
    const ownerName = document.getElementById('owner-name')
    const value = ownerNameInput.value
    ownerName.innerText = value
})

bankNameInput.addEventListener('input', () => {
    const bankName = document.getElementById('bank-name')
    const value = bankNameInput.value
    bankName.innerText = value
})