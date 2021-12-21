import React from "react";

function SportsNewsItem({ title, description,image,moreNews,color }) {
  return (
    <div>
      <div className="card" style={{width: "18rem" ,backgroundColor:color}}>
      <img src={image} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
          {description}....
          </p>
          <a href={moreNews} className="btn btn-primary">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default SportsNewsItem;
