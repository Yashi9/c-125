leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    canvas = createCanvas(1100,900);
    canvas.position(900, 200);
    

    video = createCapture(VIDEO);
    video.position(10,250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Model is intialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("rightWrist X  = " +results[0].pose.rightWrist.x+"rightWrist Y = " +results[0].pose.rightWrist.y);
        console.log("leftWrist X  = " +results[0].pose.leftWrist.x+"leftWrist Y = " +results[0].pose.leftWrist.y);
    }


}

function draw()
{
    background("#fffab3");
    document.getElementById("square_side").innerHTML = "Font size of the text will be  =" +difference+"px";
    textSize(difference);
    fill("red");
    text('Yashi', 50 , 400);
}