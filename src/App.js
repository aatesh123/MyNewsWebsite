
import './App.css';
// rcc to create react class based component
import React, {  useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  
 
    return <div>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Router>
      <Routes>
       <Route path="/" element={ <News setProgress={setProgress}  apiKey={apiKey}  pageSize={6} country="in" category="general" />} /> 
       <Route path="/business" element={ <News setProgress={setProgress}  apiKey={apiKey}  pageSize={6} country="in" category="business" />} />
       <Route path="/entertainment" element={ <News setProgress={setProgress}  apiKey={apiKey} pageSize={6} country="in" category="entertainment" />} />
       <Route path="/health" element={ <News setProgress={setProgress}  apiKey={apiKey}  pageSize={6} country="in" category="health" />} />
       <Route path="/science" element={ <News setProgress={setProgress}  apiKey={apiKey} pageSize={6} country="in" category="science" />} />
       <Route path="/sports" element={ <News setProgress={setProgress}  apiKey={apiKey}  pageSize={6} country="in" category="sports" />} />
       <Route path="/technology" element={ <News setProgress={setProgress}  apiKey={apiKey} pageSize={6} country="in" category="technology" />} />

      </Routes>
      </Router>
    </div>;
  
}


export default App;



