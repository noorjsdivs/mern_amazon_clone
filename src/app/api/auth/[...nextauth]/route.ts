import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


 const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: '/signin'
  }
  // secret: process.env.NEXTAUTH_SECRET,
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
