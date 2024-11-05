import Header from "./components/Header";
import Hero from "./components/Hero";
import { promises as fs } from "fs";
import { PListProps } from "./types";
import PList from "./components/PList";
import { revalidatePath } from "next/cache";
import Footer from "./components/Footer";

let selectedCategory: string | null = null;

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);

  const getCategories = (data: PListProps[]) => {
    const categories = data.reduce((acc, item) => {
      item.stack.forEach((stack) => {
        const lower = stack.toLowerCase();
        if (!acc[lower]) {
          acc[lower] = 1;
        } else {
          acc[lower]++;
        }
      });
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, nbElems: count }));
  };

  const categories = getCategories(data.items);

  // Filter data based on selected category
  const filteredData = selectedCategory
    ? data.items.filter((item: PListProps) =>
        item.stack.some(
          (stack) => stack.toLowerCase() === selectedCategory?.toLowerCase()
        )
      )
    : data.items;

  async function filterByCategory(formData: FormData) {
    "use server";

    selectedCategory = formData.get("category") as string;
    revalidatePath("/");
  }

  async function clearFilter() {
    "use server";

    selectedCategory = null;
    revalidatePath("/");
  }

  return (
    <>
      <Header />
      <Hero />

      <div className="overflow-hidden px-4 pt-20 md:px-10">
        <div className="pb-16 flex justify-center gap-4 overflow-auto">
          {categories.map((category) => (
            <form key={category.name} action={filterByCategory}>
              <input type="hidden" name="category" value={category.name} />
              <button
                type="submit"
                className={`text-white text-sm py-1 px-4 rounded-lg border-2 border-slate-600 ${
                  selectedCategory === category.name
                    ? "bg-slate-600"
                    : "bg-slate-900 hover:bg-slate-600"
                }`}
              >
                {category.name} ({category.nbElems})
              </button>
            </form>
          ))}

          {selectedCategory && (
            <form action={clearFilter}>
              <button
                type="submit"
                className="text-white text-sm bg-slate-900 py-1 px-4 rounded-lg hover:bg-slate-600 border-2 border-slate-600"
              >
                Clear Filter
              </button>
            </form>
          )}
        </div>
      </div>
      <PList data={filteredData} />
      <Footer />
    </>
  );
}
