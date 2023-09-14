import React from "react";

const Navbarr = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}

          {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            ALL
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbarr;
