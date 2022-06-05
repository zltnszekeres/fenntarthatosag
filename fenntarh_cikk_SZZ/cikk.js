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

function init(){
    let txt = ""
    const tomb = [];
    let adatok =JSON.parse(localStorage.getItem("aktualisgomb"));
     const kep = adatok.kep;
    const bekezdes = adatok.bekezdes;
   
    const cim2 = adatok.cim2;
    const felsorolas = adatok.felsorolas;
    

    tomb.push(adatok)
    txt += "<br>"; 
        for (const key in adatok) { 
         if(key.includes("focim")){
          txt+= `<h1> ${adatok[key]}</h1>`
            
            
          }  
        else if(key.includes("alcim")){
          txt += `<h4> ${adatok[key]}</h4>`
          }
          else if(key.includes("kep")){
          txt += '<img src=" '+adatok[key]+ '" >'
          }

        else if(key.includes("bekezdes")){
          txt += `<p> ${adatok[key]}</p>`
          }
        
        else if(key.includes("cim2")){ 
            txt += `<h4> ${adatok[key]}</h4>`
            }
        else if(key.includes("felsorolas"))
        
            {
            
              for (let index = 0; index < adatok.felsorolas.length; index++) {
                txt+= '<ul>'
                txt+= `<li> ${adatok.felsorolas[index]}</li>`
                txt+= '</ul>'
              }
            }
        
        }
        ID("beolvas").innerHTML = txt;
    }

   /* txt+=`<h1>${adatok.focim}</h1>`
    for (let index = 0; index < bekezdestomb.length; index++) {
        txt+=`<h2>${alcimtomb[index]}</h2><p>${bekezdestomb[index]}</p>`
        for (const key in adatok) {
            if (key.includes("bekezdeskeplista") && index<bekkep.length) {
                txt+=`<img loading="lazy" id="bekkep${index}" src="${bekkep[index]}" alt="kep">`
            }
        }
    }

    for (const key in adatok) {
        if (key.includes("felsorolas")) {
            txt+= `<ul>` 
            for (let index = 0; index < fels.length; index++) {
                txt+= `<li>${fels[index]}</li>`
            }
            txt+=`</ul>`
        }
    }
   
    txt+=`<div id="linkekdiv"><ul>`
    for (let index = 0; index < tomb.length; index++) {
                   
            for (let j = 0; j < tomb[index].linkek.length; j++) {
            txt+= `<li><a href="${tomb[index].linkek[j]}" target="_blank">Forrás: ${j+1}</a></li>`
        }
        
        
    }
    txt+=`</ul></div>`
   */
        
   
    
