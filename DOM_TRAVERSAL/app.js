function traverseDOM(element, callback) {
  // Call the callback function on the current element
  callback(element);

  // Recursively traverse all child elements
  for (let child of element.children) {
    traverseDOM(child, callback);
  }
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  traverseDOM(container, function (element) {
    console.log('Visited element:', element);
  });
});
