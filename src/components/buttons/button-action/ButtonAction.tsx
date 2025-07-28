import { Flex } from "antd";
import type { ReactNode } from "react";

interface Props {
  name: string;
  icon?: ReactNode;
  isDanger?: boolean;
  onClick?: () => void;
}
export default function ButtonAction({ name, icon, isDanger, onClick }: Props) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick;
      }}
      className={`px-3 py-2 rounded-md w-full text-left transition-all duration-100 ${
        isDanger ? "hover:bg-rose-500 hover:text-white" : "hover:bg-[#f1f1f1]"
      }`}
    >
      <Flex align="center" justify="space-between" gap="1rem">
        <p>{name}</p>
        {icon}
      </Flex>
    </button>
  );
}
