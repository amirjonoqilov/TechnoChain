let inputD = 0

function increase_desktop() {
    const Input = document.getElementById("inputDesktop")
    Input.value = parseInt(Input.value) + 1
    inputD = Input.value
}


function decrease_desktop(){
    const Input = document.getElementById('inputDesktop')
    if (parseInt(Input.value) > 0) {
        Input.value = parseInt(Input.value) - 1
    }
    inputD = Input.value
}

let inputM = 0
function increase_monitor() {
    const Input = document.getElementById("inputMonitor")
    Input.value = parseInt(Input.value) + 1
    inputM = Input.value
}


function decrease_monitor(){
    const Input = document.getElementById('inputMonitor')
    if (parseInt(Input.value) > 0) {
        Input.value = parseInt(Input.value) - 1
    }
    inputM = Input.value
}

let inputL = 0
function increase_L() {
    const Input = document.getElementById("inputL")
    Input.value = parseInt(Input.value) + 1
    inputL = Input.value
}


function decrease_L(){
    const Input = document.getElementById('inputL')
    if (parseInt(Input.value) > 0) {
        Input.value = parseInt(Input.value) - 1
    }
    inputL = Input.value
}

let inputS = 0
function increase_S() {
    const Input = document.getElementById("inputS")
    Input.value = parseInt(Input.value) + 1
    inputS = Input.value
}


function decrease_S(){
    const Input = document.getElementById('inputS')
    if (parseInt(Input.value) > 0) {
        Input.value = parseInt(Input.value) - 1
    }
    inputS = Input.value
}



//calculate
function calculateTotal() {
    var total = parseInt(inputD) + parseInt(inputM) + parseInt(inputL) + parseInt(inputS)
    document.getElementById('total').innerText = `Total item: ${total}`;
    
}