/* eslint-disable react/prop-types */
import './tableItem.scss'

const TableItem = ({singleItem}) => {
  const {imdbID, Title, Released, imdbRating} = singleItem
  return (
    <tr className="tableWrapper">
      <td>{imdbID}</td>
      <td>{Title}</td>
      <td>{Released}</td>
      <td>
        {imdbRating}
      </td>
    </tr>
  )
}

export default TableItem