function show_message(){
    
    const aside = document.getElementsByTagName('aside')[0]
    const text = document.getElementsByTagName('textarea')[0]
    let feedback = text.value     
    const message = document.createElement('p')

    message.textContent = "your message '" +feedback+ "' sent"
    message.classList.add('message')
    aside.appendChild(message)

    feedback = ""
    //delete when clicked
    message.addEventListener('click', function() {
        message.remove()
    })

    
}
//check if clcked
function validate_checkbox(){
    const chb1 = document.getElementById("check")
    if (chb1.checked == false){
        alert("Please click to checkbox")
    }
}


/*function desktop_cart()
{
    const ol = document.getElementById('ol')
    const li = document.createElement('p')
    /*get all radio button*/

   /* const rbd1 = document.getElementById('rbd1')
    const rbd2 = document.getElementById('rbd2')
    const rbd3 = document.getElementById('rbd3')
    
    /*check whicj is selected*/

    /*if (rbd1.checked==true){
        li.textContent = rbd1.value
    }

    if (rbd2.checked==true){
        li.textContent = rbd2.value
    }

    if (rbd3.checked==true){
        li.textContent = rbd3.value
    }
     
    ol.appendChild(li)
}*/

function desktop_cart(){
    const button = document.getElementById("fixed_cart")
    button.classList.add("cart")
    button.style.transform = "scale(1.5)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 500);
} 


