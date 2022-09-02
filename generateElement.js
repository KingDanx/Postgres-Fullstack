//General use function for creating a DOM element
function generateElement(parentEl=document.body, type="div", id="", classStr="", content="")
{
    let el = document.createElement(type);
    el.id = id;
    el.className = classStr;
    if(typeof(content) == "string") el.innerHTML = content;
    else if(typeof(content) == "object") el.appendChild(content);
    if(isDefined(parentEl)) parentEl.appendChild(el);
    return el;
}
function isDefined(obj) {
    return obj !== undefined && obj != null;
}

module.exports = {
    generateElement,
    isDefined
}