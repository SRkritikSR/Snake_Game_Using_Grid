
var SnakePosAR = [{ x: 25, y: 25 }]
var foodAR = [{ x: Math.floor((Math.random() * 50) + 1), y: Math.floor((Math.random() * 50) + 1) }]
foodAR[0].x = 48
var foodStyle = {
    width: "1fr",
    backgroundColor: "green"
}
console.log("Food Position", foodAR)
function MoveSnake(whereTo) {
    //here you can see that it is working okish but not in say if we go down
    // if ((SnakePosAR[0].x == foodAR[0].x-1 && SnakePosAR[0].y==foodAR[0].y) || (SnakePosAR[0].x == foodAR[0].x+1 && SnakePosAR[0].y==foodAR[0].y) || (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y==foodAR[0].y-1) || (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y==foodAR[0].y+1)) {
    //     window.alert("yumm yumm yumm khal iya khana")
    // }

    const box1 = document.getElementById("box-1");

    switch (whereTo) {
        case "DOWN":
            console.log("In Down")
            if (SnakePosAR[0].y < 50) {
                if (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y == foodAR[0].y - 1) {
                    window.alert("yumm KHANA")

                }


                console.log(SnakePosAR[0].y)
                SnakePosAR[0].y = SnakePosAR[0].y + 1
                box1.style.gridRowStart = SnakePosAR[0].y
                break;
                //the break statement is applied here so that the switch doesn' run the other cases, and only run the present 
                //case and then exits from the loop


            }
            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].y = 0
                break;
                //we are making SnakePosAR.y=0 because we can see in the if loop the value is first appending then it's being provided to the Snake
                //if just at the end if  i now try to move the snake upward it would cause a bug as now in the above postion,.. is 
                //50 so it goes into else loop and makes the y values as 1 and then  this 1 in the below case would again go to else 
            }



        case "UP":

            console.log("In Up")
            if (SnakePosAR[0].y > 1) {
                if (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y == foodAR[0].y + 1) {
                    window.alert("yumm KHANA")
                    
                }

                console.log(SnakePosAR[0].y)
                SnakePosAR[0].y = SnakePosAR[0].y - 1
                box1.style.gridRowStart = SnakePosAR[0].y
                break;
            }



            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].y = 51
                break;
            }

        case "LEFT":

            console.log("In Left")
            if (SnakePosAR[0].x > 1) {

                if (SnakePosAR[0].x == foodAR[0].x + 1 && SnakePosAR[0].y == foodAR[0].y) {
                    window.alert("yumm KHANA")
                    
                }

                console.log(SnakePosAR[0].x)
                SnakePosAR[0].x = SnakePosAR[0].x - 1
                box1.style.gridColumnStart = SnakePosAR[0].x
                break;
            }

            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].x = 51
                break;
            }
        case "RIGHT":

            console.log("In Right")
            if (SnakePosAR[0].x < 50) {
                if (SnakePosAR[0].x == foodAR[0].x-1 && SnakePosAR[0].y == foodAR[0].y) {
                    window.alert("yumm KHANA")
                    
                }

                console.log(SnakePosAR[0].x)
                SnakePosAR[0].x = SnakePosAR[0].x + 1
                box1.style.gridColumnStart = SnakePosAR[0].x
                break;
            }



            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].x = 0
                break;
            }


    }
}


//Moving Snake with Buttons
document.getElementById("UpBtn").onclick = () => {
    MoveSnake("UP")
}
document.getElementById("DnBtn").onclick = () => {
    MoveSnake("DOWN")
}
document.getElementById("RtBtn").onclick = () => {
    MoveSnake("RIGHT")
}
document.getElementById("LtBtn").onclick = () => {
    MoveSnake("LEFT")
}


//Moving Snake with arrow keys
window.onkeydown = (e) => {
    switch (e.keyCode) {
        case (37):
            MoveSnake("LEFT")
            break;
        case 38:
            MoveSnake("UP")
            break;
        case 39:
            MoveSnake("RIGHT")
            break;
        case 40:
            MoveSnake("DOWN")
            break;
    }
}

document.getElementById("food").style = foodStyle
document.getElementById("food").style.gridColumnStart = foodAR[0].x

document.getElementById("food").style.gridRowStart = foodAR[0].y
// document.getElementById("food").style.width="5fr"
// document.getElementById("food").style.backgroundColor="black"

