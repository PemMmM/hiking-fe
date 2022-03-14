import { toast } from "react-toastify";

const notify = (message, options = {}) => {
  toast(message, {
    position: "bottom-left",
    autoClose: "3000",
    hideProgressBar: true,
    newestOnTop: false,
    rtl: "false",
    ...options,
  });
};

export default notify;
