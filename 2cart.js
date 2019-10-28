var elems = document.getElementsByClassName("bc-button-text");

for(var i = 0;i<elems.length;i++){

    if(elems[i].getAttribute("title") != null && elems[i].getAttribute("title").indexOf("zum Warenkorb hinzufügen") != -1){
        elems[i].click();
    }
}
