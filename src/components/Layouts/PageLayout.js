import React from "react";

function PageLayout({ children }) {
  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "5em auto 2.5em auto",
        backgroundColor: "#f7f7f7",
      }}
    >
      {children}
    </div>
  );
}
export default PageLayout;
