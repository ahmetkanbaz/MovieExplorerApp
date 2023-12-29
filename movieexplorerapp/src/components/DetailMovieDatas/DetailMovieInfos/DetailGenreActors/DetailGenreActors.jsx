import PropTypes from "prop-types";
import Loading from "../../../../common/Loading/Loading";
import ListItem from "./ListItem/ListItem";

const DetailGenreActors = ({ actors, genre }) => {
  if (
    typeof actors !== "string" ||
    actors.trim() === "" ||
    typeof genre !== "string" ||
    genre.trim() === ""
  ) {
    return <Loading />;
  }
  const actorsSplit = actors.split(",");
  const genreSplit = genre.split(",");
  
  return (
    <div className="my-3 d-flex align-items-center justify-content-evenly">
      {actors && (
        <div className="">
          <ListItem title="Oyuncular" split={actorsSplit} />
        </div>
      )}
      {genre && (
        <div className="">
          <ListItem title="Film Türü" split={genreSplit} />
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
