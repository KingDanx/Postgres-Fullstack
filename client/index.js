let dataA;
let filteredData;

function generateElement(
  parentEl = document.body,
  type = "div",
  id = "",
  classStr = "",
  content = "",
  attribute = null,
  attributeValue = null,
  attribute2 = null,
  attribute2Value = null
) {
  let el = document.createElement(type);
  el.id = id;
  el.className = classStr;
  el.setAttribute(attribute, attributeValue);
  el.setAttribute(attribute2, attribute2Value);
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
    .then((data) => {
      filteredData = data.filter((el) => el.piosgroup == 65000);
      console.log(filteredData);
      filteredData.map((el, i) =>
        generateElement(
          undefined,
          undefined,
          undefined,
          i % 2 == 0 ? "div-style" : null,
          `${el.name} is part of PIOS group ${el.piosgroup}`
        )
      );
    })
);
