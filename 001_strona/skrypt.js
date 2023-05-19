let btn = document.querySelector("#guzik");
let zniewaga = document.querySelector("#zniewaga");
btn.addEventListener('click', function(){
    const losoweCzesciCiala = ["twarz", "noga", "ręka","ucho"];
    const losowePrzymiotniki = ["cuchnąca", "brudna", "głupia", "brzydka"];
    const losoweSlowa = ["mucha", "kuna", "małpa", "jaszczurka", "norka"];
    
    const losowaCzescCiala = losoweCzesciCiala[Math.floor(Math.random()*losoweCzesciCiala.length)];
    const losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random()*losowePrzymiotniki.length)];
    const losoweSlowo = losoweSlowa[Math.floor(Math.random()*losoweSlowa.length)]; 

    const losowaZniewaga = "Twoja " + losowaCzescCiala + " jest jak " +  losowyPrzymiotnik + " " + losoweSlowo;
    zniewaga.innerHTML = losowaZniewaga;
})
