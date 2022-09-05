const ownerNameInput = document.getElementById('owner-name-form')



ownerNameInput.addEventListener('input', () => {
    const ownerName = document.getElementById('owner-name')
    const value = ownerNameInput.value
    ownerName.innerText = value
})