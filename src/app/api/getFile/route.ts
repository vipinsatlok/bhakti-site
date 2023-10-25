import { readFile, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const fileName = req.headers.get("fileName");
    const file = await readFile(`src/data/${fileName}`, { encoding: "utf8" });
    const data = JSON.parse(file);

    return NextResponse.json({ data });
  } catch (error) {
    return error;
  }
};
