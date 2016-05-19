var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 10){
        clearInterval(interval);
        return;
    }
}, 2000);    // Creates the standard setup, including setting the gameport and creating the renderer
var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(1800, 600, {backgroundColor: 0x000000});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

// add player container to stage
var pContainer = new PIXI.Container();
pContainer.position.x = 250;
pContainer.position.y = 250;
stage.addChild(pContainer);

// add player image to stage
var player_tri = new PIXI.Sprite(PIXI.Texture.fromImage("smiley.png"));
pContainer.addChild(player_tri);

player_tri.anchor.x = .5;
player_tri.anchor.y = .5;
player_tri.position.x = 0; //350
player_tri.position.y = 220; //465

function keydownEventHandler(e){
	if(e.keyCode == 87){ // W keyCode
		player_tri.position.y -= 21;
	}
	if(e.keyCode == 83){ // S keyCode
		player_tri.position.y += 21;
	}
	if(e.keyCode == 65){ // A keyCode
		player_tri.position.x -= 21;
	}
	if(e.keyCode == 68){ // D keyCode
		player_tri.position.x += 21;
	}
  if(e.keyCode == 38){ // Up keyCode
		player_tri.position.y -= 21;
	}
	if(e.keyCode == 40){ // Down keyCode
		player_tri.position.y += 21;
	}
	if(e.keyCode == 37){ // Left keyCode
		player_tri.position.x -= 21;
	}
	if(e.keyCode == 39){ // Right keyCode
		player_tri.position.x += 21;
	}
}

document.addEventListener('keydown', keydownEventHandler);


// Imports the texture and sets it to all of the targets
var texture = PIXI.Texture.fromImage("timallen.png");
var t1 = new PIXI.Sprite(texture);
var t2 = new PIXI.Sprite(texture);
var t3 = new PIXI.Sprite(texture);
var t4 = new PIXI.Sprite(texture);
var t5 = new PIXI.Sprite(texture);
var t6 = new PIXI.Sprite(texture);
var t7 = new PIXI.Sprite(texture);
var t8 = new PIXI.Sprite(texture);
var t9 = new PIXI.Sprite(texture);
var t10 = new PIXI.Sprite(texture);

var targets = new PIXI.Container();
stage.addChild(targets);

//Creates each individual target
// Adds the first target
targets.addChild(t1);
t1.position.x = 200;
t1.position.y = 250;
t1.anchor.x = 0.8;
t1.anchor.y = 0.7;
t1.interactive = false;


targets.addChild(t2);
t2.position.x = 500;
t2.position.y = 450;
t2.anchor.x = 0.9;
t2.anchor.y = 0.9;
t2.interactive = false;


targets.addChild(t3);
t3.position.x = 330;
t3.position.y = 350;
t3.anchor.x = 0.5;
t3.anchor.y = 0.4;
t3.interactive = false;

targets.addChild(t4);
t4.position.x = 130;
t4.position.y = 250;
t4.anchor.x = 0.6;
t4.anchor.y = 0.4;
t4.interactive = false;

targets.addChild(t5);
t5.position.x = 430;
t5.position.y = 250;
t5.anchor.x = 0.5;
t5.anchor.y = 0.5;
t5.interactive = false;

targets.addChild(t6);
t6.position.x = 430;
t6.position.y = 250;
t6.anchor.x = 0.5;
t6.anchor.y = 0.5;
t6.interactive = false;

targets.addChild(t7);
t7.position.x = 400;
t7.position.y = 200;
t7.anchor.x = 0.3;
t7.anchor.y = 0.2;
t7.interactive = false;

targets.addChild(t8);
t8.position.x = 30;
t8.position.y = 50;
t8.anchor.x = 0.3;
t8.anchor.y = 0.7;
t8.interactive = false;

targets.addChild(t9);
t9.position.x = 70;
t9.position.y = 200;
t9.anchor.x = 0.7;
t9.anchor.y = 0.6;
t9.interactive = false;





// This function changes any sprite to no longer be renderable
function clear_sprite(sp_name){

	//sp_name.renderable = false;
	targets.removeChild(sp_name)
}



var togglet1x = 1; // Saves a state change for whether targets are moving right or left, up or down
var togglet1y = 1;
var togglet2x = 1;
var togglet2y = 1;
var togglet3x = 1;
var togglet3y = 1;
var togglet4x = 1;
var togglet4y = 1;
var togglet5x = 1;
var togglet5y = 1;
var togglet6y = 1;
var togglet6x = 1;
var togglet7y = 1;
var togglet7x = 1;
var togglet8y = 1;
var togglet8x = 1;
var togglet9y = 1;
var togglet9x = 1;
var togglet10y = 1;
var togglet10x = 1;


function animate() {
	requestAnimationFrame(animate);

	if(togglet1x == 1){

		t1.position.x += 10;

		if(t1.position.x == 1700){
			togglet1x = 0;
		}
	}

	else{
		t1.position.x -= 100;
		if(t1.position.x == 100){
			togglet1x = 1;
		}
	}
	if(togglet1y == 1){

		t1.position.y += 20;

		if(t1.position.y == 550){
			togglet1y = 0;
		}
	}

	else{
		t1.position.y -= 10;
		if(t1.position.y == 50){
			togglet1y = 1;
		}
	}

	t1.rotation += .05;




  if(togglet2x == 1){

    t2.position.x += 10;

    if(t2.position.x == 1700){
      togglet2x = 0;
    }
  }

  else{
    t2.position.x -= 100;
    if(t2.position.x == 100){
      togglet2x = 1;
    }
  }
  if(togglet2y == 1){

    t2.position.y += 20;

    if(t2.position.y == 550){
      togglet2y = 0;
    }
  }

  else{
    t2.position.y -= 10;
    if(t2.position.y == 50){
      togglet2y = 1;
    }
  }

  t2.rotation += .0;





  if(togglet3x == 1){

    t3.position.x += 10;

    if(t3.position.x == 1700){
      togglet3x = 0;
    }
  }

  else{
    t3.position.x -= 100;
    if(t3.position.x == 100){
      togglet3x = 1;
    }
  }
  if(togglet3y == 1){

    t3.position.y += 20;

    if(t3.position.y == 550){
      togglet3y = 0;
    }
  }

  else{
    t3.position.y -= 10;
    if(t3.position.y == 50){
      togglet3y = 1;
    }
  }

  t3.rotation += .25;





  if(togglet4x == 1){

    t4.position.x += 10;

    if(t4.position.x == 1700){
      togglet4x = 0;
    }
  }

  else{
    t4.position.x -= 100;
    if(t4.position.x == 100){
      togglet4x = 1;
    }
  }
  if(togglet4y == 1){

    t4.position.y += 20;

    if(t4.position.y == 550){
      togglet4y = 0;
    }
  }

  else{
    t4.position.y -= 10;
    if(t4.position.y == 50){
      togglet4y = 1;
    }
  }

  t4.rotation += 2;


  if(togglet5x == 1){

    t5.position.x += 10;

    if(t5.position.x == 1700){
      togglet5x = 0;
    }
  }

  else{
    t5.position.x -= 100;
    if(t5.position.x == 100){
      togglet5x = 1;
    }
  }
  if(togglet5y == 1){

    t5.position.y += 20;

    if(t5.position.y == 550){
      togglet5y = 0;
    }
  }

  else{
    t5.position.y -= 10;
    if(t5.position.y == 50){
      togglet5y = 1;
    }
  }

  t5.rotation += .0005;


  if(togglet6x == 1){

    t6.position.x += 10;

    if(t6.position.x == 1700){
      togglet6x = 0;
    }
  }

  else{
    t6.position.x -= 100;
    if(t6.position.x == 100){
      togglet6x = 1;
    }
  }
  if(togglet6y == 1){

    t6.position.y += 20;

    if(t6.position.y == 550){
      togglet6y = 0;
    }
  }

  else{
    t6.position.y -= 10;
    if(t6.position.y == 50){
      togglet6y = 1;
    }
  }

  t6.rotation += .05;




  if(togglet7x == 1){

    t7.position.x += 10;

    if(t7.position.x == 1700){
      togglet7x = 0;
    }
  }

  else{
    t7.position.x -= 100;
    if(t7.position.x == 100){
      togglet7x = 1;
    }
  }
  if(togglet7y == 1){

    t7.position.y += 20;

    if(t7.position.y == 550){
      togglet7y = 0;
    }
  }

  else{
    t7.position.y -= 10;
    if(t7.position.y == 50){
      togglet7y = 1;
    }
  }

  t7.rotation += .0;





  if(togglet8x == 1){

    t8.position.x += 10;

    if(t8.position.x == 1700){
      togglet8x = 0;
    }
  }

  else{
    t8.position.x -= 100;
    if(t8.position.x == 100){
      togglet8x = 1;
    }
  }
  if(togglet8y == 1){

    t8.position.y += 20;

    if(t8.position.y == 550){
      togglet8y = 0;
    }
  }

  else{
    t8.position.y -= 10;
    if(t8.position.y == 50){
      togglet8y = 1;
    }
  }

  t8.rotation += .25;





  if(togglet9x == 1){

    t9.position.x += 10;

    if(t9.position.x == 1700){
      togglet9x = 0;
    }
  }

  else{
    t9.position.x -= 100;
    if(t9.position.x == 100){
      togglet9x = 1;
    }
  }
  if(togglet9y == 1){

    t9.position.y += 20;

    if(t9.position.y == 550){
      togglet9y = 0;
    }
  }

  else{
    t9.position.y -= 10;
    if(t9.position.y == 50){
      togglet9y = 1;
    }
  }

  t9.rotation += 2;



  if(togglet10x == 1){

    t10.position.x += 10;

    if(t10.position.x == 1700){
      togglet10x = 0;
    }
  }

  else{
    t9.position.x -= 100;
    if(t9.position.x == 100){
      togglet9x = 1;
    }
  }
  if(togglet10y == 1){

    t10.position.y += 20;

    if(t10.position.y == 550){
      togglet10y = 0;
    }
  }

  else{
    t10.position.y -= 10;
    if(t10.position.y == 50){
      togglet10y = 1;
    }
  }

  t10.rotation += 2;

	renderer.render(stage);

}

animate();
