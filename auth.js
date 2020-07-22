//tracking users
auth.onAuthStateChanged((user)=>{
    var a=auth.currentUser;

    console.log(a);
    if(user){
        alert('You signed in');
        //requesting data from firebase
        count=0;
        db.collection(a.email).orderBy('date').onSnapshot((snapshot)=>{
            //console.log(snapshot.docChanges().type)
            snapshot.docChanges().forEach((a)=>{
                //console.log(snapshot.docChanges().type)
                
                if (a.type!="removed"){
                //our data will be a.doc.data()
                let data=a.doc;
                addItem(data);
                count+=parseInt(a.doc.data().amount);
            }
                else {
                    let li=list.querySelector('[data-id='+a.doc.id+']');
                    list.removeChild(li);
                    count-=parseInt(a.doc.data().amount);
                }
            })
        })

    }else{
        alert('the user logged out')
        //removing all the things from the page
        let items=document.querySelector("#items");
        let butttons=document.querySelector(".buttons");
        let formmm=document.querySelector("#form");
        formmm.classList.add('display_none');
        items.classList.add('display_none');
        butttons.classList.add('display_none');
    }
})

//creating account 
let sign_up_form=document.querySelector("#sign-up");

sign_up_form.addEventListener("submit",(e)=>{

    e.preventDefault();
    let email_up=sign_up_form.email.value;
    let password_up=sign_up_form.password.value;
    auth.createUserWithEmailAndPassword(email_up,password_up); 
    db.collection(email_up).add({
        name:"gift",
        amount:0,
    })

})


//signin
let sign_in_form=document.querySelector("#sign-in");


sign_in_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email_in=sign_in_form['email'].value;
    let password_in=sign_in_form['password'].value;
    auth.signInWithEmailAndPassword(email_in,password_in); 
})

//signing out 
let sign_out=document.querySelector("#out-button");
sign_out.addEventListener("click",(e)=>{
    auth.signOut();
 

})

