var last_render_Time = 0
var button_Clicked = "";
const SNAKE_SPEED = 5;
var SnakePosAR = [{ x: 25, y: 25 }]
var foodAR = [{ x: Math.floor((Math.random() * 50) + 1), y: Math.floor((Math.random() * 50) + 1) }]
var whereTo = "";
var foodStyle = {
    width: "1fr",
    height: "1fr",
    backgroundColor: "green"
}
var SnakeStyle = {
    width: "1fr",
    height: "1fr",
    backgroundColor: "brown",
    gridColumnStart: 24,
    gridRowStart: 20
}
const NEW_SNAKE_BOX = () => {
    console.log("IN NewSnakeBox")
    console.log(document.querySelector(".container-box"))
    const NEW_SNAKE_PART = document.createElement("div")
    document.querySelector(".container-box").appendChild(NEW_SNAKE_PART)
    NEW_SNAKE_PART.setAttribute("id", "box-2")
    Object.assign(NEW_SNAKE_PART.style, SnakeStyle)

}
console.log("Food Position", foodAR)




function main(current_Time) {

    let second_since_lastRender = (current_Time - last_render_Time) / 1000
    window.requestAnimationFrame(main)


    if (second_since_lastRender < (1 / (SNAKE_SPEED))) return
    last_render_Time = current_Time
    console.log("ChckPt-1: animation running")
    MoveSnake()
}
const Animate = () => {
    window.requestAnimationFrame(main)
}
const MoveActions = () => {

    document.getElementById("food").style = foodStyle
    document.getElementById("food").style.gridColumnStart = foodAR[0].x

    document.getElementById("food").style.gridRowStart = foodAR[0].y
    console.log("ChckPt-2: animation running at MoveAction")
    //Moving Snake with Buttons
    document.getElementById("UpBtn").onclick = () => {
        Animate()
        whereTo = "UP"
    }
    document.getElementById("DnBtn").onclick = () => {
        Animate()
        whereTo = "DOWN"
    }
    document.getElementById("RtBtn").onclick = () => {
        Animate()
        whereTo = "RIGHT"
    }
    document.getElementById("LtBtn").onclick = () => {
        Animate()
        whereTo = "LEFT"
    }


    //Moving Snake with arrow keys
    window.onkeydown = (e) => {
        switch (e.keyCode) {
            case (37):
                Animate()
                whereTo = "LEFT"
                break;
            case 38:
                Animate()
                whereTo = "UP"
                break;
            case 39:
                Animate()
                whereTo = "RIGHT"
                break;
            case 40:
                Animate()
                whereTo = "DOWN"
                break;
        }
    }

}
function MoveSnake() {
    //here you can see that it is working okish but not in say if we go down
    // if ((SnakePosAR[0].x == foodAR[0].x-1 && SnakePosAR[0].y==foodAR[0].y) || (SnakePosAR[0].x == foodAR[0].x+1 && SnakePosAR[0].y==foodAR[0].y) || (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y==foodAR[0].y-1) || (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y==foodAR[0].y+1)) {
    //     window.alert("yumm yumm yumm khal iya khana")
    // }

    const BOX1 = document.getElementById("box-1");

    // IN all the below cases of switch we can see that postion[i].x or y is one behind or ahead of the Snake so we adjust it accordingly
    switch (whereTo) {
        case "DOWN":
            console.log("In Down")
            if (SnakePosAR[0].y < 50) {
                if (SnakePosAR[0].x == foodAR[0].x && SnakePosAR[0].y == foodAR[0].y - 1) {
                    window.alert("yumm KHANA")
                    NEW_SNAKE_BOX()
                    // const box_2=document.createElement("div")
                    // document.getElementById("container-box").appendChild(box_2)
                    // box_2.style=SnakeStyle
                    // box_2.style.gridColumnStart=SnakePosAR[1].x

                }


                console.log(SnakePosAR[0].y)
                SnakePosAR[0].y = SnakePosAR[0].y + 1
                BOX1.style.gridRowStart = SnakePosAR[0].y
                break;
                //the break statement is applied here so that the switch doesn' run the other cases, and only run the present 
                //case and then exits from the loop


            }
            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].y = 0
                SnakePosAR[0].y = SnakePosAR[0].y + 1
                BOX1.style.gridRowStart = SnakePosAR[0].y
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
                BOX1.style.gridRowStart = SnakePosAR[0].y
                break;
            }



            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].y = 51
                SnakePosAR[0].y = SnakePosAR[0].y - 1
                BOX1.style.gridRowStart = SnakePosAR[0].y
                break;
            }

        case "LEFT":

            console.log("In Left")
            if (SnakePosAR[0].x > 1) {

                if (SnakePosAR[0].x == foodAR[0].x + 1 && SnakePosAR[0].y == foodAR[0].y) {
                    window.alert("yumm KHANA")

                }
                SnakePosAR[0].x = SnakePosAR[0].x - 1
                BOX1.style.gridColumnStart = SnakePosAR[0].x
                console.log(BOX1.style.gridColumnStart, SnakePosAR[0].x)



                console.log("At the end of LEFt", SnakePosAR[0].x)
                break;
            }

            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].x = 51
                SnakePosAR[0].x = SnakePosAR[0].x - 1
                BOX1.style.gridColumnStart = SnakePosAR[0].x



                break;
            }
        case "RIGHT":

            console.log("In Right")
            if (SnakePosAR[0].x < 50) {
                if (SnakePosAR[0].x == foodAR[0].x - 1 && SnakePosAR[0].y == foodAR[0].y) {
                    window.alert("yumm KHANA")

                }

                console.log(SnakePosAR[0].x)
                SnakePosAR[0].x = SnakePosAR[0].x + 1
                BOX1.style.gridColumnStart = SnakePosAR[0].x
                break;
            }   



            else {
                window.alert("araraa lag gayi diwar pe")
                SnakePosAR[0].x = 0
                SnakePosAR[0].x = SnakePosAR[0].x + 1
                BOX1.style.gridColumnStart = SnakePosAR[0].x

                break;
            }


    }
}
document.getElementById("Play").onclick=()=> 
{
    if (window.confirm("START GAME")) MoveActions()
}
