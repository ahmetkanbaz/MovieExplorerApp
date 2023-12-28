import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import AllMovies from '../views/AllMovies/AllMovies'

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/allmovies', element: <AllMovies />}
  ])
  return routes
}

export default Router