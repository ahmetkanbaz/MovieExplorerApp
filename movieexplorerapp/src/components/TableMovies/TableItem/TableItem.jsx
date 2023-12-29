/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const TableItem = ({singleItem}) => {
  const {imdbID, Title, Released, Year, Type} = singleItem
  return (
    <tr className="tableWrapper">
      <td>{imdbID}</td>
      <td><Link to={`/allmovies/${imdbID}`}>{Title}</Link></td>
      <td>{Released ? Released : Year}</td>
      <td className='text-capitalize'>
        {Type}
      </td>
    </tr>
  )
}

export default TableItem