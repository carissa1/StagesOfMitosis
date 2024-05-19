var intro = document.getElementById("intro");
var tutorialNumber = 1;
var tutorialList = [document.getElementById("first"), document.getElementById("second"), document.getElementById("third"), document.getElementById("fourth"), document.getElementById("fifth"), document.getElementById("sixth"), document.getElementById("seventh"), document.getElementById("eighth")]
var next = document.getElementById("next")
var start = document.getElementById("start")

function Game(){
    // document.getElementById("intro").style.display = "none";
    document.getElementById("start").onclick = function(){
        document.getElementById("intro").classList.add("hide")
        document.getElementById("tutorial").classList.add("show")
        document.getElementById("first").style = "display:inline-block"
    }

    document.getElementById("next").onclick = function(){
        if(tutorialNumber == tutorialList.length){
            document.getElementById("tutorial").classList.remove("show")
            document.getElementById("tutorial").classList.add("hide")
            document.getElementById("game").classList.add("show")
            quiz()
        }

        // tutorialList[tutorialNumber-1]
        tutorialList[tutorialNumber-1].classList.add("hide")
        tutorialList[tutorialNumber-1].classList.remove("show")
        // tutorialList[tutorialNumber-1].style = "display:none"
        // tutorialList[tutorialNumber]
        tutorialList[tutorialNumber].classList.add("show")

        tutorialNumber ++
    }

    document.getElementById("prev").onclick = function() {
        tutorialList[tutorialNumber-1].classList.add("hide")
        tutorialList[tutorialNumber-1].classList.remove("show")
        tutorialList[tutorialNumber-2].classList.add("show")
        tutorialNumber --
    }

    ClickCheck()
    
}

var numberDone = 0;
var numberTimes = 8; //15
var images = ["Interphase.jpg", "Prophase.jpg", "Prometaphase.png", "Metaphase.jpg", "Anaphase.jpg", "Telophase.jpg", "Cytokinesis.jpg"]
// var txt = [inter1, pro1, prometa1, meta1, ana1, tela1, cyto1] NOT YET
var txtOrImages = "";
var chosen = 0;
var txtShower = document.getElementById("txtShower")
var imgShower = document.getElementById("imgShower")
var Interphase = document.getElementById("Inter")
var Prophase = document.getElementById("Pro")
var Prometaphase = document.getElementById("Prometa")
var Metaphase = document.getElementById("Meta")
var Anaphase = document.getElementById("Ana")
var Telophase = document.getElementById("Telo")
var Cytokinesis = document.getElementById("Cyto")
var correct = 0
var wrong = 0


function quiz(){
    if(numberDone < numberTimes-1){
        // if(Math.round(Math.random) < 0.5){
        //     txtOrImages = "txt"
        //     ShowQA()
        // }
        // else{
        //     txtOrImages = "images"
        //     ShowQA()
        // }
        txtOrImages = "images"

        Interphase.style.backgroundColor = "rgb(98, 98, 172)"
        Prophase.style.backgroundColor = "rgb(98, 98, 172)"
        Prometaphase.style.backgroundColor = "rgb(98, 98, 172)"
        Metaphase.style.backgroundColor = "rgb(98, 98, 172)"
        Anaphase.style.backgroundColor = "rgb(98, 98, 172)"
        Telophase.style.backgroundColor = "rgb(98, 98, 172)"
        Cytokinesis.style.backgroundColor = "rgb(98, 98, 172)"

        ShowQA()
        
    }
    else{
        imgShower.style = "display: none"
        document.getElementById("phaseBtns").style = "display: none"
        document.getElementById("numCorrect").style = "display: inline-block"
        document.getElementById("wrong").innerHTML = "You made " + wrong + " mistakes"
        if(wrong == 0){
            document.getElementById("passed").innerHTML = "You got all of them right! Nice job! You have mastered all the stages of mitosis."
            document.getElementById("restartBtn").style = "display:inline-block"
        }
        else{
            document.getElementById("passed").innerHTML = "You made a few mistakes, keep trying to get a perfect score! Go back and review the stages of mitosis, then try again."
            document.getElementById("restartBtn").style = "display:inline-block"
        }
        document.getElementById("restartBtn").onclick = function(){
            window.location.href = "index.html"
        }
    }
}

function ShowQA(){
    //INSERT SOMETHING LATER

    if(txtOrImages == "txt"){
        chosen = txt[Math.floor(Math.random() * txt.length)]
        txtShower.innerHTML = chosen;
    }
    else{
        chosen = images[Math.floor(Math.random() * images.length)] 
        document.getElementById("imgShower").src = chosen;
    }

    // window.setTimeout(ClickCheck(), 1000)
}

function ClickCheck(){
    Interphase.addEventListener("mousedown", () => {
        console.log(chosen + " I")
        // switch(chosen == "Interphase.jpg"){
        //     case false:
        //         wrong+=1
        //         console.log("wrong!! BOOOO YOU SUCK TRY AGAIN >:( I")
        //         break
        //     case true:
        //         numberDone+=1
        //         keepGoing = false
        //         quiz()
        //         correct++
        //         // images.slice(images[chosen], 1)
        //         const index = images.indexOf(chosen);
        //         if (index > -1) {
        //             images.splice(index, 1);
        //         }
        //         break
                
        // }
        if(chosen == "Interphase.jpg") {
            numberDone+=1
            keepGoing = false
            Interphase.style.backgroundColor = "green"
            console.log(keepGoing)
            correct++
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()

        }
        else if(chosen != "Interphase.jpg"){
            wrong++
            Interphase.style.backgroundColor = "red"
            alert("This is not interphase. Interphase is when the cell prepares for mitosis.")
        }
    });
    Prophase.addEventListener("mousedown", () => {
        console.log(chosen + " P")
        // switch(chosen == "Prophase.jpg"){
        //     case false:
        //         wrong+=1
        //         console.log("wrong!! BOOOO YOU SUCK TRY AGAIN >:( I")
        //         break
        //     case true:
        //         numberDone+=1
        //         keepGoing = false
        //         quiz()
        //         correct++
        //         // images.slice(images[chosen], 1)
        //         const index = images.indexOf(chosen);
        //         if (index > -1) {
        //             images.splice(index, 1);
        //         }
        //         break
                
        // }
        if(chosen == "Prophase.jpg") {
            Prophase.style.backgroundColor = "green"
            numberDone+=1
            keepGoing = false

            console.log(keepGoing)
            correct++
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()
        }
        else if(chosen != "Prophase.jpg"){
            wrong++
            
            Prophase.style.backgroundColor = "red"
            alert("This is not prophase. Prophase is when the mitotic spindle begins forming.")
        }
    });
    Prometaphase.addEventListener("mousedown", () => {
        if(chosen == "Prometaphase.png"){
            numberDone+=1
            Prometaphase.style.backgroundColor = "green"
            correct++
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()
        }
        else if(chosen != "Prometaphase.png"  ){
            wrong++
            Prometaphase.style.backgroundColor = "red"
            alert("This is not prometaphase. Prometaphase is when the nuclear membrane dissapears.")
        }
    });
    Metaphase.addEventListener("mousedown", () => {
        if(chosen == "Metaphase.jpg"){
            numberDone+=1
            
            Metaphase.style.backgroundColor = "green"
            correct++
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()
        }
        else if(chosen != "Metaphase.jpg"){
            wrong++
            Metaphase.style.backgroundColor = "red"
            alert("This is not metaphase. Metaphase is when the mitotic spindle connects to the chromosomes and begins to align them.")
        }
    });
    Anaphase.addEventListener("mousedown", () => {
        if(chosen == "Anaphase.jpg"){
            numberDone+=1
           
            Anaphase.style.backgroundColor = "green"
            keepGoing = true
            correct++
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()
        }
        else if(chosen != "Anaphase.jpg"  ){
            wrong++
            Anaphase.style.backgroundColor = "red"
            alert("This is not anaphase. Anaphase is when the sister chromatids break apart and move to opposite sides.")
        }
    });
    Telophase.addEventListener("mousedown", () => {
        if(chosen == "Telophase.jpg"){
            numberDone+= 1
            
            Telophase.style.backgroundColor = "green"
            correct++
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()
        }
        else if(chosen != "Telophase.jpg"  ){
            wrong++
            Telophase.style.backgroundColor = "red"
            alert("This is not telophase. Telophase is when the nuclear membrane reforms and the cell prepares to divide.")
        }
    });
    Cytokinesis.addEventListener("mousedown", () => {
        if(chosen == "Cytokinesis.jpg"){
            console.log(chosen)
            numberDone+= 1
            correct++
            Cytokinesis.style.backgroundColor = "green"
            // images.slice(images[chosen], 1)
            const index = images.indexOf(chosen);
            if (index > -1) {
                images.splice(index, 1);
            }
            quiz()
        }
        else if(chosen != "Cytokinesis.jpg"  ){
            wrong++
            Cytokinesis.style.backgroundColor = "red"
            alert("This is not cytokinesis. Cytokinesis is when the cell divides.")
        }
    });
}


