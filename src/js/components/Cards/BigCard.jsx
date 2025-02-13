import React from "react";

const BigCard = () => {
  return (
    <div>
      <div className="card-body bg-secondary-subtle w-100 px-4 py-4">
        <h5 className="card-title" style={{ fontSize: "50px" }}>
          A Warm Welcome!
        </h5>
        <p className="card-text pb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          optio similique quia consectetur labore dicta hic nostrum corrupti
          voluptatibus laborum accusamus, deserunt illum reprehenderit quam, at
          cupiditate dolor modi nam?
        </p>
        <a href="#" className="btn btn-primary mb-5">
          Call To Action!
        </a>
      </div>
    </div>
  );
};

export default BigCard;
