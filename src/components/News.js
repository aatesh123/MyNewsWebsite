import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner'
import PropTypes from 'prop-types';
//directly by impt 
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class News extends Component {

// PropTypes syntax  default i guess
  static deafultProps  = {
    country: 'in',
    pageSize : 8 ,
    category: "general"
  }
  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string
  }

  articles=[]
  //capitilizing function
  cFL=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //it is madontary syntax i.e:  constructor function   run before component didmount function props is passed
  constructor(props){
    super(props);
    console.log("hello i am a constructor")
    this.state = {
      articles: this.articles,
      loading: true,
      page:1,
      totalResult: 0
    }
    document.title=`${this.cFL(this.props.category)}`
  }
  async fun(){
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=4df91976ca034fc0ab942a943cb5b9e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})  
     let data= await fetch(url);
     let parsedData= await data.json();
     console.log(parsedData)
     this.setState({
       articles: parsedData.articles,
       totalResult: parsedData.totalResults,
       loading:false})
       this.props.setProgress(100)
  }
  //always run after render function
  async componentDidMount(){
    console.log("componenetdidmount")
    this.fun();
  }
  // handleNext= async ()=>{
  //   this.setState({
  //     page: this.state.page+1
  //   })
  //   this.fun();

  // }
  // handlePre= async ()=>{
  //   this.setState({
  //     page: this.state.page-1
  //   })
  //   this.fun();
    
  // }
  fetchMoreData = async ()=>{
    this.setState({page: this.state.page+1})
      let url=`https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=4df91976ca034fc0ab942a943cb5b9e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true})  
       let data= await fetch(url);
       let parsedData= await data.json();
       console.log(parsedData)
       this.setState({
         articles: this.state.articles.concat(parsedData.articles),
         totalResult: parsedData.totalResults,
        //  loading:false
        })
    
    
  }
  render() {
    return (
      <>
        <h2 className='text-center' style={{margin: '35px 0 px'}}>NewsMonkey - Top headlines on {this.props.category}</h2>
       {this.state.loading && <Spinner />} 
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          // inverse={true} 
          hasMore={this.state.articles.length!== this.state.totalResult}
          loader={<Spinner />}
    // scrollableTarget="scrollableDiv"
  >
        <div className="container">
        <div className="row">
           {/* this is returning <div></div>  in a format key is unique(so url is used)*/}
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 " key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} 
            newsUrl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>

        {/* this section is for flex buttons */}
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePre}>&larr; Previous</button>
        <button  disabled={this.state.page>=Math.ceil(this.state.totalResult/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
   
    
    </>
    )
  }
}

export default News;
