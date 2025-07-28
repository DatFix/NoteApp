import { Flex, Segmented } from "antd";
import { useState } from "react";
import {
  AppstoreOutlined,
  BarsOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import BaseHeader from "../../components/header/BaseHeader";
import BaseButton from "../../components/buttons/base-button/BaseButton";
import AddNoteModal from "./modals/AddNoteModal";
import NoteCard from "../../components/cards/note-card/NoteCard";
import type { INote } from "../../interfaces/notes/INote";
import ViewDetailNoteModal from "./modals/ViewDetailNoteModal";

type NoteTab = "list" | "grid";
interface Props {
  items: INote[];
  totalItems: number;
}

export default function NoteLayout({ items, totalItems }: Props) {
  const [currentTab, setCurrentTab] = useState<NoteTab>("grid");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedNote, setSelectedNote] = useState<INote | null>(null);

  // const fakeNotes: INote[] = [
  //   {
  //     title: "Ghi chú chi tiêu ngày 7/7/2025",
  //     content:
  //       "Mua sắm đồ dùng cá nhân, ăn uống, gửi xe, và các chi phí khác trong ngày.",
  //     category: "Chi tiêu",
  //     createAt: new Date("2025-07-07T09:00:00"),
  //     updatedAt: new Date("2025-07-07T18:00:00"),
  //   },
  //   {
  //     title: "Họp dự án X",
  //     content:
  //       "Thảo luận về tiến độ dự án X, xác định các mốc quan trọng và phân công nhiệm vụ.",
  //     category: "Công việc",
  //     createAt: new Date("2025-07-06T14:30:00"),
  //     updatedAt: new Date("2025-07-06T16:00:00"),
  //   },
  //   {
  //     title: "Kế hoạch học tập tuần tới",
  //     content:
  //       "Học React Native, luyện đề tiếng Anh, đọc sách về phát triển bản thân.",
  //     category: "Cá nhân",
  //     createAt: new Date("2025-07-05T08:15:00"),
  //     updatedAt: new Date("2025-07-05T10:30:00"),
  //   },
  //   {
  //     title: "Lịch trình sự kiện công ty",
  //     content:
  //       "Sự kiện team building ngày 10/7, yêu cầu có mặt tại địa điểm lúc 8h sáng.",
  //     category: "Công việc",
  //     createAt: new Date("2025-07-03T11:45:00"),
  //     updatedAt: new Date("2025-07-04T12:00:00"),
  //   },
  //   {
  //     title: "Nhắc nhở thanh toán hóa đơn",
  //     content:
  //       "Hạn cuối thanh toán tiền điện, nước và Internet là ngày 9/7/2025.  ",
  //     category: "Cá nhân",
  //     createAt: new Date("2025-07-02T07:00:00"),
  //     updatedAt: new Date("2025-07-02T07:10:00"),
  //   },
  // ];

  return (
    <div>
      <BaseHeader title="Notes" description="Manage your notes">
        <div></div>
      </BaseHeader>
      <Flex align="center" justify="space-between" className="mb-5">
        <Flex align="center" justify="start" gap="2rem">
          <Segmented
            className="hidden md:block"
            size="large"
            options={[
              { value: "list", icon: <BarsOutlined /> },
              { value: "grid", icon: <AppstoreOutlined /> },
            ]}
            value={currentTab}
            onChange={(input) => setCurrentTab(input as NoteTab)}
          />
          <p className="text-xl text-gray-600">{totalItems} ghi chú</p>
        </Flex>

        <BaseButton
          className="bg-[#1D9FFD] px-5 py-6 text-white text-lg"
          label="Thêm ghi chú"
          icon={<PlusCircleOutlined />}
          onClick={() => setOpenModal(true)}
        />
      </Flex>

      <AddNoteModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onOk={() => console.log("Create new my note")}
      />

      <div
        style={{ maxHeight: "calc(100vh - 13rem)" }}
        className={`
            overflow-y-auto
            lg:p-5
            md:p-3
            ${
              currentTab === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start"
                : "flex flex-col gap-4"
            }`}
      >
        {items.map((item, index) => (
          <NoteCard
            key={index}
            item={item}
            onClick={() => setSelectedNote(item)}
          />
        ))}

        {selectedNote && (
          <ViewDetailNoteModal
            open={!!selectedNote}
            onClose={() => setSelectedNote(null)}
            item={selectedNote}
          />
        )}
      </div>
    </div>
  );
}
