import PropTypes from "prop-types";

const DetailDirectorWriter = ({ director, writer }) => {
  return (
    <div className="py-3 border-top">
      {director && (
        <div>
          <p>Yönetmen: <span className="fs-4 fst-italic">{director}</span></p>
        </div>
      )}

      {writer && (
        <div>
          <p>Yazar: <span className="fs-4 fst-italic">{writer}</span></p>
        </div>
      )}
    </div>
  );
};

DetailDirectorWriter.propTypes = {
  director: PropTypes.string,
  writer: PropTypes.string,
};

export default DetailDirectorWriter;
