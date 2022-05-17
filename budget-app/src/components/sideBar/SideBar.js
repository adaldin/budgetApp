import React from "react";

function SideBar() {
  return (
    <React.Fragment>
      <label htmlFor="searcherBar"></label>
      <input
        type="text"
        id="searcherBar"
        placeholder="Busca tus presupuestos"
        // checked={formData.}
      />
      <button>A-Z</button>
      <button>01/11/2022</button>
      <button>RESTART</button>
      <h6>total</h6>
      <p>300€</p>
    </React.Fragment>
  );
}

export default SideBar;
