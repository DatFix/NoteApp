import { Flex } from "antd";
import type { ReactNode } from "react";

interface BaseHeaderProps {
    children: ReactNode;
    title: string;
    description: string
}

export default function BaseHeader({ children, title, description }: BaseHeaderProps) {
    return (
        <Flex align="center" justify="space-between" className="bg-[#fff] px-5 py-5 mb-5 -mx-5 -mt-4 inset-0">
            <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div>
                {children}
            </div>
        </Flex>
    );
}
