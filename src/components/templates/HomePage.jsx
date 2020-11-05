import React from "react";

import Card from "../molecules/Card"
import Header from "../organisms/Header"

export default function HomePage({information}) {
   
    const Cards = information.map(
        (item) => {
        return <Card key= {item.id} data={item} />
      }
      );

    return (
       <div>
        <Header />
        <h1>Package track Viewer </h1>
        {Cards}
       </div>
    );
}

  