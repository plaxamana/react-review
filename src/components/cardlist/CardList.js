import React from "react";
// import { cats } from "../../cats";
import Card from "../card/Card";

export default function CardList({ cats }) {
  return (
    <div className="flex flex-wrap justify-center">
      {cats.map((cat) => (
        <Card key={cat.id} name={cat.name} email={cat.email} id={cat.id} />
      ))}
    </div>
  );
}
