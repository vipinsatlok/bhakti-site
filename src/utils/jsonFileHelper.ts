import { appendFile, readFile, unlink, writeFile } from "fs/promises";

const readJSONFile = async <Data>(path: string) => {
  try {
    const contents = await readFile(path, { encoding: "utf8" });
    const data = JSON.parse(contents) as Data[];
    return data;
  } catch (err) {
    console.error(err);
  }
};

const writeJSONFile = async (path: string, data: {}) => {
  try {
    const file = (await readJSONFile(path)) || ([] as any[]);
    const id = file[file?.length - 1]?.id || 1;
    const newId = Number(id) + 1;
    file?.push({ ...data, id: newId });

    const promise = await writeFile(path, JSON.stringify(file));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const updateJSONFile = async (path: string, id: string, data: {}) => {
  try {
    const file = await readJSONFile(path);
    const updatedData = file?.map((item: any) => {
      if (item.id === id) {
        return { ...data };
      }
      return item;
    });

    const promise = await writeFile(path, JSON.stringify(updatedData));
    return true;
  } catch (err) {
    console.log(err);
  }
};

const deleteJSONFileData = async (path: string, id: string) => {
  try {
    const file = await readJSONFile(path);
    const updatedData = file?.map((item: any) => {
      if (item.id === id) {
        return {};
      }
      return item;
    });

    const promise = await writeFile(path, JSON.stringify(updatedData));
    return true;
  } catch (err) {
    console.log(err);
  }
};

const dowlaodJSONFile = async (downlaodFilename: string) => {
  const fileName = process.env.DATAFOLDER + downlaodFilename;
  const file = await readJSONFile(fileName);
  await writeJSONFile(`public/${downlaodFilename}`, JSON.stringify(file));
};

const deleteJSONFile = async (downlaodFilename: string) => {
  await unlink(`public/${downlaodFilename}`);
};

export const JSONFile = {
  read: readJSONFile,
  write: writeJSONFile,
  delete: deleteJSONFileData,
  update: updateJSONFile,
  deleteFile: deleteJSONFile,
  download: dowlaodJSONFile,
};
