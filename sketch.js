var canvas;
var music;
var surface1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = new surface(200,210,30,40);
    surface2 = new surface(250,260,30,40);
    surface3 = new surface(300,310,30,40);
    surface14 = new surface(350,360,30,40);



    //create box sprite and give velocity
    var box = createSprite(400,300,20,20);

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprite();
    sprite= createSprite(20,20);
    



    //add condition to check if box touching surface and make it box
    if (box.isTouching)

    surface.display()
}
