import css from "./ErrorMessage.module.css";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    toast(message, {
      className: css.toaster,
      iconTheme: {
        className: css.toasterIcon,
        primary: "var(--toastify-icon-color-primary)",
        secondary: "var(--toastify-icon-color-secondary)",
      },
    });
  }, [message]);
  return;
  <div>
    <Toaster position="top-center" reverseOrder={true} />
  </div>;
};

export default ErrorMessage;
