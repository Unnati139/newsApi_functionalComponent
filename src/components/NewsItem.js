import React from "react";

const NewsItem = (props) => {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display:"flex", justifyContent:"flex-end",position:"absolute",right:"0"}}>
        <span class=" badge rounded-pill bg-danger">{source}</span>

        </div>
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/106972429-16364108192021-11-08t215634z_1516855190_rc2jqq9dbnhe_rtrmadp_0_usa-stocks.jpeg?v=1636410879&w=1920&h=1080"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              without
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default NewsItem;
