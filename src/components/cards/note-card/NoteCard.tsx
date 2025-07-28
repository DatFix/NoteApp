import { Card, Flex, Tag } from "antd";
import BasePopover from "../../popover/BasePopover";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./style.scss";
import ButtonAction from "../../buttons/button-action/ButtonAction";
import type { INote } from "../../../interfaces/notes/INote";

export default function NoteCard({
  item,
  onClick,
}: {
  item: INote;
  onClick: () => void;
}) {
  return (
    <>
      <Card
        className="border-r-4 border-r-blue-600 shadow-lg transition-all duration-200 hover:shadow-sm hover:translate-x-0.5 hover:translate-y-0.5"
        onClick={onClick}
      >
        <Flex justify="space-between" align="center">
          <h3 className="text-gray-700 font-semibold text-xl py-2">
            {item.title}
          </h3>
          <BasePopover placement="bottomRight">
            <div className="flex flex-col gap-1">
              <ButtonAction name="Chỉnh sửa" icon={<EditOutlined />} />
              <ButtonAction name="Xoá" icon={<DeleteOutlined />} isDanger />
            </div>
          </BasePopover>
        </Flex>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">
          {item.content}
        </p>
        <Tag className="rounded-full px-2.5 py-0.5 text-gray-600 my-2">
          {item.category}
        </Tag>
        <Flex align="center" justify="space-between">
          <p className="text-gray-600 text-sm mt-2">
            <p> {new Date(item.createdAt).toLocaleDateString("vi-VN")}</p>
          </p>
        </Flex>
      </Card>
    </>
  );
}
