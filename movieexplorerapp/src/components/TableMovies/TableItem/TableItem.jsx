/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const TableItem = ({singleItem}) => {
  const {imdbID, Title, Released, imdbRating} = singleItem
  return (
    <tr className="tableWrapper">
      <td>{imdbID}</td>
      <td><Link to={`/allmovies/${imdbID}`}>{Title}</Link></td>
      <td>{Released}</td>
      <td>
        {imdbRating}
      </td>
    </tr>
  )
}

export default TableItem