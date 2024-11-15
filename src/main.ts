import { isKeyDown } from "./keyboard-input";
import "./style.css";

const root = document.getElementById("root") as HTMLDivElement;
root.innerHTML = `
  <canvas id="app"/>
`;

let width = -1;
let height = -1;

const canvas = document.getElementById("app") as HTMLCanvasElement;

const gameAspectRatio = 16 / 10;

function handleCanvasAspectRatio() {
  if (width === root.clientWidth && height === root.clientHeight) {
    return;
  }

  width = root.clientWidth;
  height = root.clientHeight;

  const windowAspectRatio = width / height;

  if (windowAspectRatio >= gameAspectRatio) {
    Object.assign(canvas.style, {
      width: `${height * gameAspectRatio}px`,
      height: `${height}px`,
    } as CSSStyleDeclaration);
  } else {
    Object.assign(canvas.style, {
      width: `${width}px`,
      height: `${width / gameAspectRatio}px`,
    } as CSSStyleDeclaration);
  }
}

function gameLoop() {
  console.log("render");
  handleCanvasAspectRatio();
  const isHDown = isKeyDown("h");
  if (isHDown) {
    console.log("H IS DOWN");
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
