import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Circle, Button, Label, Rectangle } = zim;

let lightOn = false; // Variable to track the state of the light

new Frame(FIT, 1024, 768, "#8c8c8c", "#333", ready, "image.png", "assets/", new zim.Waiter());

function ready() {
  const wire = new Rectangle(300, 400, "transparent", "#B87333", 4).center();
  wire.pos(200, 270);
  const light = new Circle(100, "yellow").center(); // Increased light size
  const square = new Rectangle(120, 60, "lightgray").center();
  const baseSquare = new Rectangle(60, 120, "red").center().pos(330,600);
  square.pos(290, 230);

  // Add a square with a transparent inner side and a black border
  
  light.pos(250, 50);
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
    } else {
      switchButton.gradient = 0.3;
      switchButton.alpha = 0.5;
    }
  });

  // Position the button at the bottom
  switchButton.center();
  switchButton.pos(330,600);

  // Event listener for the button click
  switchButton.on("click", toggleLight);

  // Function to toggle the light on and off
  function toggleLight() {
    lightOn = !lightOn; // Toggle the state
    light.color = lightOn ? "yellow" : "cyan"; // Change the light color
  }
 
  
  
 
}
