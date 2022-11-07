var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-content');

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-tab-link');
    }

    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab-content');
    }

    event.currentTarget.classList.add("active-tab-link");
    document.getElementById(tabname).classList.add('active-tab-content');
}

