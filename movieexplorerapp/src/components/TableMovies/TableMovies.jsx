import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination/Pagination";
import TableItem from "./TableItem/TableItem";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading/Loading";
import DangerAlert from "../../common/DangerAlert/DangerAlert";
import { getMovies } from "../../utils/request";

const TableMovies = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [search, setSearch] = useState("Pokemon");
  const [year, setYear] = useState('');

  useEffect(() => {
    dispatch(getMovies(search, year, currentPage))
  }, [currentPage])

  console.log(movies);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleGetMovies = () => {
    dispatch(getMovies(search, year, currentPage))
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <DangerAlert title={error} />;
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="py-3">
          <h2>Filmler</h2>
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button onClick={() => handleGetMovies()}>
            Ara
          </button>
        </div>

        <>
          <div className="overflow-x-auto mt-4">
            <table className={"table table-striped table-hover w-100"}>
              <thead>
                <tr>
                  <th>Imdb ID</th>
                  <th>Başlık</th>
                  <th>Yayınlandığı Tarih</th>
                  <th>Türü</th>
                </tr>
              </thead>
              <tbody>
                {movies.Search?.map((singleItem) => (
                  <TableItem key={singleItem.imdbID} singleItem={singleItem} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalResults={movies?.totalResults}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />
        </>
      </div>
    </section>
  );
};

export default TableMovies;