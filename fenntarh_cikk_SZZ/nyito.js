window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

const cikklista = [];

function init(){


      
      fetch("cikkek.json")
      .then((response) => response.json())
      .then((data) => {
        data.cikkek.forEach((elem) => {
          cikklista.push(elem);
        });
        megjelenites();
      })
      .catch((err) => {
      console.log(err);
      });
    }


    function megjelenites(){
        let txt = ""; 
        for (let index = 0; index < cikklista.length; index++) {
          txt+=`<div class="elemek">`;              
          for (const key in cikklista[index]) {
            if(key.includes("focim")){
              txt+=`<h1>${cikklista[index][key]}</h1>`

            }else if((key.includes("alcim"))){
              txt+=`<h4>${cikklista[index][key]}</h4>`
            }
            }
            txt+=`<a href="/cikk.html"><button value="${index}" id="refgmb${index}">Elolvasom a cikket</button></a></div>`
          }
         
      
        ID("gyujtemeny").innerHTML = txt;

        gomb();
    }

      function gomb(){
        let teljescikk = "";
        let gombok = document.querySelectorAll("button")
        for (let index = 0; index < gombok.length; index++) {
          gombok[index].addEventListener("click", function(event){
            let gombertek = event.target.value 
            localStorage.setItem("aktualisgomb", JSON.stringify(cikklista[gombertek]))
          })
        }
      }

