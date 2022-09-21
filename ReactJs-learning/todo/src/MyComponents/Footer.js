import React from "react";

export const Footer = () => {
  let footerStyle = {
    top: "100vh",
    position: "absolute",
    width: "100%",
    border: "2px solid green",
  };

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; Mytodolist.xyz;</p>
    </footer>
  );
};
