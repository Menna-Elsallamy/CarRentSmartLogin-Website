var storedSiteUser = localStorage.getItem('siteuser');
var signoutbtn=document.querySelector("#signoutbtn");
// Check if the value exists
// displayuserName();
window.onload=function(){
    document.getElementById('userNamee').innerHTML="Welcome"+"<br/>"+storedSiteUser;
    console.log(storedSiteUser);
}
signoutbtn.addEventListener("click",function()
    {
        window.location.href='../signin/index.html';
        localStorage.removeItem('siteuser');
        console.log("hello");
    }
)
// function displayuserName(){
//     document.getElementById('userNamee').innerHTML=storedSiteUser;
//     console.log(storedSiteUser);
// }




// signout.addEventListener("click",function(){
//     if (storedSiteUser !== null) {
//     console.log('Stored siteuser:', storedSiteUser);
// } else {
//     console.log('siteuser not found in local storage');
// }
// })

// var sitescontainer=[];
// if(localStorage.getItem("siteuser")!=null){
//     sitescontainer=JSON.parse(localStorage.getItem("siteuser"))
//     console.log(sitescontainer);
// }
// function displayuserName(){
//    var siteUuser= localStorage.getItem('siteuser');
//    console.log(siteUuser);
//     // document.getElementById('userNamee').innerHTML=userData.name;
// }