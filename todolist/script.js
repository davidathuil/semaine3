
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.classList === ('checked')) {
    ev.target.classList.remove('checked');
  }
 else {
    ev.target.classList.toggle('checked');
  };
})

// Création tableau
let tablefait =[];
let tableafaire= [];
let tableencours= [];



function newElement() {
  let li = document.createElement("li"); //crealition li
  let newtache = document.querySelector("#myInput").value; //selection de l'input
  let t = document.createTextNode(newtache);
  li.appendChild(t);
  let maListe = document.querySelector("#maListe");
  maListe.appendChild(li);
  
  var button = document.createElement("button");
  var txt = document.createTextNode("supr");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  var buttonmod = document.createElement("button");
  var txt = document.createTextNode("modi");
  buttonmod.className = "modif";
  buttonmod.appendChild(txt);
  li.appendChild(buttonmod);

  var buttontabl = document.createElement("button");
  var txt = document.createTextNode("tableau");
  buttontabl.className = "tableau";
  buttontabl.appendChild(txt);
  li.appendChild(buttontabl);

  
buttonmod.addEventListener('click', function(){

if(confirm("attention vous allez supr")){
let text=li.innerText
let nbr=text.length;
let test2=text.substr(0,nbr-10);
t.textContent=prompt("a modifier",test2)}
else {false;}
} );


button.addEventListener('click', function(){
       

    let tableaufait = document.getElementById("dataTablebodyFait");
    
    let listOfName='';
    



    var chaine = li.innerText;
    console.log(chaine)
    var debutDeChaine = chaine.split("\n")[0];
    console.log(debutDeChaine);
    let index = tablefait.indexOf(debutDeChaine)
    console.log(index)
    tablefait.splice(index,1); 
    console.log(tablefait);
    tablefait.forEach((ele,index)=> {
      //  if (index=lastItem){
      listOfName += ` 
        <tr class="text-center">
          <td class="align-middle">${ele}</td>  
          <td class="align-middle"></td>    
          
        </tr>
        `  
      
      } 
      )
    
      tableaufait.innerHTML = listOfName;
      


    
 
    
  } );
  

  
  buttontabl.addEventListener('click', function(){
    console.log(li);
    console.log(tablefait)
    
    var chaine = li.innerText;
    console.log(chaine)
    var debutDeChaine = chaine.split("\n")[0];
    console.log(debutDeChaine)
    tablefait.push(debutDeChaine); 
    console.log(tablefait)
    
    let lastItem = tablefait.length - 1;
    console.log(tablefait.length);
    console.log(lastItem);
    let tableaufait = document.getElementById("dataTablebodyFait");
    let tableaufaitchild = document.createElement("tr",class{"align-middle"})
    let listOfName='';

    
     tablefait.forEach((ele,index)=> {
      //  if (index=lastItem){
      listOfName += ` 
        <tr class="text-center">
          <td class="align-middle">${ele}</td>  
          <td class="align-middle"></td>    
          
        </tr>
        `  
      }   
    //  }
         )
    
    tableaufait.innerHTML = listOfName;

    
  } );
}





let newt=document.querySelector("#myDIV");
newt.addEventListener("keydown", function (ev) {
  if (ev.keyCode == 13){newElement()};false;});


// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  }

  