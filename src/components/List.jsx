import React from "react";

function List(props) {
  const { items } = props;

  return (
    <>
      <label className="pd-interesteds-subtitle">Interessados</label>
      {items?.map(info => (
          <p className="interesteds-name">{info}</p>
      ))}
    </>
  )
};

export default List;