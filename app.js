
//taking input and converting them into list items
var list=document.querySelector("#items")
function addItem(p){
    let itemList=document.createElement("li");
    let name=document.createElement('span');
    let date=document.createElement('span');
    let amount=document.createElement('span');
    let cross=document.createElement('div')


    



    name.innerText=p.data().name;
    date.innerText=p.data().date;
    amount.innerText=p.data().amount;
    cross.innerText="X";


    itemList.appendChild(name);
    itemList.appendChild(amount);
    itemList.appendChild(date);
    itemList.appendChild(cross);

    let id=p.id;
    itemList.setAttribute('data-id',id);

    list.appendChild(itemList);


    //deleting item on clicking cross
    cross.addEventListener("click",(e)=>{
        db.collection('expenses').doc(id).delete();
    })

}

//Adding items to the list and sending them to the database
let addButton=document.querySelector("#submit");
let form=document.querySelector("#form")
addButton.addEventListener("click",(e)=>{
    e.preventDefault();
     //getting the current date
     let date=new Date();
     date=date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear();
     console.log(date);

     //CHANGE HERE
    let user_email=auth.currentUser.email;
    db.collection(user_email).add({
        name:form.item.value,
        date:date,
        amount:form.amount.value
    })
    form.item.value='';
    form.amount.value='';
})


//showing total expense as a message

let total_button=document.querySelector('#total');
let total_show=document.querySelector(".message h2");

total_button.addEventListener("click",()=>{
    total_show.innerText=`Your total expense was: ${count} /=`
    
})