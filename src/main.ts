const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace(): SVGSVGElement {
  const face = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );

  // The prototype grew inline. Keep it this way until the refactoring checkpoint.
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "A neutral face");

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const smirk = document.createElementNS("http://www.w3.org/2000/svg", "path");
  smirk.setAttribute("d", "M 72 135 Q 100 150 128 127");
  smirk.setAttribute("fill", "none");
  smirk.setAttribute("stroke", "#302c29");
  smirk.setAttribute("stroke-width", "4");
  smirk.setAttribute("stroke-linecap", "round");
  face.append(smirk);

portrait.append(face);

//creating a gradient
const Gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
Gradient.setAttribute("id", "Gradient");
Gradient.setAttribute("x1", "0%");
Gradient.setAttribute("x2", "0%");
Gradient.setAttribute("y1", "0%");
Gradient.setAttribute("y2", "100%");

const blue_gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
blue_gradient.setAttribute("offset", "0%");
blue_gradient.setAttribute("stop-color", "#2563EB");

const green_gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
green_gradient.setAttribute("offset", "100%");
green_gradient.setAttribute("stop-color", "#9fe2bf");

Gradient.append(blue_gradient, green_gradient);

const defs = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "defs",
);
defs.append(Gradient);
face.append(defs);

//create rectangle with gradient to take place of background
const background = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect",
);
background.setAttribute("x", "0");
background.setAttribute("y", "0");
background.setAttribute("width", "200");
background.setAttribute("height", "200");
background.setAttribute("fill", "url(#Gradient");
face.prepend(background);

}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
