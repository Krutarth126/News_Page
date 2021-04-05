import Link from "next/link";
import News from "../pages/[id]";

const Article = ({ heading, subheading, url, content, id, idx }) => {
  return (
    <>
      <div>
        <div className="card mt-3" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={url}
            alt="Card image cap"
            className="imgg"
          />
          <div className="card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{subheading}</p>
            <Link href={"/" + id}>
              <a className="btn btn-primary">Read more</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
