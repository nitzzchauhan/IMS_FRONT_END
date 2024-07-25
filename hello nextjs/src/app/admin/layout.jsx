import React from "react";
import AdminHeader from "./../../components/AdminHeader.jsx";

export default function layout({ children }) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
