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
cvcInput.addEventListener('input', setText('ccv'))


cardNumberInput.addEventListener('input', (event) => {
    const element = document.getElementById('card-number')
    const value = event.target.value
    if (value.length >= 4) {
        const arr = []
        for (let i = 0; i < value.length; i += 4) {
            const slice = value.slice(i, i + 4)
            arr.push(slice)
        }
        element.innerText = arr.join(' ')
    } else {
        element.innerText = value
    }
})

validDateInput.addEventListener('input', (event) => {
    const element = document.getElementById('valid-date')
    const value = event.target.value
    if (value.length >= 2) {
        const s1 = value.slice(0, 2)
        const s2 = value.slice(2)
        element.innerText = `${s1}/${s2}`
    } else {
        element.innerText = value
    }
})