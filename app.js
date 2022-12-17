var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-tab-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab-content");
  }

  event.currentTarget.classList.add("active-tab-link");
  document.getElementById(tabname).classList.add("active-tab-content");
}

/** Show hidden projects */
function showProjects() {
  var hidden_projects = document.getElementsByClassName("hidden-project");
  var show_more = document.getElementById('show-more');
  for (project of hidden_projects) {
    if (project.style.display == 'none'){
    project.style.display = "block";
    show_more.innerHTML = "See less"
    } else {
        project.style.display = "none";
        show_more.innerHTML = 'See more'
    }
}
}


/*

function showPrjects() {
    var hidden_projects = document.getElementsByClassName("hidden-project");

    for (project of hidden_projects){
        var display = getComputedStyle('project').display;
        if (display == "none") {
            searchbar.style.display = "block";
        } else {
            searchbar.style.display = "none";
        }
    }

    }
 */

/**THE SUBMIT FORM */

function sendMail(){
  var parameters = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

const serviceID = 'service_tb8y2f3';
const templateID = 'template_dlrqcgj';

emailjs.send(serviceID, templateID, parameters)
.then(
  res =>{
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    console.log(res);
    alert('Your message was successfully sent');
  }
).catch((err) => alert(err));

}
