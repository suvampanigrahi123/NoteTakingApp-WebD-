{/* <div class="note">
<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main"></div>
<textarea id="textarea" cols="30" rows="10" placeholder="Add Your Note Today.."></textarea>
</div> */}
//Get Reference of AddNote Button

// Update Data Using Local Stroage
const UpdateLsData=()=>{
    const TextAreaData=document.querySelectorAll('textarea');
    const notes=[];
    TextAreaData.forEach((note)=>{
        notes.push(note.value);
    });

    //Set Item in Local Stroage
    localStorage.setItem('Notes',JSON.stringify(notes));



}
const addBtn=document.getElementById('add');
const addNewNotes=(text="")=>{
    //create New Div
    const note=document.createElement("div");
    //Add the className
    note.classList.add("note");
    const htmlData=`<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text? "hidden":""}" placeholder="Add Your Note Today.."></textarea>`;
    //Insertelement Afterbegin
    note.insertAdjacentHTML('afterbegin',htmlData);
    //append that in body
    document.body.appendChild(note);

    //Get Reference Of All Value..
    const deleteBtn=note.querySelector('.delete')
    const editBtn=note.querySelector('.edit');
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');

    //Edit button Operation
    editBtn.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    //showing data in maindiv
    textArea.addEventListener('change',(e)=>{
        const data=e.target.value;
        mainDiv.innerHTML=data;
        UpdateLsData();
    })

    //Delete Operation
    textArea.value=text;
    mainDiv.innerHTML=text;
    deleteBtn.addEventListener('click',()=>{
        note.remove();
        UpdateLsData();
    });

}
//Getting Data from Local Stroage
const NotesData=JSON.parse(localStorage.getItem('Notes'));
if(NotesData){

    NotesData.forEach((note)=>{
        addNewNotes(note);
    })
}
addBtn.addEventListener('click',()=>addNewNotes());


//Add footer to the code
const footer=document.createElement('footer');

const htmlData=`        <p>Devloped By suvampanigrahi</p> <br />
<p>All fonts and svg &copy; from fontawsome.com<br /> All Rights reserved</p>`;
footer.insertAdjacentHTML('afterbegin',htmlData);

document.body.append(footer);