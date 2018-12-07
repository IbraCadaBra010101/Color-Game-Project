/**
 *
 UPPGIFT 1
 function divText() {
    document.getElementById("dom").innerHTML = "This will change";

}

 divText();


 **/
/**3
 * Skapa ett button-element med ett id och
 *   flera div-element som har samma CSS-klass.
 *   Skriv CSS för klassen. Gör så att alla div-element
 *   byter värde på innerHTML när man klickar på knappen.
 *   Använd document.getElementsByClassName.
 Utöka exemplet så att när man klickar
 på knappen nästa gång ska den byta tillbaka värdet.
 **/


/**

 let btn = document.getElementById("button");
 let clickAmount = 0;
 btn.addEventListener("click", function f() {
    // save the original
    let text = "element modified"; //whatever text we want to add or replace previous text with.
    let div = document.getElementsByClassName("div"); // returns an array- like object[div.div,div.div,] element.class name!
    if (clickAmount % 2 === 0) {
        for (let i = 0; i < div.length; i++) {
            div[i].innerHTML = text; // therefore the getelementbyclass.. will // return an array- like object with 0 or more// elements. // get access to the element using the classname. // several elements can have the same classname
        }
    } else {
        for (let i = 0; i < div.length; i++) {
            div[0].innerHTML = "a";
            div[1].innerHTML = "b";
            div[2].innerHTML = "c";// therefore the getelementbyclass.. will // return an array- like object with 0 or more// elements. // get access to the element using the classname. // several elements can have the same classname
        }
    }
    clickAmount += 1;
});



 let buttonHome = document.querySelector('.button-home')
 let CountButtonHomeClicks = 0

 buttonHome.addEventListener('click', function() {
    CountButtonHomeClicks += 1
    console.log(CountButtonHomeClicks)
})

 let btn = document.getElementById("button");
 btn.addEventListener("click", function f() {
    // save the original
    let text = "element modified"; //whatever text we want to add or replace previous text with.
    let div = document.getElementsByClassName("div"); // returns an array- like object[div.div,div.div,] element.class name!

        for (let i = 0; i < div.length; i++) {
            div[i].innerHTML = text; // therefore the getelementbyclass.. will // return an array- like object with 0 or more// elements. // get access to the element using the classname. // several elements can have the same classname
        }

});



 document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target.matches('button')) {
        return;
    }
    target.classList.toggle('red');
}, false);








 let btn = document.getElementById("button");
 let clickAmount = 0;
 btn.addEventListener("click", function f() {
    // save the original
    let text = "element modified"; //whatever text we want to add or replace previous text with.
    let div = document.getElementsByClassName("div"); // returns an array- like object[div.div,div.div,] element.class name!
    if (clickAmount % 2 === 0) {
        for (let i = 0; i < div.length; i++) {
            div[i].innerHTML = text; // therefore the getelementbyclass.. will // return an array- like object with 0 or more// elements. // get access to the element using the classname. // several elements can have the same classname
        }
    } else {
        for (let i = 0; i < div.length; i++) {
            div[0].innerHTML = "a";
            div[1].innerHTML = "b";
            div[2].innerHTML = "c";// therefore the getelementbyclass.. will // return an array- like object with 0 or more// elements. // get access to the element using the classname. // several elements can have the same classname
        }
    }
    clickAmount += 1;
});

 function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}
 UPPGIFT 4
 function switchFunction() {
    let buttonElement = document.getElementById("btn-id");
    buttonElement.classList.toggle("btn-class2")
}


 **/


/**<!--Skapa ett button-element och flera section-element. När man klickar på
 knappen ska alla section-element byta CSS-klass, men du får inte använda
 id eller class på section-elementen. Använd getElementsByTagName.-->
 **/

/**
 function switchByName() {
    let element = document.getElementsByTagName("section");
    for(let i=0; i < element.length; i++){
        element[i].classList.add("sections");
    }
}
 **/


/**6 Skapa ett button-element, en div och en
 *
 *
 * lista med ul eller ol som har minst två element.
 * När man klickar på knappen ska du skriva ut saker
 * till div-elementet. Först ska du skriva ut hur många
 * childNodes listan har. Skriv sedan ut vad varje child node
 * har för värde på nodeName.
 * Utöka funktionen så att den lägger till ett utropstecken
 * sist på varje li-element.
 *
 *
 function chNodes() {

    let child = document.getElementById("orderedList").childNodes;
    let childElementNodes = document.getElementById("orderedList").childElementCount;

    document.getElementById("div").innerHTML += "<br>" + "There are " + child.length + " childnodes ";
    document.getElementById("div").innerHTML += "<br>" + "There are " + childElementNodes + " child elements " + "<br>";

    let nodeNameValue = document.getElementById("orderedList").childNodes;
    let text = "";

    for (let i = 0; i < nodeNameValue.length; i++) {
        text += nodeNameValue[i].nodeName;
    }
    document.getElementById("div").innerHTML += "value of child nodes <br>" + text;
    let olElement = document.getElementById("orderedList");
    let liElement = olElement.getElementsByTagName("LI");
    let txt = "!";
    for (let i = 0; i < liElement.length; i++) {
        liElement[i].textContent += txt;
    }

}**/


/**
 *var paragraph = document.getElementById("p");

 paragraph.textContent += "This just got added";
 *
 *
 *
 * function myFunction() {
    var c = document.body.childNodes;
    var txt = "";
    var i;
    for (i = 0; i < c.length; i++) {
        txt = txt + c[i].nodeName + "<br>";
    }

    document.getElementById("demo").innerHTML = txt;
}

 // get the button using the id of the button element!
 let button = document.getElementById('button');

 // create an eventlistener function.

 button.addEventListener('click', function () {
    let listElement = document.getElementById("list");
    let anotherListElement = document.createElement("LI");
    anotherListElement.innerText = "second";
    listElement.appendChild(anotherListElement);
});

 **/

/**7 Skapa en sida med ett button-element och ett annat element.
 *  Båda ska ha id. När man klickar på knappen
 *  ska det andra elementet tas bort.
 Utöka exemplet så att ett nytt element
 med samma id och textinnehåll som det
 borttagna läggs till på sidan, om man
 klickar en gång till på knappen.
 **/













/***
UPPGIFT NR 7
let btn = document.getElementById("btn-id");

btn.addEventListener("click", function () {
    let firstEl = document.getElementById("p-id");
    if (firstEl !== null) {
        firstEl.remove();
        console.log("a");
    } else {
        createEl();
        console.log("B");

    }

});


function createEl() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hello";
    paragraph.setAttribute("id", "p-id");
    document.body.appendChild(paragraph);
}
***/



























