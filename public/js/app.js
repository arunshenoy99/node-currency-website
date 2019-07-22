

const currencyForm = document.querySelector('#currencyForm')
const fromInput = document.querySelector('#from')
const toInput = document.querySelector('#to')
const fromValInput = document.querySelector('#fromval')
const messageOne = document.querySelector('#messageOne')
currencyForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent='Loading....'
    const from = fromInput.value
    const to = toInput.value
    const fromVal = fromValInput.value
    console.log(from,to,fromVal)
    fetch('/convert?from='+from+'&to='+to+'&fromval='+fromVal).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
            }else{
                messageOne.textContent=data.response
            }
        })
    })
})