import { Flex, Tag } from "antd";
import BaseModal from "../../../components/modals/base-modal/BaseModal";
import type { INote } from "../../../interfaces/notes/INote";

export default function ViewDetailNoteModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: INote;
}) {
  return (
    <div>
      <BaseModal
        open={open}
        onClose={onClose}
        title={item.title}
        footer={false}
        subTitle={
          <Flex align="center" justify="space-between">
            {`Ghi chú được tạo vào ngày ${new Date(item.createdAt).toLocaleDateString("vi-VN")}`}

            <Flex align="center" justify="center" gap=".5rem">
              <p>Danh mục:</p>
              <Tag className="rounded-full px-2.5 py-0.5 text-gray-600 my-2">
                {item.category}
              </Tag>
            </Flex>
          </Flex>
        }
      >
        <div className="">
          <p>{item.content}</p>
        </div>
      </BaseModal>
    </div>
  );
}
