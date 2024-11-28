import React from "react";
import photo from '../assets/images/p2.jpeg'

const NewsItems = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    //const fallbackImageUrl = "https://www.google.com/imgres?q=only%20for%20news%20image&imgurl=https%3A%2F%2Fwww.newsclick.in%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fresponsive_885%2Fpublic%2F2023-08%2Fnews.png%3Fitok%3DQk0c8job&imgrefurl=https%3A%2F%2Fwww.newsclick.in%2Fnegative-news-new-spin-control-media&docid=mwtSMvoYRQN3IM&tbnid=-1zzcGe2PodQHM&vet=12ahUKEwjNjOqb0amIAxWQSmwGHVRGKEgQM3oECFoQAA..i&w=885&h=498&hcb=2&ved=2ahUKEwjNjOqb0amIAxWQSmwGHVRGKEgQM3oECFoQAA"; // Fallback image URL
    return (
      <div className="my-3">
        <div className="card shadow-lg  bg-body rounded">
          <span className="position-absolute top-0translate-middle badge rounded-pill bg-danger" >
          {source}
          </span>
          <img
            src={imageUrl || photo} // Use fallback image if imageUrl is missing
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown" :author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
