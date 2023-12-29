import PropTypes from "prop-types";
const DangerAlert = ({ title }) => {
  return (
    <div className="alert alert-danger py-4 my-5" role="alert">
      <p className="text-center mb-0">{title}</p>
    </div>
  );
};

DangerAlert.propTypes = {
  title: PropTypes.string,
};

export default DangerAlert;