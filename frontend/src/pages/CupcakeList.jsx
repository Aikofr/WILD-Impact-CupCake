import Cupcake from "@components/Cupcake";
import { useEffect, useState } from "react";

export default function CupcakeList() {
  const [cupcakes, SetCupcakes] = useState([]);

  // Step 1: get all cupcakes
  useEffect(() => {
    fetch("http://localhost:4000/cupcakes")
      // fetch(`${import.meta.env.VITE_BACKEND_URL}/actors`)
      .then((res) => res.json())
      .then((data) => SetCupcakes(data))
      .catch((err) => console.error(err));
  }, []);

  // Pour Husky ca
  console.error(cupcakes);

  // Step 3: get all accessories
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}
