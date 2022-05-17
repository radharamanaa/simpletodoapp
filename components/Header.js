import React from "react";

const Header = ({ text }) => {
  return (
    <div className="bg-slate-800">
      <header className="mx-auto w-3/4 p-2  text-slate-100 h-20 flex items-center justify-between">
        <h2 className="text-4xl font-thin tracking-wide">{text}</h2>
        <h3 className="tracking-wide">
          <a href="https://github.com/radharamanaa" target="_blank">
            Github Profile
          </a>
        </h3>
      </header>
    </div>
  );
};

export default Header;
