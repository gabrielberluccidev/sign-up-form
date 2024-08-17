const spanError = document.querySelector(".psw-error");
const psw = document.getElementById("#password");
const pswConfirm = document.getElementById("#confirm-password");

const confirmPsw = () => {
  if (pswConfirm.value === psw.value) {
    spanError.textContent = "";
  } else {
    spanError.textContent = "*Password do not match";
  }
};

psw.addEventListener("input", confirmPsw);
pswConfirm.addEventListener("input", confirmPsw);
