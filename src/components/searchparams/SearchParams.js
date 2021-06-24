import { useState, useEffect } from "react";
import CardList from "../cardlist/CardList";

const SearchParams = () => {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    const res = await fetch("cats.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await res.json();
    setCats(json.cats);
  }

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <input
        className="p-3 bg-blue-200 border border-blue-800 text-black outline-none"
        type="search"
        placeholder="search cats"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <CardList
        cats={filteredCats}
      />
    </div>
  );
};

export default SearchParams;
