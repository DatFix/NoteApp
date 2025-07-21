import { Modal } from "antd";
import type { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    onOk: () => void,
    title: string,
    subTitle?: string
}

export default function BaseModal({ children, open, onClose, onOk, title, subTitle }: ModalProps) {
    return (
        <Modal
            width={600}
            title={<div>
                <h4 className="capitalize text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500 font-normal">{subTitle}</p>
            </div>}
            open={open}
            onCancel={onClose}
            onOk={onOk}

        >
            {children}
        </Modal>
    )
}
