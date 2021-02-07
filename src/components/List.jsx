import React from "react";

function List(props) {
  const { items } = props;

  return (
    <>
      <label className="pd-interesteds-subtitle">Interessados</label>
      <div className="interesteds-name">
        {items?.map(info => (
            <p>{info}</p>
        ))}
      </div>
    </>
  )
};

export default List;