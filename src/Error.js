import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>
        <h2>404</h2>
        <h2>UH OH! You're lost.</h2>
        <p>
          asade wefcfbf erfcaef fgrgbgrk rsf erfse ergvwa fgr rtkg rgff
        </p>
      </div>
      <NavLink to="/">
        <button>GO TO HOME</button>
      </NavLink>
    </div>
  );
};

export default Error;
