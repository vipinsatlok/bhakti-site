import { readFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const fileName = req.headers.get("fileName");
    const file = await readFile(`src/data/${fileName}`, { encoding: "utf8" });
    const data = JSON.parse(file);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error) });
  }
}
