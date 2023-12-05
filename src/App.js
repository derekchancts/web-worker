// // App.js
// import React, { useEffect } from 'react';
// import worker from './worker'; // Import the web worker file

// function App() {
//   useEffect(() => {
//     // Create a new Worker instance
//     const myWorker = new Worker(worker);

//     // Send a message to the web worker
//     myWorker.postMessage(5);

//     // Receive messages from the web worker
//     myWorker.addEventListener('message', (event) => {
//       console.log('Web worker result:', event.data);
//       // console.log("🚀 ~ file: App.js:16 ~ myWorker.addEventListener ~ data:", event.data)
//     });

//     // Cleanup the web worker when the component unmounts
//     return () => myWorker.terminate();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Create React App with Web Worker</h1>
//     </div>
//   );
// }

// export default App;



// App.js
import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./fib-worker'; // Import the web worker file

function App() {
  useEffect(() => {
    // Create a new Worker instance
    const myWorker = new Worker();

    // Send a message to the web worker
    myWorker.postMessage(50);

    // Receive messages from the web worker
    myWorker.addEventListener('message', (event) => {
      console.log('Web worker result:', event.data);
    });

    // Cleanup the web worker when the component unmounts
    return () => myWorker.terminate();
  }, []);

  return (
    <div className="App">
      <h1>Create React App with Web Worker</h1>
    </div>
  );
}

export default App;
