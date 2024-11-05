import { PListProps } from "../types";
import PItem from "./PItem";

const PList = ({
  data,
}: {
  data: PListProps[];
}) => {
  return (
    <div className="overflow-hidden px-4 pb-20 md:px-10">
      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 ">
        {data.map((item) => (
          <PItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PList;
