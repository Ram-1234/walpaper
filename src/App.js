import React from 'react';
import Apps from './components/Apps';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
       <Apps/>
     </Router>
    </>
  );
}

export default App;
