import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Circle, Button, Label, Rectangle, GlowEffect, Pic,Ticker } = zim;

let lightOn = false; // Variable to track the state of the light
let electron; // Variable to store the electron display object
let electronTicker; // Variable to store the Ticker listener
let lightState = 0; // Variable to track the state of the light (0 for off, 1 for on)

new Frame(
  FIT,
  1024,
  768,
  "#8c8c8c",
  "#333",
  ready,
  "assets/",
  new zim.Waiter()
);

function ready() {
  const wire = new Rectangle(500, 400, "transparent", "#B87333", 4).center().pos(80, 265);

  const light = new Circle(100, "cyan").center().pos(250, 50); // Increased light size
  const square = new Rectangle(120, 60, "lightgray").center();
  const baseSquare = new Rectangle(60, 120, "red").center().pos(50, 400);
  square.pos(290, 230);

  // Add a square with a transparent inner side and a black border

  const label = new Label({
    text: "|",
    size: 40,
    backgroundColor: "",
    bold: true,
    color: "white",
  });

  // Switch
  const switchButton = new Button({
    label: label,
    width: 60,
    height: 120,
    backgroundColor: "red",
    rollBackgroundColor: "red",
    borderWidth: 8,
    borderColor: "white",
    gradient: 0.3,
    corner: 0,
  });

  // Switch alpha control
  // Init opacity
  switchButton.alpha = 0.5;
  let toggle = false;
  switchButton.on("click", function () {
    toggle = !toggle;
    if (toggle) {
      switchButton.gradient = 0.6;
      switchButton.alpha = 1;
      toggleLight(true);
    } else {
      switchButton.gradient = 0.3;
      switchButton.alpha = 0.5;
      toggleLight(false);
    }
  });

  // Position the button at the bottom
  switchButton.center();
  switchButton.pos(50, 400);

  // Event listener for the button click
  function toggleLight(state) {
    lightOn = state;
    lightState = lightOn ? 1 : 0; // Update lightState accordingly
    if (lightOn) {
      light.color = "yellow";
      light.effect(new GlowEffect({ color: "yellow", blurX: 300, blurY: 300 }));
      moveElectron();
    } else {
      light.color = "cyan";
      light.noEffect();
      stopElectron();
    }
  }


  electron = new Circle(10, "red").center().pos(445, 655);
  const batteryImage = new Pic("assets/Battery.png").center().pos(210, 632);

  function moveElectron() {
    electronTicker = Ticker.add(() => {
      if (lightState === 1) {
        electron.x += 2;
        if (electron.x > wire.x + wire.width) {
          electron.x = wire.x;
        }
      }
    });
  }

 

  function stopElectron() {
    zim.Ticker.remove(electronTicker);
  }
}
