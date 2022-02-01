
import './App.css';
// rcc to create react class based component
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default class App extends Component {

  state ={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return <div>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Router>
      <Routes>
       <Route path="/" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="general" />} /> 
       <Route path="/business" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="business" />} />
       <Route path="/entertainment" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="entertainment" />} />
       <Route path="/health" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="health" />} />
       <Route path="/science" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="science" />} />
       <Route path="/sports" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="sports" />} />
       <Route path="/technology" element={ <News setProgress={this.setProgress}  pageSize={6} country="in" category="technology" />} />

      </Routes>
      </Router>
    </div>;
  }
}



