import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: ReactNode;
  triggerNode?: ReactNode;
  placement?: "bottomRight" | "bottomLeft" | "topRight" | "topLeft";
}

export default function BasePopover({
  children,
  title,
  triggerNode,
  placement = "bottomRight",
}: Props) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={children}
      title={title}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement={placement}
    >
      <span
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {triggerNode ?? <MoreOutlined />}
      </span>
    </Popover>
  );
}
