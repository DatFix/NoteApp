import BaseInput from "../../../components/inputs/base-text-input-rhf/BaseInput";
import BaseModal from "../../../components/modals/base-modal/BaseModal";

export default function AddNoteModal({
    open,
    onClose,
    onOk
}: {
    open: boolean,
    onClose: () => void,
    onOk: () => void
}) {

    return (
        <div>
            <BaseModal
                open={open}
                onClose={onClose}
                title="Tạo ghi chú mới"
                onOk={onOk}
                subTitle="Bắt đầu một ghi chú mới để lưu lại ý tưởng, kế hoạch hoặc công việc cần làm."
            >
                <div>
                    <BaseInput type="password" />
                </div>
            </BaseModal>
        </div>
    )
}
