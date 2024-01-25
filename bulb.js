import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Circle, Button, Label, Rectangle, GlowEffect, Pic,Ticker } = zim;

let lightOn = false; 
let electron;
let electronTicker; 
let lightState = 0; 

new Frame(
  FIT,
  1024,
  768,
  "#3b3b3b",
  "#333",
  ready,
  "assets/",
  new zim.Waiter()
);

function ready() {
  // const wire = new Rectangle(500, 400, "transparent", "#B87333", 4).center().pos(80, 265);
  // const path = new Blob(clear,{points:[[-250,-200,0,0,0,0,0,0,"none"],[250,-200,0,0,0,0,0,0,"none"],[250,200,0,0,0,0,0,0,"none"],[-250,200,0,0,0,0,0,0,"none"]]}).centerReg(); 
 


  const path = new Blob (
    {color:"transparent",
    borderColor:"transparent",
    borderWidth:3, 
    showControls:false,
    points: new Rectangle(500, 400, "#B87333", 4)}).center().pos(80, 265); 

  // electron = new Circle(10, "red").pos(445, 655);
 
  const light = new Circle(45, "transparent").center().pos(277, 120); // Increased light size
  const glowCircle = new Circle(30, "yellow").center().pos(455, 615);
 
  // Add a square with a transparent inner side and a black border

  const label = new Label({
    text: "|",
    size: 40,
    backgroundColor: "",
    bold: true,
    color: "white",
  });

  const cirImage = new Pic("assets/cir.png").center().sca(1.6).pos(70, 120);
  const texturePlate = new Rectangle(80,200,"transparent").center().pos(540,350);
  // Switch
  const switchButton = new Button({
    label: label,
    width: 60,
    height: 60,
    backgroundColor: "red",
    rollBackgroundColor: "red",
    borderWidth: 8,
    borderColor: "white",
    gradient: 0.3,
    corner: 30,
  });
 
  // Switch alpha control
  // Init opacity
  switchButton.alpha = 0.01;
  let toggle = false;
  switchButton.on("click", function () {
    toggle = !toggle;
    if (toggle) {
      switchButton.gradient = 0.01;
      switchButton.alpha = 0.01;
      glowCircle.effect(new GlowEffect({ color: "yellow", blurX: 80, blurY: 80 }));
      toggleLight(true);
      
    } else {
      switchButton.gradient = 0.01;
      switchButton.alpha = 0.01;
      glowCircle.effect(new GlowEffect({ color: "yellow", blurX: 0, blurY: 0 }));
      toggleLight(false);
    }
  });

  // Position the button at the bottom
  switchButton.center();
  switchButton.pos(456, 614);

    //metal selectors 
   
  
    const copperLabel = new Label({
      text:"তামা",
      size:20,
      bold:true,
      color:white,
      vertical:true
   });
   const copperButt = new Button({
    label: copperLabel,  // Label for the button
    width: 80,            // Width of the button
    height: 200,          // Height of the button
    backgroundColor: "transparent",  // Background color (transparent in this case)
    background: new Pic("assets/copperTexture.png").center().sca(1).pos(540, 350),  // Copper texture as the background
    rollBackgroundColor: "transparent",  // Background color on roll-over (transparent in this case)
    rollColor: "black",   // Color on roll-over
    borderWidth: 8,       // Border width
    borderColor: "white", // Border color
    gradient: 0.3,        // Gradient
    corner: 0,            // Corner radius
  }).center().pos(540, 350);  // Center and position the button
  
  
   const siliconLabel = new Label({
    text:"সিলিকন",
    size:18,
    flip:270,
    bold:true
  });
  const siliconButt = new Button({
    label:siliconLabel,
    width:80,
    height:200,
    background:new Pic("assets/siliconTexture.png").center().sca(1).pos(800,270),
    backgroundColor:"transparent",
    rollBackgroundColor:"transparent",
    rollColor:gray,
    borderWidth:8,
    borderColor:"white",
    gradient:.3,
    corner:0
  }).center().pos(800,270);
  
  
  const woodLabel = new Label({
    text:"কাঠ",
    size:20,
    bold:true,
    color:white
  });
  const woodButt = new Button({
    label:woodLabel,
    width:80,
    height:200,
    background:new Pic("assets/woodTexture.png").center().sca(1).pos(900,270),
    backgroundColor:"transparent",
    rollBackgroundColor:"transparent",
    rollColor:black,
    borderWidth:8,
    borderColor:"white",
    gradient:.3,
    corner:0
  }).center().pos(900,270);


  // Event listener for the button click
  function toggleLight(state) {
    lightOn = state;
    lightState = lightOn ? 1 : 0;
    if (lightOn) {
     
      light.color = "yellow";
      light.effect(new GlowEffect({ color: "yellow", blurX: 70, blurY: 70 }));
      // electron.animate({
      //   props: { path },
      //   ease: "linear",
      //   time: 1,
      //   loop: true,
      //   startPercent: 50,
      // });
    } else {
      light.color = "transparent";
      light.noEffect();
      // electron.animate({
      //   props: { path },
      //   ease: "linear",
      //   time: 1,
      //   loop: false,
      //   startPercent: 50,
      // });s
    }
  }
  
 
  copperButt.on("click", function () {
    if (toggle) {
      light.color = "yellow";
      light.effect(new GlowEffect({ color: "yellow", blurX: 70, blurY: 70 }));
      const copperTexture = new Pic("assets/copperTexture.png").center().sca(1).pos(540,350);
    }
  });

  siliconButt.on("click", function () {
    if (toggle) {
      light.color = "yellow";
      light.effect(new GlowEffect({ color: "lime", blurX: 40, blurY: 40 }));
      const copperTexture = new Pic("assets/siliconTexture.png").center().sca(1).pos(540,350);
    }
  });

  woodButt.on("click", function () {
    if (toggle) {
      light.color = "transparent";
      light.effect(new GlowEffect({ color: "cyan", blurX: 0, blurY: 0 }));
      const copperTexture = new Pic("assets/woodTexture.png").center().sca(1).pos(540,350);
    }
  });


  

}
