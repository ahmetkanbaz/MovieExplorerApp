import PropTypes from "prop-types";
import Loading from "../../../../common/Loading/Loading";
import ListItem from "./ListItem/ListItem";

const DetailGenreActors = ({ actors, genre }) => {
  if (!actors || !genre) {
    return <Loading />;
  }

  const actorsSplit = actors.split(",");
  const genreSplit = genre.split(",");

  return (
    <div className="my-3 d-flex justify-content-evenly">
      {actors && (
        <div>
          <h5 className="fw-bold mb-3">Oyuncular</h5>
          <ListItem split={actorsSplit} />
        </div>
      )}
      {genre && (
        <div>
          <h5 className="fw-bold mb-3">Film Türü</h5>
          <ListItem split={genreSplit} />
        </div>
      )}
    </div>
  );
};

DetailGenreActors.propTypes = {
  actors: PropTypes.string,
  genre: PropTypes.string,
};

export default DetailGenreActors;
