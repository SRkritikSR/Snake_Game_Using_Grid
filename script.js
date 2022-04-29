
var postionAR = [{ x:25 , y: 25 }]
function MoveSnake(whereTo) {

    const box1 = document.getElementById("box-1");
    switch (whereTo) {
        case "DOWN":
            console.log("In Down")
            if (postionAR[0].y < 50) {

                console.log(postionAR[0].y)
                postionAR[0].y = postionAR[0].y + 1
                box1.style.gridRowStart = postionAR[0].y
                break;
                //the break statement is applied here so that the switch doesn' run the other cases, and only run the present 
                //case and then exits from the loop

            }
            else {
                window.alert("araraa lag gayi diwar pe")
                postionAR[0].y = 0
                break;
                //we are making postionar.y=0 because we can see in the if loop the value is first appending then it's being provided to the Snake
                //if just at the end if  i now try to move the snake upward it would cause a bug as now in the above postion,.. is 
                //50 so it goes into else loop and makes the y values as 1 and then  this 1 in the below case would again go to else 
            }
        case "UP":
            
            console.log("In Up")
            if (postionAR[0].y > 1) {

                console.log(postionAR[0].y)
                postionAR[0].y = postionAR[0].y - 1
                box1.style.gridRowStart = postionAR[0].y
                break;
            }
            else {
                window.alert("araraa lag gayi diwar pe")
                postionAR[0].y = 51
                break;
            }

        case "LEFT":
            
            console.log("In Left")
            if (postionAR[0].x > 1) {

                console.log(postionAR[0].x)
                postionAR[0].x = postionAR[0].x - 1
                box1.style.gridColumnStart = postionAR[0].x
                break;
            }
            else {
                window.alert("araraa lag gayi diwar pe")
                postionAR[0].x = 51
                break;
            }
        case "RIGHT":
            
            console.log("In Right")
            if (postionAR[0].x < 50) {

                console.log(postionAR[0].x)
                postionAR[0].x = postionAR[0].x + 1
                box1.style.gridColumnStart   = postionAR[0].x
                break;
            }
            else {
                window.alert("araraa lag gayi diwar pe")
                postionAR[0].x = 0  
                break;
            }


    }
}

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