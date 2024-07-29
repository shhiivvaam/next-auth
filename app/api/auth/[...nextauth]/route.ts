import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials: any) {
                console.log(credentials);
                // return null;

                //validation 
                return {
                    id: "user1",
                    name: "Shivam Kumar",
                    email: "life.shivam2394@gmail.com"
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
// export const GET = handler;
// export const POST = handler;