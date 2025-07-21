import MenuBar from "../layouts/nav/MenuBarLayout";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen">
            <MenuBar />
            <div className="flex-1 px-5 py-4 h-screen overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}
