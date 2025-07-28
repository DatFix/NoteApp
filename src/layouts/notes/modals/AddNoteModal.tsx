import type { SubmitHandler } from "react-hook-form";
import BaseButton from "../../../components/buttons/base-button/BaseButton";
import BaseTextInputRhf from "../../../components/inputs/base-text-input-rhf/BaseTextInputRhf";
import BaseModal from "../../../components/modals/base-modal/BaseModal";
import { useSimRhf } from "../../../hooks/useSimRhf.hook";
import type { INote } from "../../../interfaces/notes/INote";
import { useTransition } from "react";
import { NoteApi } from "../../../apis";
import toast from "react-hot-toast";

export default function AddNoteModal({
  open,
  onClose,
  onOk,
}: {
  open: boolean;
  onClose: () => void;
  onOk: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useSimRhf<INote>();

  const handleOk = () => {
    onOk();
    reset();
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<INote> = (data) => {
    startTransition(async () => {
      try {
        await NoteApi.create(data);
        onClose();
        reset();
        toast.success("Tạo ghi chú thành công!");
        onOk();
      } catch (error) {
        toast.error("Tạo ghi chú thất bại!");
      }
    });
  };

  return (
    <div>
      <BaseModal
        open={open}
        onClose={handleClose}
        onOk={handleOk}
        title="Tạo ghi chú mới"
        footer={false}
        subTitle="Bắt đầu một ghi chú mới để lưu lại ý tưởng, kế hoạch hoặc công việc cần làm."
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2">
            <BaseTextInputRhf
              control={control}
              name="title"
              label="Tiêu đề ghi chú"
              isRequired
              otherProps={{
                placeholder: "Tiêu đề ghi chú",
                size: "large",
              }}
            />
          </div>

          <div className="py-2">
            <BaseTextInputRhf
              control={control}
              name="category"
              label="Danh mục"
              isRequired
              otherProps={{
                placeholder: "Danh mục",
                size: "large",
              }}
            />
          </div>

          <div className="py-2">
            <BaseTextInputRhf
              control={control}
              name="content"
              label="Nội dung ghi chú"
              isRequired
              otherProps={{
                placeholder: "Nội dung ghi chú",
                size: "large",
              }}
            />
          </div>

          <div className="flex justify-end my-2">
            <BaseButton
              size="large"
              style={{ background: "#1D9FFD", color: "#fff" }}
              htmlType="submit"
              label={
                isPending ? (
                  <div className="w-5 h-5 border-2 border-[#b9f5f2] rounded-full border-t-[#fff] animate-spin"></div>
                ) : (
                  "Tạo ghi chú"
                )
              }
            />
          </div>
        </form>
      </BaseModal>
    </div>
  );
}
