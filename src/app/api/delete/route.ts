import { readFile, unlink, writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const fileName = req.headers.get("fileName");
    const write = await unlink(`public/${fileName}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    return error;
  }
};
