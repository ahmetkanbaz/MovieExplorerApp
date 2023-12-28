import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import TableItem from "./TableItem/TableItem";

const TableMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const sortedCourses = [...allCourses].sort((a, b) => {
  //   return new Date(b.courseStartDate) - new Date(a.courseStartDate);
  // });

  // const visibleCourses = sortedCourses.slice(startIndex, endIndex);

  const singleItem = {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.6/10" },
      { Source: "Rotten Tomatoes", Value: "85%" },
      { Source: "Metacritic", Value: "67/100" },
    ],
    Metascore: "67",
    imdbRating: "7.6",
    imdbVotes: "741,862",
    imdbID: "tt3896198",
    Type: "movie",
    DVD: "10 Jul 2017",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <section className="py-5">
      <div className="container">
        <div className="py-3">
          <h2>Filmler</h2>
        </div>

        <>
          <div className="overflow-x-auto mt-4">
            <table className={"table table-striped table-hover w-100"}>
              <thead>
                <tr>
                  <th>Imdb ID</th>
                  <th>Başlık</th>
                  <th>Yayınlandığı Tarih</th>
                  <th>Imdb Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* {visibleNews.map((singleItem) => ( */}
                <TableItem
                  // key={singleItem.imdbID}
                  singleItem={singleItem}
                />
                {/* // ))} */}
              </tbody>
            </table>
          </div>
          <Pagination
            // datas={selectedNews}
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
