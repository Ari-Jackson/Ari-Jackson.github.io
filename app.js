/* <----------- Selectors -----------> */
const blinkDisplay = document.querySelector(".text")
const cursor = document.querySelector(".cursor")

/* <----------- Functions -----------> */
const phrasesLong = ["a web developer.", "Jada's cool awesome amazing big brother." ,"Brooklyn born and raised.", "a lifetime learner.", "a proud dog dad.", "excited to meet you!"]

function typePhrases(){
    let i = 0;
    let j = 0;

    let current = [];
    let isDeleting = false;
    let time;

    function loop(){
        time = Math.random() * (200-80) + 80;

        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing")
        }
    
        if(i == phrasesLong.length){
            i = 0
        }
    
        if(i < phrasesLong.length){
            if(isDeleting == false){
                if(j <= phrasesLong[i].length){
                    current.push(phrasesLong[i][j])
                    j++
                }
            
                if(j > phrasesLong[i].length){
                    isDeleting = true;
                }
            }
    
            if(isDeleting == true){
    
                if(j >= 0){
                    time = 70;
                    current.pop()
                    j--
                }
    
                if(j == phrasesLong[i].length){
                    time = 2000;
                    if(cursor.classList.contains("typing")){
                        cursor.classList.remove("typing")
                    }
                }
    
                if(j == 0){
                    isDeleting = false;
                    i++;
                    time = 1000;
                    if(cursor.classList.contains("typing")){
                        cursor.classList.remove("typing")
                    }
                }
            }
        }
    
        blinkDisplay.textContent = current.join("");
    
        setTimeout(loop, time)
    }
    loop()
}

aboutMeObj = {
    name: "My name is Ari Joseph Kordell Jackson. Which is very long so just call me AJ, thats what everyone but my mom does. (If you're my mom of course do what you gotta do.)",
    location: "I'm Brooklyn, born and raised. ",
    passions:"I have too many passions to count, but they all center around my love for learning and learning to love."
}


/* <----------- Event Listeners -----------> */

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typePhrases, 1000)
})