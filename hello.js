import { startCase } from "fakelodash";

const el = document.createElement("h1");
const words = "hello, world! have a great day ";
const text = document.createTextNode(startCase(words));
el.appendChild(text);

document.body.appendChild(el);
