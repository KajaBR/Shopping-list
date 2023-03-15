function findElements(selektor){
    return document.querySelectorAll(selektor);
};

function findElement(selektor){
    return document.querySelector(selektor);
};


function showComunicat(text, extent){
    const CONFIRM = stworzElement("div", text);
    for (let i=0; i<bledy.children.length; i++){
        bledy.children[i].remove();
    }
    CONFIRM.setAttribute("class", "waga" + extent);
    bledy.appendChild(CONFIRM);
    window.setTimeout(() =>{
        for(let i = 0; i<bledy.children.length; i++){
            bledy.children[i].remove();
        }
    }, 2000);
};

const dodaj = findElement("button");
const lista = findElement("ul");
const input = findElement("input[name='product']");
const bledy = findElement("div#bledy");




dodaj.addEventListener('click', () => {
    const PRODUCT = input.value;
    if (input.value !==""){
        input.value = "";
        const elLI = stworzElement("li", PRODUCT);
        const elUsun = stworzElement("button", "Usuń produkt z listy");
        

        lista.appendChild(elLI);
        elLI.appendChild(elUsun);
       

    

        elUsun.onclick = (evt) => {
            evt.target.parentElement.remove();
    
        }
        showComunicat('Produkt został dodany do listy', 0);
    } else{
        showComunicat('Wpisz nazwę produktu', 2);
    }
});

const SENT = document.querySelectorAll('#sent button');


// po klikięciu usuwają się produkty, ale nie mogę dodać nowych
SENT.forEach(button => {
   button.addEventListener('click', () =>{
        lista.remove(".product");
    });
});


function stworzElement(nameProduct, text, option = {}){
    const element = document.createElement(nameProduct, option);
    element.innerText=text;
    if (option){
        element.setAttribute(option.nameArt, option.valueArt);
    }
    return element;
};