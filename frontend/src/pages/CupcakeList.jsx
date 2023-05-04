import Cupcake from "@components/Cupcake";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CupcakeList() {
  const [cupcakes, SetCupcakes] = useState([]);
  const [accessories, SetAccessories] = useState([]);
  const [filter, setFilter] = useState("");

  // Step 1: get all cupcakes
  useEffect(() => {
    fetch("http://localhost:4000/cupcakes")
      .then((res) => res.json())
      .then((data) => SetCupcakes(data))
      .catch((err) => console.error(err));
  }, []);

  // Step 3: get all accessories
  useEffect(() => {
    fetch("http://localhost:4000/accessories")
      .then((res) => res.json())
      .then((data) => SetAccessories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.url}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes
          .filter((cupcake) => cupcake.url === filter || filter === "")
          .map((cupcake) => (
            <Link to={`/cupcakes/${cupcake.id}`}>
              <li className="cupcake-item">
                <Cupcake key={cupcake.id} cupcake={cupcake} />
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
}
