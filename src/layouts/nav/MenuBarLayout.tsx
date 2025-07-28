import { Flex, Menu } from "antd";
import {
    SettingOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
    TagsOutlined,
    HomeOutlined,
    AppstoreOutlined,
    TagOutlined,
    FileProtectOutlined,
    FileImageOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import { useState } from "react";
import './style.scss'
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/fields.constant";
import { ROUTE_LINK } from "../../constants/routes.constant";
import RadialMenu from "./RadialMenu";

export default function MenuBarLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const currentPage = useLocation();
    const getBasePath = (path: string): string => {
        const segments = path.split('/').filter(Boolean); // loại bỏ rỗng
        return '/' + (segments[0] || '');
    };

    const selectedKeys = getBasePath(currentPage.pathname);
    console.log("selectedKeys", selectedKeys);

    const navItems = [
        {
            key: ROUTE_LINK.HOME,
            label: <Link to={ROUTE_LINK.HOME} className="capitalize">{NAV_ITEMS.HOME}</Link>,
            icon: <Link to={ROUTE_LINK.HOME} className="capitalize"><HomeOutlined /></Link>
        },
        {
            key: ROUTE_LINK.NOTES,
            label: <Link to={ROUTE_LINK.NOTES} className="capitalize">{NAV_ITEMS.NOTES}</Link>,
            icon: <Link to={ROUTE_LINK.NOTES} className="capitalize"><TagOutlined /></Link>
        },
        {
            key: ROUTE_LINK.IMAGES,
            label: <Link to={ROUTE_LINK.IMAGES} className="capitalize">{NAV_ITEMS.IMAGES}</Link>,
            icon: <Link to={ROUTE_LINK.IMAGES} className="capitalize"><FileImageOutlined /></Link>
        },
        {
            key: ROUTE_LINK.VIDEOS,
            label: <Link to={ROUTE_LINK.VIDEOS} className="capitalize">{NAV_ITEMS.VIDEOS}</Link>,
            icon: <Link to={ROUTE_LINK.VIDEOS} className="capitalize"><VideoCameraOutlined /></Link>
        },
        {
            key: ROUTE_LINK.FILES,
            label: <Link to={ROUTE_LINK.FILES} className="capitalize">{NAV_ITEMS.FILES}</Link>,
            icon: <Link to={ROUTE_LINK.FILES} className="capitalize"><FileProtectOutlined /></Link>
        },
        {
            key: ROUTE_LINK.CATEGORIES,
            label: <Link to={ROUTE_LINK.CATEGORIES} className="capitalize">{NAV_ITEMS.CATEGORIES}</Link>,
            icon: <Link to={ROUTE_LINK.CATEGORIES} className="capitalize"><AppstoreOutlined /></Link>
        },
        {
            key: ROUTE_LINK.SETTINGS,
            label: <Link to={ROUTE_LINK.SETTINGS} className="capitalize">{NAV_ITEMS.SETTINGS}</Link>,
            icon: <Link to={ROUTE_LINK.SETTINGS} className="capitalize"><SettingOutlined /></Link>
        }
    ];

    return (
        <>
            <div className="h-screen md:flex flex-col hidden">
                <Flex align="center" justify="center" gap=".5rem" className="bg-[#fff] py-4 text-[#1D9FFD] text-2xl font-semibold">
                    <TagsOutlined style={{ fontSize: 30, color: '#1D9FFD' }} />
                    {!collapsed && 'Nozity'}
                </Flex>
                <Menu
                    className="flex-1"
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={navItems}
                    selectedKeys={[selectedKeys]}
                    defaultOpenKeys={['/']}
                />
                <div className="p-2 bg-white">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full px-6 py-2 flex items-center justify-center m-auto"
                    >
                        {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 md:hidden w-full p-2">
                {/* <Flex align="center" justify="center" gap=".1rem" className="w-full ">
                    {navItems.map((item, index) => (
                        <Link to={item.key} key={index} className={`w-1/4 px-3 py-1.5 ${selectedKeys === item.key ? 'bg-blue-600 text-white' : ''} rounded-full transition-all duration-200`}>
                            <div className={`flex items-center justify-center transition-all duration-200 ${selectedKeys === item.key ? 'gap-2' : 'gap-0'}`}>
                                <div className={`${selectedKeys === item.key ? 'block text-white' : 'hidden'}`}>
                                    {item.icon}
                                </div>
                                <div className={`text-sm ${selectedKeys === item.key ? 'text-white' : ''}`}>
                                    {item.label}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Flex> */}
                <RadialMenu />
            </div>
        </>
    );
}
