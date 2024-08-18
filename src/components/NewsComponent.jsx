import "./NewsComponent.css";

function NewsComponent(props) {
  let newsTitle = props.title;
  let newsDescription = props.description;
  let newsImage = props.image;

  return (
    <div className="news">
      <div className="news-image-container">
        <img src={newsImage} alt="news" className="news-image" />
      </div>
      <div className="news-content">
        <h1 className="news-title">{newsTitle}</h1>
        <p className="news-description">{newsDescription}</p>
      </div>
    </div>
  );
}

export default NewsComponent;
