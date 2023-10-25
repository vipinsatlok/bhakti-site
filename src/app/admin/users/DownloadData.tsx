"use client";

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const DownloadData = () => {
  const [state, setState] = useState("Downlaod");

  const onClick = async () => {
    setState("Genrating...");
    const res = await fetch("/api/add", {
      headers: { fileName: "users.json" },
    });
    const data = await res.json();

    setState("Downloading...");

    const a = document.createElement("a");
    // document.body.appendChild(a);

    a.href = "/users.json";
    a.download;
    // a.click()

    setState("Download");

    const resDelete = await fetch("/api/delete", {
      headers: { fileName: "users.json" },
    });
    await resDelete.json();
  };

  return (
    <form className="max-w-max">
      <Button onClick={onClick} fontSize={"xs"} size={"xs"}>
        {state}
      </Button>
    </form>
  );
};

export default DownloadData;
