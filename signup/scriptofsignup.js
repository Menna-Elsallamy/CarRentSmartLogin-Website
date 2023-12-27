
var userName=document.getElementById('Sitename');
var userEmail=document.getElementById('Siteemail');
var userPass=document.getElementById('Sitepassword');
var signupbutton=document.getElementById('signupbutton');
var emailexist=document.getElementById('emailexist');
var Success=document.getElementById('Success');
var sitescontainer=[];
if(localStorage.getItem("sitess")!=null){
    sitescontainer=JSON.parse(localStorage.getItem("sitess"))
}

signupbutton.addEventListener("click",function addSites(event){
    event.preventDefault();
   
    if (userName.value.length == 0 || userPass.value.length == 0||userEmail.value.length == 0) {
        inputsreq.classList.replace("d-none","d-block");
        return;
    }
    for (var i = 0; i < sitescontainer.length; i++) {
        if (sitescontainer[i].email === userEmail.value) {
            console.log("Email already in use");
            emailexist.classList.replace("d-none", "d-block");
            Success.classList.replace("d-block","d-none");
            return;
        }
    }
    var sitess={
        name:userName.value,
        email:userEmail.value,
        pass:userPass.value,
    }
    sitescontainer.push(sitess);
    localStorage.setItem("sitess",JSON.stringify(sitescontainer));
    Success.classList.replace("d-none","d-block");
    inputsreq.classList.replace("d-block","d-none");
    emailexist.classList.replace("d-block", "d-none");


}
);