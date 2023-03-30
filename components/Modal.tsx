import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled }) => {
  const handleClose = useCallback(() => {
    if (disabled) return;
    onClose();
  }, [disabled, onClose]);
  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);
  if (!isOpen) return null;

  return (
    <>
      <div
        className="
      flex items-center justify-center
      overflow-x-hidden
      overflow-y-auto
      inset-0
      z-50
      bg-neutral-800/70
      fixed
      "
      >
        <div
          className="
        relative
        w-full
        sm:w-3/5
        lg:w-2/5
        lg:max-w-2xl
        my-6
        lg:h-auto
        mx-auto
        "
        >
          {/* content */}
          <div className="flex flex-col h-auto border-0 rounded-lg shadow-lg relative w-full bg-black">
            {/* header */}
            <div className="flex items-center justify-between rounded-t p-10">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button onClick={handleClose} className="p-1 ml-auto text-white hover:opacity-70 transition">
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* body */}
            <div className="relative p-10 flex-auto">{body}</div>
            {/* footer */}
            <div className="flex flex-col gap-2 p-2">
              <Button disabled={disabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit} />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
