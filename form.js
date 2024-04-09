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

var nameError=  document.getElementById('name-error')
var genderError= document.getElementById('gender-error')
var gradeprice = 0;
var dobError= document.getElementById('dob-error')
var phoneError=  document.getElementById('phone-error')
var emailError=  document.getElementById('email-error')
var addressError= document.getElementById('address-error')


      
//validate name
function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

//validate gender
function validateGender(){
    var gender = document.getElementById('genderm');
    var gender = documennt.getElementById('genderf');

    if(gender.checked==false && gender.checked==false){
        alert("You must select male or female")
        return false;
    }
}

//validateGradeprice
function GradeOne(){
    gradeprice = '70,000'
    document.getElementById("school-fees").innerHTML = 'Fees is N'+ gradeprice
}
function GradeTwo(){
    gradeprice = '80,000'
    document.getElementById("school-fees").innerHTML = 'Fees is N'+ gradeprice
}
function GradeThree(){
    gradeprice = '90,000'
    document.getElementById("school-fees").innerHTML = 'Fees is N'+ gradeprice
}
function GradeFour(){
    gradeprice = '100,000'
    document.getElementById("school-fees").innerHTML = 'Fees is N'+ gradeprice
}

//validate date of birth
function validateDob(){
    var dob=document.getElementById('dob').value
    if (dob == ''){
        alert ('Date of birth field cannot be empty')
    }
    dobError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'phone no should be 10 digits';
        return true;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email is invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

//validate address
function validateAddress(){
    var address = document.getElementById('address').value;
    
    
    if(address.length == 0) {
        addressError.innerHTML = 'address is required';
        return false;
    }
    
    addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm(){
    if (!validateName() ||!validateGender()|| !validatePhone() || !validateEmail() ||! validateAddress()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}



