import PropTypes from "prop-types";

const DetailMovieImage = ({ poster, title, type, runTime }) => {
  return (
    <div className="col-md-4 col-12">
      {poster && (
        <div className="d-flex align-items-center">
          <img src={poster} alt={title} className="img-fluid w-100 rounded-2" />
        </div>
      )}
      <div className="d-flex justify-content-between mt-4">
        {type && (
          <div>Türü:
            {type == 'movie' && (<span className="text-capitalize bg-info rounded py-2 px-4 ms-2">{type}</span>)}
            {type == 'series' && (<span className="text-capitalize bg-success rounded py-2 px-4 ms-2">{type}</span>)}
            {type == 'episode' && (<span className="text-capitalize bg-danger rounded py-2 px-4 ms-2">{type}</span>)}
          </div>
        )}
        {runTime && (
          <div>Süresi:
            <span className="bg-secondary rounded py-2 px-4 ms-2">{runTime}</span>
          </div>
        )}
      </div>
    </div>
  );
};

DetailMovieImage.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  runTime: PropTypes.string
};

export default DetailMovieImage;
