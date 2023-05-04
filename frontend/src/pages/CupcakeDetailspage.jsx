import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "@components/Cupcake";

function CupcakeDetailspage() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/cupcakes/${id}`)
      .then((res) => res.json())
      .then((data) => setCupcake(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Cupcake cupcake={cupcake} />
    </div>
  );
}

export default CupcakeDetailspage;
