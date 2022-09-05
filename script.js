const ownerNameInput = document.getElementById('owner-name-form')
const bankNameInput = document.getElementById('bank-name-form')
const cardNumberInput = document.getElementById('card-number-form')
const validDateInput = document.getElementById('valid-form')
const cvcInput = document.getElementById('cvc-form')


const setText = (id) => {

    // เพื่อนำค่า value ที่รับมาใช้ทุกครั้งที่มีการพิมพ์ใน input ของตัวนำเข้านั้นๆ
    return (event) => {
        const element = document.getElementById(id)
        const value = event.target.value
        element.innerText = value
    }
}


ownerNameInput.addEventListener('input', setText('owner-name'))
bankNameInput.addEventListener('input', setText('bank-name'))
cardNumberInput.addEventListener('input', setText('card-number'))
validDateInput.addEventListener('input', setText('valid-date'))
cvcInput.addEventListener('input', setText('ccv'))