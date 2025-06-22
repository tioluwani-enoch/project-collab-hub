import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout() {
    return(
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}