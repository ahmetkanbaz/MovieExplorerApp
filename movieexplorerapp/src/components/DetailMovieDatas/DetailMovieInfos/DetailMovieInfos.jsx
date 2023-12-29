import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import DetailGenreActors from "./DetailGenreActors/DetailGenreActors";
import DetailDirectorWriter from "./DetailDirectorWriter/DetailDirectorWriter";
import DetailLanguageCountry from "./DetailLanguageCountry/DetailLanguageCountry";

const DetailMovieInfos = ({ movie }) => {
  const {
    Released,
    Title,
    Director,
    Language,
    Country,
    Actors,
    Genre,
    Plot,
    Writer,
    imdbRating,
  } = movie || {};
  return (
    <div className="col-md-8 col-12 mt-md-0 mt-4">
      {Released && (
        <p className="text-end fst-italic">
          Yayınlanma Tarihi: <span className="ms-1">{Released}</span>
        </p>
      )}
      {Title && <h2 className="text-center display-4 fw-normal">{Title}</h2>}

      {Plot && <p className="my-3">{Plot}</p>}

      {(Actors || Genre) && <DetailGenreActors actors={Actors} genre={Genre} />}

      {imdbRating && (
        <div className="py-3 d-flex justify-content-end">
          <span className="fs-4 align-self-end">Puanı:</span>
          <span className="display-6 ms-2 me-1 fst-italic">{imdbRating}</span>
          <FaStar className="text-warning align-self-start mt-1" />
        </div>
      )}

      {(Director || Writer) && (
        <DetailDirectorWriter director={Director} writer={Writer} />
      )}

      {(Language || Country) && (
        <DetailLanguageCountry language={Language} country={Country} />
      )}
    </div>
  );
};

DetailMovieInfos.propTypes = {
  movie: PropTypes.object,
};

export default DetailMovieInfos;
