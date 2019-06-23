function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  let elements = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < elements.length; i++) {
    let value = parseInt(elements[i].innerHTML);
    elements[i].innerHTML = (value + n).toString();
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  let latestNode = function lastesChild(node) {
    let childNode = node.firstElementChild();
    if (childNode == null) {
      return node;
    }
    lastedChild(childNode);
  }

}
