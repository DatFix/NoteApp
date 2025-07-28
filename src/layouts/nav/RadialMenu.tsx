import { useState } from "react";
import {
  CloseOutlined,
  PlusOutlined,
  HomeOutlined,
  TagOutlined,
  FileImageOutlined,
  VideoCameraOutlined,
  FileProtectOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTE_LINK } from "../../constants/routes.constant";
import { NAV_ITEMS } from "../../constants/fields.constant";

export default function RadialMenu() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      icon: <HomeOutlined />,
      link: ROUTE_LINK.HOME,
      label: NAV_ITEMS.HOME,
    },
    {
      icon: <TagOutlined />,
      link: ROUTE_LINK.NOTES,
      label: NAV_ITEMS.NOTES,
    },
    {
      icon: <FileImageOutlined />,
      link: ROUTE_LINK.IMAGES,
      label: NAV_ITEMS.IMAGES,
    },
    {
      icon: <VideoCameraOutlined />,
      link: ROUTE_LINK.VIDEOS,
      label: NAV_ITEMS.VIDEOS,
    },
    {
      icon: <FileProtectOutlined />,
      link: ROUTE_LINK.FILES,
      label: NAV_ITEMS.FILES,
    },
    {
      icon: <AppstoreOutlined />,
      link: ROUTE_LINK.CATEGORIES,
      label: NAV_ITEMS.CATEGORIES,
    },
    {
      icon: <SettingOutlined />,
      link: ROUTE_LINK.SETTINGS,
      label: NAV_ITEMS.SETTINGS,
    },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {buttons.map((btn, index) => {
        const offsetY = (index + 1) * 60; // khoảng cách dọc mỗi nút (px)

        return (
          <Link
            to={btn.link}
            key={index}
            title={btn.label}
            className={`
              absolute w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-black
              transition-all duration-300 ease-in-out
              ${open ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
            `}
            style={{
              transform: `translateY(${open ? -offsetY : 0}px)`,
            }}
          >
            {btn.icon}
          </Link>
        );
      })}

      {/* Nút chính */}
      <button
        className="w-14 h-14 rounded-full bg-blue-500 shadow-lg flex items-center justify-center text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseOutlined /> : <PlusOutlined />}
      </button>
    </div>
  );
}
