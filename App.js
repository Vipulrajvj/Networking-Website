import React from 'react';
import './App.css';
import Header from './Header';

// step 1 delete everything in App() when starting from start header to end header
//Step 3 create JS files for header sidebars get in the flowstate 
//Step 6 after creating header , render here
function App() {
  return (
    <div className="App">
      {/* Header of the Page */}
      <Header/>   
      {/* importing the header componenet here */}
      </div>
  );
}

export default App;
