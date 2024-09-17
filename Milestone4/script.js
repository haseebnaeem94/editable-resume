var form = document.getElementById('resume');
var myresume = document.getElementById('myresume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var myname = document.getElementById('name').value;
    var myemail = document.getElementById('email').value;
    var mycontact = document.getElementById('contact number').value;
    var myeducation = document.getElementById('Education').value;
    var mywork = document.getElementById('work experience').value;
    var skills = document.getElementById('skills and expertise').value;
    var generateResume = "\n<h2><b>Editable Resume</b><h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable = \"true\"> ".concat(myname, "</span></p>\n<p><b>Email:</b><span contenteditable = \"true\"> ").concat(myemail, "</span></p>\n<p><b>Contact#</b><span contenteditable = \"true\"> ").concat(mycontact, "</span></p>\n\n<h3>Academic Information</h3>\n<p><b>Education:</b> <span contenteditable = \"true\">").concat(myeducation, "</span></p>\n\n<h3>Work Experience:</h3>\n<p><b>Work Experience:</b><span contenteditable = \"true\"> ").concat(mywork, "</span></p>\n\n<h3>Skills and Expertise</h3>\n<p><b>Skills and Expertise:<b/><span contenteditable = \"true\"> ").concat(skills, "</span></p>\n\n\n");
    if (myresume) {
        myresume.innerHTML = generateResume;
    }
    else {
        console.log("please enter the required field");
    }
});
