// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React, { useEffect, useRef, useCallback } from "react";
import Button from "../button/button";
import { combineClasses } from "../../helpers/utils";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

interface ModalProps {
  title: string;
  visible: boolean;
  body: string;
  isLoading: boolean;
  setVisible: (isVisible: boolean) => void;
  onSubmit: () => void;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonText?: string;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Modal: React.FC<ModalProps> = ({
  title,
  body,
  visible,
  isLoading,
  setVisible,
  onSubmit,
  confirmButtonText,
  confirmButtonColor,
  cancelButtonText,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const hide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const submit = useCallback(() => {
    hide();
    onSubmit();
  }, [hide, onSubmit]);

  const clickOutsideContent = useCallback(
    (e: MouseEvent) => {
      if (e.target === modalRef.current) {
        hide();
      }
    },
    [hide]
  );

  useEffect(() => {
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [clickOutsideContent]);

  return (
    <div
      ref={modalRef}
      className={combineClasses(
        "fixed z-20 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50 ease-in-out duration-300 flex items-center justify-center",
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        className={combineClasses(
          "w-full h-auto max-w-[550px] mx-auto bg-white rounded-md relative ease-in-out duration-300",
          visible ? "opacity-1 visible translate-y-0" : "opacity-0 invisible translate-y-[-100px]"
        )}
      >
        <span onClick={hide} className="absolute top-[5px] right-[20px] text-2xl cursor-pointer text-[#7f7f7f] hover:text-black">
          &times;
        </span>
        <div className="py-[16px] px-[20px]">
          <h2 className="md:text-lg text-base font-medium">{title}</h2>
        </div>
        <div className="py-[7px] px-[20px]">
          <h5 className="md:text-base text-sm">{body}</h5>
        </div>
        <div className="py-[16px] px-[20px]">
          <div className="flex flex-row justify-end gap-2">
            <Button onClick={submit} color={confirmButtonColor} text={confirmButtonText ?? "Aceptar"} isLoading={isLoading} isDisabled={isLoading} />
            <Button onClick={hide} text={cancelButtonText ?? "Cancelar"} color={"bg-neutral-600"} isLoading={isLoading} isDisabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Modal;
