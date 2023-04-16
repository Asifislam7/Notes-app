// console.log("Hello there how are you");
//if users add a note add it to the local storage
// we ar using the localstorage of the v8 engine of the browser to store the elements of the array 
let btn= document.getElementById('addbtn');
btn.addEventListener("click",function(e){


    let addtxt= document.getElementById('addnote');
    let notes= localStorage.getItem("notes");
    if(notes== null){
        notesobj=[]; //creation of the object
    }
    else{
        notesobj=JSON.parse(notes); //converting into string array
    }
    notesobj.unshift(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    // console.log(notes);

    shownotes();


})

function shownotes(){

    let notes= localStorage.getItem("notes");
    if(notes== null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
    
        html+= `
        <div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick=deletenote(this.id) class="btn btn-primary">Delete note</button>
        </div>
      </div>`;

    });

    let noteselem= document.getElementById('notes');
    if(notesobj.length !=0){
        noteselem.innerHTML=html;
    }
    else{
        noteselem.innerHTML=`Nothing to show! "Add a note" pe click kro to add`;
    }

    
}

function deletenote(index){
    // console.log("deleteing the note");
    let notes= localStorage.getItem("notes");
    if(notes== null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
        //parse converts into array so that array operations can be performed successfully
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();




}

let search = document.getElementById('searchbox');
search.addEventListener("input",function(){

    let inputval= search.value;
    // console.log("input event fired", inputval);
    let notecard=document.getElementsByClassName("card");
    Array.from(notecard).forEach(function(element){
        let cardtxt= element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";

        }
        // console.log(cardtxt);
    })

})

