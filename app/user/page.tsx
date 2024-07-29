import { getServerSession } from "next-auth";

export default async function () {

    const session = await getServerSession();

    return (
        <div>
            <p>User Details</p>
            {
                JSON.stringify(session)
            }
        </div>
    );
}