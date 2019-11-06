/*  
    1. Manipulates between day and night - Done

TODO

    2. Reformat the website elements on the left and right side of the boxes.
    3. Split the website in half
    4. Add sword drop animation

*/

let firstRun = true;    // This will be used to check if the function has gone through init.

function changeMode() {


    const DOMstrings = { buttonIcon: 'modeIcon' } // obj for DOM strings

    const moon = "🌚";
    const sun = "🌞";
    
    let timeOfDay = new Date().getHours();
    
    // Document Variable(s)

    const button = document.getElementById(DOMstrings.buttonIcon);


    // These first 2 checks would run by the button so if the user decides to spam it
    // it wouldn't be a major hindrance 
    if (firstRun === false && button.innerText === moon) {// Day Mode

        button.innerHTML = (sun)
        console.log(`Now it's day mode ${sun}.`);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let pop = document.querySelectorAll("button");
        // pop[3].className = 'c1';

        let btn_text = document.querySelectorAll(".holo");
        for (let i = 0; i < btn_text.length; i++) {
            btn_text[i].style.color = "black";
        }
    }   // if 
    else if(firstRun === false && button.innerText === sun){ // Night Mode

        button.innerHTML = (moon);
        console.log(`Now it's night mode ${moon}.`);
        document.body.style.backgroundColor = "#262626";
        document.body.style.color = "#ff3f80";
        let pop = document.querySelectorAll("button");
        // pop[3].className = 'c2';

        let btn_text = document.querySelectorAll(".holo");
        let holoHover = document.querySelectorAll("hover");
        for (let i = 0; i < btn_text.length; i++) {
            btn_text[i].style.color = "#ff3f80";
        }

    } // else 
    else if (timeOfDay > 6 && timeOfDay <= 19) {     // Day Mode

        button.innerHTML = (sun)
        console.log(`Auto set to Day Mode ${sun}.`);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let pop = document.querySelectorAll("button");
        // pop[3].className = 'c1';
        
        

    }   // if 
    else if(timeOfDay <= 6 || timeOfDay > 19){   // Night Mode

        button.innerHTML = (moon);
        console.log(`Auto set to Night Mode${moon}.`);
        document.body.style.backgroundColor = "#262626";
        document.body.style.color = "#ff3f80";
        let pop = document.querySelectorAll("button");
        // pop[3].className = 'c2';

        
        let btn_text = document.querySelectorAll(".holo");
        for (let i = 0; i < btn_text.length; i++) {
            btn_text[i].style.color = "#ff3f80";
        }
    } // else 
    

    firstRun = false; // handles initial run
    // if it has run once it'll become false and not rerun until the page is refreshed.

} // changeMode FUNC



function init() {

    changeMode();

    document.getElementById("modeIcon").addEventListener("click", changeMode);

} // init FUNC



// initializes app
init();