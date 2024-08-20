import "./NewsComponent.css";
import { TbExternalLink } from "react-icons/tb";

function NewsComponent(props) {
  let newsTitle = props.title;
  let newsDescription = props.description;
  let newsImage = props.image;
  let newsLink = props.link;

  return (
    <div className="news">
      <div className="news-image-container">
        <img src={newsImage} alt="news" className="news-image" />
      </div>
      <div className="news-content">
        <h1 className="news-title">{newsTitle}</h1>
        <p className="news-description">{newsDescription}</p>
        <div className="news-link">
          <a href={newsLink} target="_blank"> Notícia completa </a>
          <a href={newsLink} target="_blank">
            <TbExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
