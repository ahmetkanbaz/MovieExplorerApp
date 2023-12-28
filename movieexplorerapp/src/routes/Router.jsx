import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import AllMovies from '../views/AllMovies/AllMovies'
import DetailMovie from '../views/DetailMovie/DetailMovie'

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/allmovies', element: <AllMovies />},
    {path: '/allmovies/:id', element: <DetailMovie />}
  ])
  return routes
}

export default Router