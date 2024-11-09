import { useState, useEffect } from "react";
import { PCatProps, PListProps } from "../types";
import CardItem from "./CardItem";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<PListProps[]>([]);
  const [categories, setCategories] = useState<PCatProps[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        const uniqueCategories = Array.from(
          new Set(data.items.map((item: PListProps) => item.freamwork))
        ).map((name) => ({
          name: name as string,
          nbElems: data.items.filter(
            (item: PListProps) => item.freamwork === name
          ).length,
        }));
        setCategories([
          { name: "All", nbElems: data.items.length },
          ...uniqueCategories,
        ]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.freamwork === selectedCategory;
    const matchesSearchQuery = item.owner
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <>
      <div className="pb-4 flex justify-center">
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="text-slate-300 bg-slate-800 text-sm py-2 px-4 rounded-lg border-2 border-slate-600"
        />
      </div>
      <div className="pb-4 flex justify-center gap-4 overflow-auto">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className={`text-white text-sm py-1 px-4 rounded-lg border-2 border-slate-600 ${
              selectedCategory === category.name
                ? "bg-slate-600"
                : "bg-slate-900 hover:bg-slate-600"
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name} ({category.nbElems})
          </button>
        ))}
      </div>
      <div className="overflow-hidden px-4 py-10 md:px-10">
        <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2">
          {filteredItems.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
