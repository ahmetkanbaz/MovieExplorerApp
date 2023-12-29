import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination/Pagination";
import TableItem from "./TableItem/TableItem";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading/Loading";
import DangerAlert from "../../common/DangerAlert/DangerAlert";
import { getMovies } from "../../utils/request";
import FilterItems from "./FilterItems/FilterItems";

const TableMovies = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [search, setSearch] = useState("Pokemon");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    dispatch(getMovies(search, type, year, currentPage));
  }, [type, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

        <FilterItems
          type={type}
          setType={setType}
          search={search}
          setSearch={setSearch}
          year={year}
          setYear={setYear}
          currentPage={currentPage}
        />

        {movies?.Response == "False" ? (
          <DangerAlert title={movies?.Error} />
        ) : (
          <>
            <div className="overflow-x-auto mt-4">
              <table className={"table table-striped table-hover w-100"}>
                {movies?.totalResults && (
                  <caption>
                    Tabloda toplam {movies?.totalResults} adet veri bulunmaktadır.
                  </caption>
                )}
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
                    <TableItem
                      key={singleItem.imdbID}
                      singleItem={singleItem}
                    />
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
        )}
      </div>
    </section>
  );
};

export default TableMovies;
