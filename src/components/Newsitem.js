import React, { Component } from 'react';

export class Newsitem extends Component {

  render() {
      let {title, description,imageUrl,newsUrl,author,date,source} =this.props
    return(
      // this card from getbootstrap
     <div className='my-3 mt-5'>
         <div className="card" >
            <img src={!imageUrl?'https://www.techexplorist.com/wp-content/uploads/2022/01/NGC-7764A.jpg':imageUrl} style={{height: "250px"}} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"  style={{left: '90%', zIndex: '1'}}>
                   {source}
                    </span>
            </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read Full News</a>
            </div>
            </div>
    </div>
    )
  }
}

export default Newsitem;
