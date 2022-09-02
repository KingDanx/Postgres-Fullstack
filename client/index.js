let dataA;

function generateElement(
  parentEl = document.body,
  type = "div",
  id = "",
  classStr = "",
  content = ""
) {
  let el = document.createElement(type);
  el.id = id;
  el.className = classStr;
  if (typeof content == "string") el.innerHTML = content;
  else if (typeof content == "object") el.appendChild(content);
  if (isDefined(parentEl)) parentEl.appendChild(el);
  return el;
}
function isDefined(obj) {
  return obj !== undefined && obj != null;
}

fetch("http://localhost:5050/").then((data) =>
  data.text().then((text) => console.log(text))
);

fetch("http://localhost:5050/postgres").then((data) =>
  data
    .json()
    //.then((data) => document.getElementById('body').innerHTML = data))
    .then((data)=> data.map((el)=> generateElement(document.body, "div", "body", "", el.name))))

    

