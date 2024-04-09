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

// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const genderInput = studentForm["gender"];
const ageInput = studentForm["age"];
const addressInput = studentForm["address"];
const rollInput = studentForm["roll"];

/* 
{
  name: '',
  gender: '',
  age: number,
  address: '',
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name,gender, age, address, roll) => {
  students.push({
    name,
    gender,
    age,
    address,
    roll,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name,gender, age,address, roll };
};

const createStudentElement = ({ name,gender,age,address, roll }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentGender=document.createElement("p");
  const studentAge = document.createElement("p");
  const studentAddress = document.createElement("p");
  const studentRoll = document.createElement("p");


  // Add to the DOM
  studentDiv.append(studentName,studentGender,studentAge,studentAddress,studentRoll);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    genderInput.value,
    ageInput.value,
    addressInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  genderInput.value = "";
  ageInput.value = "";
  addressInput.value = "";
  rollInput.value = "";
};

