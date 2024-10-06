// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import Button from "../button/button";
import { combineClasses } from "../../helpers/utils";

// -------------------------------------------------------
// Model
// -------------------------------------------------------

enum AlertType {
  success,
  error,
  info,
  warning,
}

interface AlertProps {
  type: AlertType;
  title: string;
  visible: boolean;
  message: string;
  setVisible: (isVisible: boolean) => void;
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const Alert: React.FC<AlertProps> = ({ type, title, message, visible, setVisible }) => {
  const alertRef = useRef<HTMLDivElement>(null);

  const clickOutsideContent = useCallback(
    (e: MouseEvent) => {
      if (e.target === alertRef?.current) {
        setVisible(false);
      }
    },
    [setVisible]
  );

  const hide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const color = useMemo(
    () =>
      type === AlertType.error
        ? "bg-red-600"
        : type === AlertType.warning
        ? "bg-orange-500"
        : type === AlertType.info
        ? "bg-sky-500"
        : "bg-green-500",
    [type]
  );

  useEffect(() => {
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [clickOutsideContent]);

  return (
    <div
      ref={alertRef}
      className={combineClasses(
        "fixed z-20 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50 ease-in-out duration-300",
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        className={combineClasses(
          "w-full h-auto max-w-[550px] my-[15%] mx-auto bg-white rounded-none relative ease-in-out duration-300",
          visible ? "opacity-1 visible translate-y-0" : "opacity-0 invisible translate-y-[-100px]"
        )}
      >
        <span onClick={hide} className="absolute top-[5px] right-[20px] text-2xl cursor-pointer text-[#7f7f7f] hover:text-black">
          &times;
        </span>
        <div className={combineClasses("w-full h-[5px]", color)}></div>
        <div className="py-[16px] px-[20px]">
          <h2 className="font-medium md:text-lg text-base">{title}</h2>
        </div>
        <div className="py-[7px] px-[20px]">
          <h5 className="md:text-base text-sm">{message}</h5>
        </div>
        <div className="py-[16px] px-[20px]">
          <div className="flex flex-row-reverse">
            <Button text={"Aceptar"} onClick={hide} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export default Alert;

export { AlertType };
