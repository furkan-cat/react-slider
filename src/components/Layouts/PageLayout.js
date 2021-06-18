import React from "react";

function PageLayout({ children }) {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "2.5em auto 2.5em auto",
        backgroundColor: "#f7f7f7",
      }}
    >
      {children}
    </div>
  );
}
export default PageLayout;
