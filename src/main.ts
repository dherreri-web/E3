const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

//image imports
//image taken from website:https://freesvg.org/eye-silhouette, image under the public domain, published by OpenClipart
import eye1 from "./assets/eye1.png?no-online";
//image taken from website:https://www.needpix.com/photo/download/970142/eye-computer-icon-vector-focus-concept-looking-at-view-optometry-eyeball-symbol-human-eye, image in the public domain, uploaded by mohamed_hassan
import eye2 from "./assets/eye2.png?no-online";

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A neutral face with two eyes taken from different images",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

//add left and right eyes to face
const eye1img = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
eye1img.setAttribute("href", eye1);
eye1img.setAttribute("x", "50");
eye1img.setAttribute("y", "60");
eye1img.setAttribute("width", "40");
eye1img.setAttribute("height", "40");
face.append(eye1img);

const eye2img = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
eye2img.setAttribute("href", eye2);
eye2img.setAttribute("x", "110");
eye2img.setAttribute("y", "60");
eye2img.setAttribute("width", "43");
eye2img.setAttribute("height", "43");
face.append(eye2img);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
