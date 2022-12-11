const blinkDisplay = document.querySelector(".text")
const cursor = document.querySelector(".cursor")

const phrasesLong = ["a web developer.", "in love with Tori." ,"Brooklyn born and raised.", "a lifetime learner.", "a proud dog dad.", "excited to meet you!"]

let i = 0;
let j = 0;

let current = [];
let isDeleting = false;

function loop(){
    let time = Math.random() * (200-80) + 80;

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
                time = 90;
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
                j = 0;
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

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(loop(), 5000)
})