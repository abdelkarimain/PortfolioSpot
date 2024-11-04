import PItem from "./PItem";

type PCatProps = { name: string; nbElems: number };

const PCategory = ({ cat }: { cat: PCatProps }) => {
  return (
    <button
      type="button"
      className="text-white text-sm bg-slate-900 py-1 px-4 rounded-lg hover:bg-slate-600 border-2 border-slate-600"
    >
      {cat.name} ({cat.nbElems})
    </button>
  );
};



const PList = () => {
  const categories = [
    { name: "All", nbElems: 4 },
    { name: "JavaScript", nbElems: 4 },
    { name: "React", nbElems: 4 },
    { name: "Node", nbElems: 4 },
    { name: "CSS", nbElems: 4 },
    { name: "Next", nbElems: 4 },
  ];
  return (
    <div className="overflow-hidden px-4 pb-20 pt-20 md:px-10">
      <div className="pb-20 flex justify-center gap-4 overflow-auto ">
        {categories.map((category) => (
          <PCategory key={category.name} cat={category} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 ">
        <PItem />
        <PItem />
        <PItem />
        <PItem />
        <PItem />
      </div>
    </div>
  );
};

export default PList;
