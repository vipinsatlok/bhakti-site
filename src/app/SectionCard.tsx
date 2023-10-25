import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface ISectionCard {
  count: number;
  addHref: string;
  seeHref: string;
  title: string;
}

const SectionCard = ({ count, title, addHref, seeHref }: ISectionCard) => {
  return (
    <div className="p-3 rounded bg-orange-400 shadow-md">
      {/* total count */}
      <h2 className="text-gray-100 text-base ">{title}</h2>
      <span className="text-6xl font-bold text-white">{count}</span>

      <div className="mt-5 flex gap-2">
        <Link href={seeHref}>
          <Button size={"sm"}>See All</Button>
        </Link>
        <Link href={addHref}>
          <Button size={"sm"}>Add New</Button>
        </Link>
      </div>
    </div>
  );
};

export default SectionCard;
