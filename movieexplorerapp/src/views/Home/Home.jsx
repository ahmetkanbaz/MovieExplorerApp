import AboutMovies from "../../components/AboutMovies/AboutMovies";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import NotableAuthors from "../../components/NotableAuthors/NotableAuthors";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AboutMovies />
      <NotableAuthors />
    </>
  );
};

export default Home;
