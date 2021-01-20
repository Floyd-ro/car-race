canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "https://media.istockphoto.com/photos/outdoor-track-and-racing-picture-id942673134?k=6&m=942673134&s=612x612&w=0&h=kZVPrXuOv2OLiNQLKYA-fIP4V2vuoLZo_7b2beK3Edc=";

rover_image = "https://cdn.imgbin.com/23/10/1/imgbin-cartoon-drawing-car-cartoon-muWCqkdimJpqah5bNv1A6apTu.jpg";

rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed);
         if (keyPressed == '38')
         {
             up();
            console.log("up");
         }
         if (keyPressed == '40')
         {
             down();
            console.log("down");
         }
         if (keyPressed == '37')
         {
             left();
            console.log("left");
         }
         if (keyPressed == '39')
         {
             right();
            console.log("right");
         }
}

