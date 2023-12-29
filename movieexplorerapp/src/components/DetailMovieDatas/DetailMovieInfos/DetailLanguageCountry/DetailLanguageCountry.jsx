import PropTypes from 'prop-types'

const DetailLanguageCountry = ({language, country}) => {
  return (
    <div className="py-4">
      <div className="border p-3 rounded shadow">
        <div className="d-flex justify-content-between">
          <div>
            <p className="mb-1">Dil</p>
            <h6 className="fw-bold mb-0">{language}</h6>
          </div>
          <div>
            <p className="mb-1">Ülke</p>
            <h6 className="fw-bold mb-0">{country}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

DetailLanguageCountry.propTypes = {
  language: PropTypes.string,
  country: PropTypes.string
}

export default DetailLanguageCountry