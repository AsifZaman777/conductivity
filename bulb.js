import zim from "https://zimjs.org/cdn/016/zim";

const { Frame, Circle, Button, Label, Rectangle, GlowEffect, Pic } = zim;

let lightOn = false;
let electron;
let lightState = 0;

new Frame(FIT, 1024, 768, "#d1d5e6", "#333", ready, "assets/", new zim.Waiter());

function ready() {

  const path = new Blob({
    color: "transparent",
    borderColor: "red",
    borderWidth: 3,
    showControls: false,
    points: [
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
    ],
  }).center().pos(75, 268);

  const path1 = new Blob({
    color: "transparent",
    borderColor: "red",
    borderWidth: 3,
    showControls: false,
    points: [
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
    ],
  }).center().pos(75, 268);

  const path2 = new Blob({
    color: "transparent",
    borderColor: "red",
    borderWidth: 3,
    showControls: false,
    points: [
      [100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
    ],
  }).center().pos(75, 268);

  const path3 = new Blob({
    color: "transparent",
    borderColor: "red",
    borderWidth: 3,
    showControls: false,
    points: [
      [50, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
    ],
  }).center().pos(75, 268);

  const path4 = new Blob({
    color: "transparent",
    borderColor: "red",
    borderWidth: 3,
    showControls: false,
    points: [
      [0, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
    ],
  }).center().pos(75, 268);

  const path5 = new Blob({
    color: "transparent",
    borderColor: "red",
    borderWidth: 3,
    showControls: false,
    points: [
      [-50, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, 275, 0, 0, 0, 0, 0, 0, "none"],
      [405, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, -100, 0, 0, 0, 0, 0, 0, "none"],
      [-100, 275, 0, 0, 0, 0, 0, 0, "none"],
      [150, 275, 0, 0, 0, 0, 0, 0, "none"],
    ],
  }).center().pos(75, 268);


  const light = new Circle(45, "transparent").center().pos(277, 120);
  const glowCircle = new Circle(30, "yellow").center().pos(455, 615);

  const label = new Label({
    text: "|",
    size: 40,
    backgroundColor: "",
    bold: true,
    color: "white",
  });

  const electron = new Circle(10, "red").pos(315, 632);
  const electron1 = new Circle(10, "red").pos(315, 632);
  const electron2 = new Circle(10, "red").pos(315, 632);
  const electron3 = new Circle(10, "red").pos(315, 632);
  const electron4 = new Circle(10, "red").pos(315, 632);
  const electron5 = new Circle(10, "red").pos(315, 632);
 


  const cirImage = new Pic("assets/cir.png").center().sca(1.6).pos(70, 120);
  const dropSquare = new Rectangle(80, 200, "#d1d5e6", "black")
    .center()
    .pos(540, 350);

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

  switchButton.alpha = 0.01;
  let toggle = false;

  switchButton.on("click", function () {
    toggle = !toggle;
    if (toggle) {
      switchButton.gradient = 0.01;
      switchButton.alpha = 0.01;
      glowCircle.effect(
        new GlowEffect({ color: "yellow", blurX: 80, blurY: 80 })
      );
      toggleLight(true);
    } else {
      switchButton.gradient = 0.01;
      switchButton.alpha = 0.01;
      glowCircle.effect(
        new GlowEffect({ color: "yellow", blurX: 0, blurY: 0 })
      );
      toggleLight(false);
    }
  });

  switchButton.center().pos(456, 614);

  const copperButt = new Pic("assets/copperTexture.png")
    .center()
    .pos(540, 350)
    .drag();

  const copperLabel = new Label({
    text: "তামা",
    size: 20,
    bold: true,
    color: "black",
    vertical: true,
    backgroundColor: "transparent",
  }).center(copperButt).mov(40, 230);

  const siliconButt = new Pic("assets/siliconTexture.png")
    .center()
    .pos(800, 270)
    .drag();

  const siliconLabel = new Label({
    text: "সিলিকন",
    size: 20,
    bold: true,
    color: "black",
    backgroundColor: "transparent",
  }).center(siliconButt).mov(40, 230);

  const woodButt = new Pic("assets/woodTexture.png")
    .center()
    .pos(900, 270)
    .drag();

  const woodLabel = new Label({
    text: "কাঠ",
    size: 20,
    bold: true,
    color: "black",
    backgroundColor: "transparent",
  }).center(woodButt).mov(40, 230);

  function toggleLight(state) {
    lightOn = state;
    lightState = lightOn ? 1 : 0;
    if (lightOn) {
      light.color = "yellow";
      light.effect(new GlowEffect({ color: "yellow", blurX: 130, blurY: 130 }));
    
      electron.animate({
        props: { path: path },
        ease: "linear",
        time: 3,
        loop: true,
      });
      
      electron1.animate({
        props: { path: path1 },
        ease: "linear",
        time: 4,
        loop: true,
      });

      electron2.animate({
        props: { path: path2 },
        ease: "linear",
        time: 5,
        loop: true,
      });

      electron3.animate({
        props: { path: path3 },
        ease: "linear",
        time: 6,
        loop: true,
      });
     
      electron4.animate({
        props: { path: path4 },
        ease: "linear",
        time: 7,
        loop: true,
      });

      electron5.animate({
        props: { path: path5 },
        ease: "linear",
        time: 8,
        loop: true,
      });

    
      
    } else {
      light.color = "transparent";
      light.noEffect();
      electron.pauseAnimate();
      electron1.pauseAnimate();
      electron2.pauseAnimate();
      electron3.pauseAnimate();
      electron4.pauseAnimate();
      electron5.pauseAnimate();
     

    }
  }

  copperButt.on("pressmove", function () {
    if (toggle) {
      if (copperButt.hitTestRect(dropSquare)) {
        light.color = "yellow";
        light.effect(new GlowEffect({ color: "yellow", blurX: 130, blurY: 130 }));

        copperButt.animate({
          target: copperButt,
          props: { x: 540, y: 350 },
          time: 0.5,
          ease: "quadIn",
        });
        woodButt.animate({
          target: woodButt,
          props: { x: 900, y: 270 },
          time: 0.5,
          ease: "quadIn",
        });

        siliconButt.animate({
          target: siliconButt,
          props: { x: 800, y: 270 },
          time: 0.5,
          ease: "quadIn",
        });
        
        electron.animate({
          props: { path: path },
          ease: "linear",
          time: 3,
          loop: true,
        });
        
        electron1.animate({
          props: { path: path1 },
          ease: "linear",
          time: 4,
          loop: true,
        });
  
        electron2.animate({
          props: { path: path2 },
          ease: "linear",
          time: 5,
          loop: true,
        });
  
        electron3.animate({
          props: { path: path3 },
          ease: "linear",
          time: 6,
          loop: true,
        });
       
        electron4.animate({
          props: { path: path4 },
          ease: "linear",
          time: 7,
          loop: true,
        });
  
        electron5.animate({
          props: { path: path5 },
          ease: "linear",
          time: 8,
          loop: true,
        });
  
    

      } else {
        light.color = "transparent";
        light.noEffect();
      }
    }
  });

  siliconButt.on("pressmove", function () {
    if (toggle) {
      if (siliconButt.hitTestRect(dropSquare)) {
        light.color = "yellow";
        light.effect(new GlowEffect({ color: "lime", blurX: 30, blurY: 30 }));

        copperButt.animate({
          props: { x: 800, y: 270 },
          time: 0.5,
          ease: "quadIn",
        });

        woodButt.animate({
          props: { x: 900, y: 270 },
          time: 0.5,
          ease: "quadIn",
        });

        siliconButt.animate({
          props: { x: 540, y: 350 },
          time: 0.5,
          ease: "quadIn",
        });

        
        electron.pauseAnimate();
        electron1.pauseAnimate();
        electron2.pauseAnimate();

        electron3.animate({
          props: { path: path3 },
          ease: "linear",
          time: 6,
          loop: true,
        });
       
        electron4.animate({
          props: { path: path4 },
          ease: "linear",
          time: 7,
          loop: true,
        });
  
        electron5.animate({
          props: { path: path5 },
          ease: "linear",
          time: 8,
          loop: true,
        });
        
      } else {
        light.color = "transparent";
        light.noEffect();
       
      }
    }
  });

  woodButt.on("pressmove", function () {
    if (toggle) {
      if (woodButt.hitTestRect(dropSquare)) {
        light.color = "transparent";
        light.effect(new GlowEffect({ color: "cyan", blurX: 0, blurY: 0 }));

        copperButt.animate({
          props: { x: 900, y: 270 },
          time: 0.5,
          ease: "quadIn",
        });

        siliconButt.animate({
          props: { x: 800, y: 270 },
          time: 0.5,
          ease: "quadIn",
        });

        woodButt.animate({
          props: { x: 540, y: 350 },
          time: 0.5,
          ease: "quadIn",
        });

        electron.pauseAnimate();
        electron1.pauseAnimate();
        electron2.pauseAnimate();
        electron3.pauseAnimate();
        electron4.pauseAnimate();
        electron5.pauseAnimate();
      } else {
        light.color = "transparent";
        light.noEffect();
      }
    }
  });
}
