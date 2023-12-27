var signinlightbox=document.querySelector("#signin");
var signuplightbox=document.querySelector("#signup");
var signinlink=document.querySelector("#signinlink");
var signuplink=document.querySelector("#signuplink");
var Siteemail=document.querySelector("#Siteemail");
var Sitepassword=document.querySelector("#Sitepassword");
var login=document.querySelector("#login");
var inputsreq=document.querySelector("#inputsreq");
var incemailorpass=document.querySelector("#incemailorpass");
var incemail=document.querySelector("incemail");
var sitescontainer=[];
if(localStorage.getItem("sitess")!=null){
    sitescontainer=JSON.parse(localStorage.getItem("sitess"))
}
login.addEventListener("click", function () {
    if (Siteemail.value.length == 0 || Sitepassword.value.length == 0) {
        inputsreq.classList.replace("d-none","d-block");
        return;
    }
    for(var i = 0; i < sitescontainer.length; i++){
        if(sitescontainer[i].email == Siteemail.value&&sitescontainer[i].pass==Sitepassword.value){
            window.location.href='../site/site.html';
            localStorage.setItem('siteuser', sitescontainer[i].name);
            return;
        }
        if (sitescontainer[i].email == Siteemail.value||sitescontainer[i].pass!=Sitepassword.value) {
            incemailorpass.classList.replace("d-none","d-block");
            // incemail.classList.replace("d-block","d-none");
            // console.log("incorrect Email or Password");
            return;
        }
        // if (sitescontainer[i].email != Siteemail.value&&sitescontainer[i].pass==Sitepassword.value) {
        //     // incemail.classList.replace("d-none","d-block");
        //     incemailorpass.classList.replace("d-block","d-none");
        //     // console.log("incorrect Email");
        //     return;
        // }
    }
});

// login.addEventListener("click",function(){
//     if(Siteemail.length==0||Sitepassword.length==0){
//     console.log("hello");
// }
// })




// signinlink.addEventListener("click",function(event){
//     event.preventDefault();
//     signinlightbox.classList.replace("d-none","d-block")
//     signuplightbox.classList.replace("d-block","d-none")
// })
// signuplink.addEventListener("click",function(event){
//     event.preventDefault();
//     signuplightbox.classList.replace("d-none","d-block")
//     signinlightbox.classList.replace("d-block","d-none")
// })


