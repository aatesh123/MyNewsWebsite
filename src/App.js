
import './App.css';
// rcc to create react class based component
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return <div>
      <Navbar/>
      <Router>
      {/* <News  pageSize={6} country="in" category="science" /> */}
      <Routes>
       <Route path="/" element={ <News  pageSize={6} country="in" category="general" />} /> 
       <Route path="/business" element={ <News  pageSize={6} country="in" category="business" />} />
       <Route path="/entertainment" element={ <News  pageSize={6} country="in" category="entertainment" />} />
       {/* <Route path="/general" element={ <News  pageSize={6} country="in" category="science" />} /> */}
       <Route path="/health" element={ <News  pageSize={6} country="in" category="health" />} />
       <Route path="/science" element={ <News  pageSize={6} country="in" category="science" />} />
       <Route path="/sports" element={ <News  pageSize={6} country="in" category="sports" />} />
       <Route path="/technology" element={ <News  pageSize={6} country="in" category="technology" />} />

      </Routes>
      </Router>
    </div>;
  }
}



