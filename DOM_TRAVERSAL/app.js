function traverseDOM(element, callback) {
  callback(element);

  for (let child of element.children) {
    traverseDOM(child, callback);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  traverseDOM(container, function (element) {
    console.log('Visited element:', element);
  });
});
