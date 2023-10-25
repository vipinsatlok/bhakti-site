import UserDetailCard from "./UserDetailCard";
import { verifyUser } from "@/utils/getUser";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { readJSONFile, writeJSONFile } from "@/utils/jsonFileHelper";

export default async function Home() {
  const user = await verifyUser();
  if (!user) return redirect("/login");

  return (
    <div className="mt-3">
      {/* user detail */}
      <div>
        <UserDetailCard {...user} />

        {/* services sections */}
        <section className="flex mt-5 flex-col gap-5">
          {/* {sectionData.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))} */}
        </section>
        <a href={"users.json"} download></a>
      </div>
    </div>
  );
}
