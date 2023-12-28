import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getMovies } from "./utils/request";

function App() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies)

  useEffect(() => {
    if (!movies.length) {
      getMovies()
    }
  }, [])
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
