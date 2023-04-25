let btn = document.querySelector("#guzik");
let zniewaga = document.querySelector("#zniewaga");
btn.addEventListener('click', function(){
    var losoweCzesciCiala = ["twarz", "noga", "ręka","ucho"];
    var losowePrzymiotniki = ["cuchnąca", "brudna", "głupia", "brzydka"];
    var losoweSlowa = ["mucha", "kuna", "małpa", "jaszczurka", "norka"];
    var losowaCzescCiala = losoweCzesciCiala[Math.floor(Math.random()*losoweCzesciCiala.length)];
    var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random()*losowePrzymiotniki.length)];
    var losoweSlowo = losoweSlowa[Math.floor(Math.random()*losoweSlowa.length)]; 

    var losowaZniewaga = "Twoja " + losowaCzescCiala + " jest jak " +  losowyPrzymiotnik + " " + losoweSlowo;
    zniewaga.innerHTML = losowaZniewaga;

})