import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch(
                    "https://www.theappapi.com/api/v1/projects/a1d177c2-1e99-4f02-8a93-054f2314a658/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-API-Key": "api_kxzqfc4i3_1760791919866",
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    }
                );
                const user = await res.json();
                if (!res.ok || !user) return null;
                return {
                    id: user.id || user._id,
                    name: user.name,
                    email: user.email,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
