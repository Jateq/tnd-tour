import Balancer from "react-wrap-balancer";
import Profile from "@/components/home/profile";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/authOptions";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    return (
        <Profile session={session}/>
    );
}
