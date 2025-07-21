import { Card, Flex, Segmented, Tag } from "antd";
import { useState } from "react";
import { AppstoreOutlined, BarsOutlined, PlusCircleOutlined } from '@ant-design/icons';
import BaseHeader from "../../components/header/BaseHeader";
import BaseButton from "../../components/buttons/base-button/BaseButton";
import AddNoteModal from "./modals/AddNoteModal";

type NoteTab = 'list' | 'grid';

export default function NoteLayout() {
    const [currentTab, setCurrentTab] = useState<NoteTab>('grid')
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <div>
            <BaseHeader title="Notes" description="Manage your notes">
                <div></div>
            </BaseHeader>
            <Flex align="center" justify="space-between" className="mb-5">
                <Flex align="center" justify="start" gap="2rem">
                    <Segmented
                        size="large"
                        options={[
                            { value: 'list', icon: <BarsOutlined /> },
                            { value: 'grid', icon: <AppstoreOutlined /> },
                        ]}
                        value={currentTab}
                        onChange={(input) => setCurrentTab(input as NoteTab)}
                    />
                    <p className="text-xl text-gray-600">5 ghi chú</p>
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

            <div className={`${currentTab === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4' : 'flex flex-col gap-4'}`}>
                {[...Array(5)].map((_, index) => (
                    <Card key={index} className="border-r-4 border-r-blue-600 shadow-lg transition-all duration-200 hover:shadow-sm hover:translate-x-0.5 hover:translate-y-0.5">
                        <h3 className="text-gray-700 font-semibold text-xl py-2">Ghi chú chi tiêu ngày 7/7/2025</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-3">Cuộc họp team ngày 20/1: Thảo luận về timeline dự án, phân công nhiệm vụ...</p>
                        <Tag className="rounded-full px-2.5 py-0.5 text-gray-600 my-2">Công việc</Tag>
                        <Flex align="center" justify="space-between">
                            <p className="text-gray-600 text-sm mt-2">Cập nhật: 24-05-2025</p>
                        </Flex>
                    </Card>
                ))}
            </div>

        </div>
    )
}
