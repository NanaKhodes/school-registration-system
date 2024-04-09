
//Passport image code
const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");

chooseFile.addEventListener("change", function () {
    getImgData();
  });

  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
  }
  //end of the passport image code
  
  function formValidation()
{
var uname = document.registration.username;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
var ugrade = document.registration.grade;
var uemail = document.registration.email;
var uadd = document.registration.address;

if(allLetter(uname))
{
if(validsex(umsex,ufsex))
{ 
if(gradeselect(ugrade))
{
if(ValidateEmail(uemail))
{
if(alphanumeric(uadd))
{
}
} 
}
} 
}
}

return false;


//validating username
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}


//validating gender
function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Successfully Submitted');
window.location.reload()
return true;}
}


//validating grade
function gradeselect(ugrade)
{
if(ugrade.value == "Default")
{
alert('Select your grade from the list');
ugrade.focus();
return false;
}
else
{
return true;
}
}




//validating email format
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}


//validating address
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}


 
    