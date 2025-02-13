import React from "react";

const Navbar = () => {
  return (
    <ul className="nav d-flex justify-content-between bg-black">
      <li className="nav-item">
        <a className="nav-link active text-light" aria-current="page" href="#">
          Start Bootstrap
        </a>
      </li>

      <li className="nav-item ms-auto">
        <a className="nav-link active text-light" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">
          Services
        </a>
      </li>
      <li className="nav-item text-secondary">
        <a className="nav-link disabled text-secondary" aria-disabled="true">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
