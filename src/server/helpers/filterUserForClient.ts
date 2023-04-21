import type { User } from "@clerk/nextjs/dist/api";
export const filterUserForClient = (user: User) => {
  const u = {
    id: user.id,
    username: "",
    profileImageUrl: user.profileImageUrl,
    externalUsername: user.externalAccounts.find((externalAccount) => externalAccount.provider === "oauth_github")?.username || null
  };

  if(user.username !== null)
    u.username = user.username;
  return  (u);
};
