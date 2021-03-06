function getJoke() {

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
    const container = document.getElementById('joke-data');
    const url = 'http://api.icndb.com/jokes/random';;
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let joke = data.value.joke;
      let span = createNode('span');
      span.innerHTML = `Special joke for you: ${joke}`;
      if (container.hasChildNodes() === true) {
        container.replaceChild(span, container.childNodes[0]);
      } else {
        append(container, span)
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

