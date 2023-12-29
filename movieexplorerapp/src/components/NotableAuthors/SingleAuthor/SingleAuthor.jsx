import PropTypes from "prop-types";

const SingleAuthor = ({ author }) => {
  const { imageUrl, authorName, webSite } = author;
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <a href={webSite} target="_blank" rel="noreferrer" className="d-flex flex-column align-items-center">
        <img src={imageUrl} className="w-75 rounded" alt={authorName} />
        <h5 className="text-center mt-3">{authorName}</h5>
      </a>
    </div>
  );
};

SingleAuthor.propTypes = {
  author: PropTypes.object,
};

export default SingleAuthor;
