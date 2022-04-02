import React from "react";
import Datatable from "../../Components/Datatable/Datatable";
import Navigation from "../../Components/Navigation/Navigation";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./List.scss";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navigation />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
