import { type User } from "@clerk/nextjs/dist/api";

export function
filterUserForClient(user: User)
{
  const u = {
    id: user.id,
    username: "",
    profileImageUrl: user.profileImageUrl,
  };

  if(user.username !== null)
    u.username = user.username;
  return  (u);
}
