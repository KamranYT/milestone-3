
// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

//     // type assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const contactElement = document.getElementById('contact') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
 
 
   
   
//     if ( profilePictureInput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const contact = contactElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
    
//     //picture element
//     const profilePictureFile = profilePictureInput.files?.[0]
//     const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    
    
//     //Create Resume output
//     const resumeOutput = `
//     <h2>Resume</h2>
//     ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ""}
//     <p><strong>Name:</strong> ${name} </p>
//     <p><strong>Email: </strong> ${email} </p>
//     <p><strong>Phone Number: </strong ${contact} </p>
//     <h3>Education<h3>
//     <p>${education}</P>
//     <h3>Education<h3>
//     <p>${experience}</P>
//     <h3>Education<h3>
//     <p>${skills}</P>
//     `;


//     const resumeOutputElement = document.getElementById(`resumeOutput`)
//     if (resumeOutputElement){
//         resumeOutputElement.innerHTML = resumeOutput;
//         resumeOutputElement.style.display = 'block';
//     } 

//     } else {
//         console.error('one or more output are missing')
//     }    
// });



// Interface for the form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to display the uploaded profile picture
function displayProfilePic(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.getElementById('display-pic') as HTMLImageElement;
            img.src = e.target!.result as string;
            img.style.display = 'block';  // Show the image once uploaded
        };

        reader.readAsDataURL(file);  // Convert the file to a data URL for display
    }
}

// Function to generate and update the resume
function generateResume(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLInputElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;

    // Get form data
    const resumeData: ResumeData = {
        name: nameInput.value || 'Your Name',
        email: emailInput.value || 'your.email@example.com',
        phone: phoneInput.value || '+123456789',
        education: educationInput.value || 'Your education details here',
        experience: experienceInput.value || 'Your work experience details here',
        skills: skillsInput.value || 'Your skills here'
    };

    // Update resume with form data
    document.getElementById('display-name')!.textContent = resumeData.name;
    document.getElementById('display-email')!.textContent = resumeData.email;
    document.getElementById('display-phone')!.textContent = resumeData.phone;
    document.getElementById('display-education')!.textContent = resumeData.education;
    document.getElementById('display-experience')!.textContent = resumeData.experience;
    document.getElementById('display-skills')!.textContent = resumeData.skills;
}

// Add event listeners for button click and file input change
const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;

generateButton.addEventListener('click', generateResume);
profilePicInput.addEventListener('change', displayProfilePic);
