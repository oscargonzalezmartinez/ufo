import { Universe } from "./model/universe";
import { Keyboard } from './util/keyboard';


let canvas: HTMLCanvasElement = document.getElementById("canvas-game") as HTMLCanvasElement;
canvas.width = window.innerWidth - 150;
Universe.newInstance(canvas.getContext("2d"),new Keyboard,canvas.width,canvas.height).start();