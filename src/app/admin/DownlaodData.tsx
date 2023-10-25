import { deleteJSONFile, dowlaodJSONFile } from "@/utils/jsonFileHelper";
import { Button } from "@chakra-ui/react";
import React from "react";

const DownlaodData = () => {
  const formAction = async () => {
    "use server";
    await dowlaodJSONFile("users.json");
  };

  const deleteFormAction = async () => {
    "use server";
    await deleteJSONFile("users.json");
  };

  return (
    <section>
      <h2>Download Section</h2>
      <p>Status</p>
      <div className="flex gap-1">
        <form action={formAction}>
          <Button type="submit">Genrate</Button>
        </form>
        <Button>
          <a href="users.json" download>
            Downlaod
          </a>
        </Button>
        <form action={deleteFormAction}>
          <Button type="submit">Delete</Button>
        </form>
      </div>
    </section>
  );
};

export default DownlaodData;
