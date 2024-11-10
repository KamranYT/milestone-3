var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    // type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //Create Resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email: </strong> ").concat(email, " </p>\n    <p><strong>Phone Number: </strong ").concat(contact, " </p>\n    <h3>Education<h3>\n    <p>").concat(education, "</P>\n    <h3>Education<h3>\n    <p>").concat(experience, "</P>\n    <h3>Education<h3>\n    <p>").concat(skills, "</P>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
