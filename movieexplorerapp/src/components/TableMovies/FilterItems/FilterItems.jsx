/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { getMovies } from "../../../utils/request";

const FilterItems = ({
  type,
  setType,
  search,
  setSearch,
  year,
  setYear,
  currentPage,
}) => {
  const dispatch = useDispatch();
  const handleGetMovies = () => {
    dispatch(getMovies(search, type, year, currentPage));
  };
  return (
    <div className="py-3 row align-items-center">
      <div className="col-md-4 col-12">
        <p className="mb-0">Türü</p>
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="movie"
              id="movie"
              onChange={(e) => setType(e.target.id)}
              checked={type == "movie"}
            />
            <label className="form-check-label" htmlFor="movie">
              Film
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="series"
              id="series"
              onChange={(e) => setType(e.target.id)}
              checked={type == "series"}
            />
            <label className="form-check-label" htmlFor="series">
              Dizi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="episode"
              id="episode"
              onChange={(e) => setType(e.target.id)}
              checked={type == "episode"}
            />
            <label className="form-check-label" htmlFor="episode">
              Bölüm
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-12 mt-md-0 mt-4">
        <div className="d-flex align-items-center gap-3">
          <div className="w-100">
            <label htmlFor="search">Film Adı</label>
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              placeholder="Filmin adını giriniz..."
            />
          </div>
          <div className="w-100">
            <label htmlFor="year">Filmin Yılı</label>
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-control w-100"
              placeholder="Filmin yılını giriniz..."
            />
          </div>
          <button
            onClick={() => handleGetMovies()}
            className="btn btn-info px-5 align-self-end"
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
