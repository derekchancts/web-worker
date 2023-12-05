/* eslint-disable no-restricted-globals */
self.addEventListener('message', (event) => {
  const data = event.data;

  // Perform some computation or task
  const result = data * 2;

  // Send the result back to the main thread
  self.postMessage(result);
});