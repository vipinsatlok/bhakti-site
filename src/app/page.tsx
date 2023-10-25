import UserDetailCard from "./UserDetailCard";
import { getUser } from "@/utils/getUser";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import CallingSevaCard from "./CallingSevaCard";

export default async function Home() {
  const user = await getUser();
  if (!user) return redirect("/login");

  return (
    <div className="mt-3 flex flex-col gap-5">
      <UserDetailCard {...user} />
      <CallingSevaCard user_id={user.id} />

      <section className="flex mt-5 flex-col gap-5">
        {/* {sectionData.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))} */}
      </section>
    </div>
  );
}
