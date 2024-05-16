import Swal from "sweetalert2";

type Estado = "success" | "error" | "warning" | "info";

export const Alert = (message: string, status: Estado) => {
  Swal.fire({
    icon: status,
    title: message,
    showConfirmButton: false,
    timer: 3500,
  });
};
