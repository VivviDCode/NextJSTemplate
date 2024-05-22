import NextAuth from "next-auth/next";
import { authOptions } from "../../../../lib/authOptions";

console.log(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
