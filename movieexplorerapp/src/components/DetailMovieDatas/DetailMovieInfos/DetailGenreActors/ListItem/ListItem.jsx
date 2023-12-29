/* eslint-disable react/prop-types */
const ListItem = ({split, title}) => {
  return (
    <>
      <span className="fs-5 fw-semibold">{title}</span>
      <ul>
        {split.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListItem;
