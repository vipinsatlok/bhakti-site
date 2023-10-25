import { IUserData } from "@/types/User";
import Link from "next/link";

const UserCard = ({ name, email, role, password, id }: IUserData) => {
  return (
    <Link href={`/admin/users/${id}`}>
      <div className="flex flex-col border rounded p-2 hover:shadow-md transition-all">
        <span className="text-xs text-green-800 capitalize">
          {id + " - " + role}
        </span>
        <span className="text-lg font-bold -mt-1">{name}</span>
        <span className="text-[10px] -mt-1">{email + " - " + password}</span>
      </div>
    </Link>
  );
};

export default UserCard;
