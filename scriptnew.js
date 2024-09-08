var _a;
var uploadedImageUrl = '';
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for input fields
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Profile Image</h3>\n            <img src=\"").concat(uploadedImageUrl, "\" alt=\"Profile Image\">\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
// Image upload functionality
var selectImage = document.querySelector('.select-image');
var inputFile = document.querySelector('#file');
var imgArea = document.querySelector('.img-area');
selectImage.addEventListener('click', function () {
    inputFile.click();
});
inputFile.addEventListener('change', function () {
    var image = inputFile.files ? inputFile.files[0] : null;
    if (image && image.size < 2000000) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            uploadedImageUrl = reader_1.result;
            imgArea.style.background = 'none';
            imgArea.innerHTML = "<img src=\"".concat(uploadedImageUrl, "\" alt=\"Profile Image\">");
        };
        reader_1.readAsDataURL(image);
    }
    else {
        alert("Image must be less than 2MB.");
    }
});
// let uploadedImageUrl = ''; 
// document.getElementById('resume')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Type assertion for input fields
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone:</strong> ${phone}</p>
//             <h3>Education</h3>
//             <p>${education}</p>
//             <h3>Experience</h3>
//             <p>${experience}</p>
//             <h3>Skills</h3>
//             <p>${skills}</p>
//             <h3>Profile Image</h3>
//             <img src="${uploadedImageUrl}" alt="Profile Image">
//         `;
//         const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         }
//     } else {
//         console.error('One or more input elements are missing');
//     }
// });
// // Image upload
// const selectImage = document.querySelector('.select-image') as HTMLButtonElement;
// const inputFile = document.querySelector('#file') as HTMLInputElement;
// const imgArea = document.querySelector('.img-area') as HTMLDivElement;
// selectImage.addEventListener('click', function () {
//     inputFile.click();
// });
// inputFile.addEventListener('change', function () {
//     const image = inputFile.files ? inputFile.files[0] : null;
//     if (image && image.size < 2000000) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             uploadedImageUrl = reader.result as string;
//             imgArea.style.background = 'none';
//             imgArea.innerHTML = `<img src="${uploadedImageUrl}" alt="Profile Image">`;
//         };
//         reader.readAsDataURL(image);
//     } else {
//         alert("Image must be less than 2MB.");
//     }
// });
// document.getElementById('resume')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Type assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         // Create resume output with the uploaded image
//         const resumeOutput = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
//         <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
//         <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
//         <h3>Education</h3>
//         <p id="edit-education" class="editable">${education}</p>
//         <h3>Experience</h3>
//         <p id="edit-experience" class="editable">${experience}</p>
//         <h3>Skills</h3>
//         <p id="edit-skills" class="editable">${skills}</p>
//         <h3>Profile Image</h3>
//         <img src="${uploadedImageUrl}" alt="Profile Image" style="width: 150px; height: 150px;">
//         `;
//         const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             makeEditable();
//         } 
//     } else {
//         console.error('One or more input elements are missing');
//     }
// });
// function makeEditable() {
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click', function () {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             // Replace content
//             if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
//                 const input = document.createElement('input');
//                 input.type = 'text';
//                 input.value = currentValue;
//                 input.classList.add('editing-input');
//                 input.addEventListener('blur', function () {
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline';
//                     input.remove();
//                 });
//                 currentElement.style.display = 'none';
//                 currentElement.parentNode?.insertBefore(input, currentElement);
//                 input.focus();
//             }
//         });
//     });
// }
// // Image upload
// let uploadedImageUrl = ''; 
// const selectImage = document.querySelector('.select-image') as HTMLDivElement;
// const inputFile = document.querySelector('#file') as HTMLInputElement;
// const imgArea = document.querySelector('.img-area') as HTMLDivElement;
// selectImage.addEventListener('click', function () {
//     inputFile.click();
// });
// inputFile.addEventListener('change', function () {
//     const image = inputFile.files ? inputFile.files[0] : null;
//     if (image && image.size < 2000000) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const allImg = imgArea.querySelectorAll('img');
//             allImg.forEach(item => item.remove());
//             uploadedImageUrl = reader.result as string;  
//             const img = document.createElement('img');
//             img.src = uploadedImageUrl;
//             imgArea.appendChild(img);
//             imgArea.classList.add('active');
//             imgArea.dataset.img = image.name;
//         };
//         reader.readAsDataURL(image);
//     } else {
//         alert("Image size is more than 2MB");
//     }
// });
// // Listing element
// document.getElementById('resume')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Type assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         // Create resume output with the uploaded image
//         const resumeOutput = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Experience</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//         <h3>Profile Image</h3>
//         <img src="${uploadedImageUrl}" alt="Profile Image" style="width: 150px; height: 150px;">
//         `;
//         const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error('The resume output element is missing');
//         }
//     } else {
//         console.error('One or more output elements are missing');
//     }
// });
// // Image upload
// let uploadedImageUrl = ''; 
// const selectImage = document.querySelector('.select-image') as HTMLDivElement;
// const inputFile = document.querySelector('#file') as HTMLInputElement;
// const imgArea = document.querySelector('.img-area') as HTMLDivElement;
// selectImage.addEventListener('click', function () {
//     inputFile.click();
// });
// inputFile.addEventListener('change', function () {
//     const image = inputFile.files ? inputFile.files[0] : null;
//     if (image && image.size < 2000000) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const allImg = imgArea.querySelectorAll('img');
//             allImg.forEach(item => item.remove());
//             uploadedImageUrl = reader.result as string;  
//             const img = document.createElement('img');
//             img.src = uploadedImageUrl;
//             imgArea.appendChild(img);
//             imgArea.classList.add('active');
//             imgArea.dataset.img = image.name;
//         };
//         reader.readAsDataURL(image);
//     } else {
//         alert("Image size is more than 2MB");
//     }
// });
// document.getElementById('resume')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Type assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         // Create resume output with the uploaded image
//         const resumeOutput = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
//         <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
//         <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
//         <h3>Education</h3>
//         <p id="edit-education" class="editable">${education}</p>
//         <h3>Experience</h3>
//         <p id="edit-experience" class="editable">${experience}</p>
//         <h3>Skills</h3>
//         <p id="edit-skills" class="editable">${skills}</p>
//         <h3>Profile Image</h3>
//         <img src="${uploadedImageUrl}" alt="Profile Image" style="width: 150px; height: 150px;">
//         `;
//         const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             makeEditable();
//         } 
//     } else {
//         console.error('One or more input elements are missing');
//     }
// });
// function makeEditable() {
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click', function () {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             // Replace content
//             if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
//                 const input = document.createElement('input');
//                 input.type = 'text';
//                 input.value = currentValue;
//                 input.classList.add('editing-input');
//                 input.addEventListener('blur', function () {
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline';
//                     input.remove();
//                 });
//                 currentElement.style.display = 'none';
//                 currentElement.parentNode?.insertBefore(input, currentElement);
//                 input.focus();
//             }
//         });
//     });
// }
// // Image upload/////////////
// let uploadedImageUrl = ''; 
// const selectImage = document.querySelector('.select-image') as HTMLDivElement;
// const inputFile = document.querySelector('#file') as HTMLInputElement;
// const imgArea = document.querySelector('.img-area') as HTMLDivElement;
// selectImage.addEventListener('click', function () {
//     inputFile.click();
// });
// inputFile.addEventListener('change', function () {
//     const image = inputFile.files ? inputFile.files[0] : null;
//     if (image && image.size < 2000000) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const allImg = imgArea.querySelectorAll('img');
//             allImg.forEach(item => item.remove());
//             uploadedImageUrl = reader.result as string;  
//             const img = document.createElement('img');
//             img.src = uploadedImageUrl;
//             imgArea.appendChild(img);
//             imgArea.classList.add('active');
//             imgArea.dataset.img = image.name;
//         };
//         reader.readAsDataURL(image);
//     } else {
//         alert("Image size is more than 2MB");
//     }
// });
// // Image upload end/////////////
