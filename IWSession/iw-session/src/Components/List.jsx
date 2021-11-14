import React from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItems";
function List(){
    return (
        <div className="container">
        <ListHeader title="Header"/>
        <ListItem />
        </div>
    )
}

export default List;