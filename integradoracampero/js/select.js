function init() {
 
    let select = document.createElement("select");
 
    let option1 = document.createElement("option");
    option1.setAttribute("value", "gm");
    let option1Texto = document.createTextNode("opcion 1");
    option1.appendChild(option1Texto);
 
    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Texto = document.createTextNode("opcion 2");
    option2.appendChild(option2Texto);
 
    let option3 = document.createElement("option");
    option3.setAttribute("value", "value3");
    let option3Texto = document.createTextNode("opcion 3");
    option3.appendChild(option3Texto);
 
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
 
    document.body.appendChild(select);
     
}
 
 
window.onload = init;