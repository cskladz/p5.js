// function setup() {
//   // put setup code here
// }

// function draw() {
//   // put drawing code here
//   ellipse(100,100,80,80);
// }

// var of;

// function setup() {
//     createCanvas(400, 400);
//     var t =
//     {
//         name: "test",
//         colors: ["blue","green","red"],
//         lifetime: 300,
//         angle: [260,280],
//         size: [2,8],
//         speed: 2,
//         speedx: 0.7,
//         //40 at .1 probability/step
//         //then 200 steps at 10 particles/step
//         rate: [40,0.1,200,10],
//         x: 0.5,
//         y: 0.8
//     };
//     of = new Fountain(null, t);
// }

// function draw() {
//   background(51);
//   of.Draw();
//   of.CreateN();  //must use CreateN for "rate" control
//   of.Step();
//   noStroke();
//   text(of.length, width/2, 20);
//   stroke(0);
// }
var of;

function setup() {
    createCanvas(400, 400);
    var t =
    {
        name: "test",
        colors: ["blue",[0,255,127,127],[0,255,64,32]],
        lifetime: 588,
        angle: [330,360],
        x: 0.2,
        y: 0.1
    };
    of = new Fountain(null, t);
}

function draw() {
  background(255);
  of.Draw();
  of.Create();
  of.Step();
  noStroke();
  text(of.length, width/2, 20);
  stroke(0);
}
