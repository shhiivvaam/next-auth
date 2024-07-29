"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"


export const Appbar = () => {

    const router = useRouter();
    const session = useSession();

    return (
        <div>
            {/* <button onClick={() => { router.push('/api/auth/signin') }}>
                Signin
            </button> */}
            <button
                onClick={() => { signIn() }}
            >Signin</button>
            <button
                onClick={() => { signOut() }}
            >Logout</button>

            {
                JSON.stringify(session)
            }
        </div>
    )
}