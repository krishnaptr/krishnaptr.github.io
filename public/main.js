// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    } else {
    document.documentElement.classList.remove('dark');
    }
    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme');

const load = document.querySelector("#loaders");
function loader(){
    load.style.display = "none";
    load.style.zIndex = "1";
}


// TOGGLE DARK MODE
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

const ToggleDarkMode = function(){
    checkbox.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
}

ToggleDarkMode();
checkbox.addEventListener("click", ToggleDarkMode);

// SCROLL TO TOP
btnTop = document.getElementById("TopButton");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";  
        }
    }

function ToTheTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// MENU BAR HAMBURGER 
const menu = document.querySelector("#menu-toggle");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");

const menuClick = function(){
    if(menu.checked){
            bar2.style.transform = "translateX(100px)";
            bar3.style.transform = "rotate(-45deg)";
            bar1.style.transform = "rotate(45deg)";
            bar1.style.transformOrigin = "8% 140%";
    } else{
            bar1.style.transform = "rotate(0deg)";
            bar3.style.transform = "rotate(0deg)";
            bar2.style.transform = "translateX(0)";
    }
}
menuClick();
menu.addEventListener("click", menuClick);
