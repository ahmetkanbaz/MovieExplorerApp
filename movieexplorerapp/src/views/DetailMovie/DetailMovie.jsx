import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSingleMovie } from "../../utils/request"
import DangerAlert from '../../common/DangerAlert/DangerAlert'
import Loading from '../../common/Loading/Loading'
import DetailMovieImage from "../../components/DetailMovieDatas/DetailMovieImage/DetailMovieImage"
import DetailMovieInfos from "../../components/DetailMovieDatas/DetailMovieInfos/DetailMovieInfos"

const DetailMovie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getSingleMovieDatas = async () => {
    setLoading(true)
    const response = await getSingleMovie(id)
    if (response.message) {
      setError(response.message)
      setLoading(false)
    }
    else {
      setMovie(response)
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleMovieDatas()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <DangerAlert title={error}/>
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <DetailMovieImage poster={movie?.Poster} title={movie?.Title} type={movie?.Type} runTime={movie?.Runtime}/>
          <DetailMovieInfos movie={movie} />
        </div>
      </div>
    </section>
  )
}

export default DetailMovie