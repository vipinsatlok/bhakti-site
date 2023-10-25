import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface IListHeader {
  title: string;
  url: string;
}

const ListHeader = ({ title, url }: IListHeader) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>{title} List</h1>
        <Link href={url}>
          
          <Button size={"sm"}>ADD</Button>
        </Link>
      </div>
    </div>
  );
};

export default ListHeader;
