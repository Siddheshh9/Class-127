rightWristY = 0;
leftWristY = 0;
song = "";
song2 = "";

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw() {
    image(video, 0, 0, 425, 425);
}

function Song_Name() {
    if (rightWristY > leftWristY) {
        song.play("music.mp3")
    }
    else{
        song2.play("music2.mp3")
    }
}

function setup() {
    canvas = createCanvas(425, 425);
    canvas.center();

    video = createCapture();
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED");
}

function gotPoses(results) {
    rightWristY = results[0].pose.rightWrist.y;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("LeftWrist Y = " + leftWristY + "RightWrist Y = " + rightWristY);
}