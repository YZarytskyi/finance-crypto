import { useState } from "react";
import Modal from "../Common/Modal";
import style from "./Header.module.scss";
import NavLinks from "./NavLinks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendButton from "@mui/material/Button";

const schema = yup.object({
  email: yup
    .string()
    .email("⚠ Invalid email")
    .required("⚠ This field is required"),
  password: yup.string().required("⚠ This field is required"),
});

interface IFormInputs {
  email: string;
  password: string;
}

const PCNav = () => {
  const [modalLoginShow, setModalLoginShow] = useState<boolean>(false);
  const [modalSignUpShow, setModalSignUpShow] = useState<boolean>(false);
  const [toggleLogin, setToggleLogin] = useState<boolean>(true);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = (data: IFormInputs) => console.log(data);

  const handleClickModalLogin = () => {
    setModalLoginShow(true);
  };

  const handleClickModalSignUp = () => {
    setModalSignUpShow(true);
  };

  const handleClickToggleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const classes = [...(e.target as Element).classList];
    const isCurrent = classes.find(item => item.includes("Current"))
    if (!isCurrent) setToggleLogin(prev => !prev)
  };

  return (
    <nav className={style.pcNav}>
      <NavLinks />
      <div className={style.authBtns}>
        <button
          type="button"
          className={style.loginBtn}
          onClick={() => handleClickModalLogin()}
        >
          Login
        </button>

        <Modal modalShow={modalLoginShow} setModalShow={setModalLoginShow}>
          <div className={style.modalAuthContent}>

            <ul className={style.modalAuthNav}>
              <li className={style.modalAuthNavItem}>
                <a href="" className={style.modalAuthNavLink + " " + (toggleLogin && style.NavLinkCurrent)} onClick={(e) => handleClickToggleLogin(e)}>
                  Login
                </a>
              </li>
              <li className={style.modalAuthNavItem}>
                <a href="" className={style.modalAuthNavLink + " " + (toggleLogin ? "" : style.NavLinkCurrent)} onClick={(e) => handleClickToggleLogin(e)}>
                  Sign Up
                </a>
              </li>
            </ul>
            

            <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
              <label htmlFor="login" className={style.formLabel}>
                Email
              </label>
              <input
                id="login"
                {...register("email")}
                className={style.formInput}
              />
              <p className={style.formErrorMessage}>
                {errors.email?.message ? errors.email?.message : " "}
              </p>

              <label htmlFor="signUp" className={style.formLabel}>
                Password
              </label>
              <input
                id="signUp"
                {...register("password")}
                type="password"
                className={style.formInput}
              />
              <p className={style.formErrorMessage}>
                {errors.password?.message ? errors.password?.message : " "}
              </p>

              <SendButton
                type="submit"
                variant="outlined"
                className={style.formButton}
              >
                Send
              </SendButton>
            </form>
    
            {toggleLogin ? null : <p>This is Sign Up!</p>}
          </div>
        </Modal>

        <button
          type="button"
          className={style.signUpBtn}
          onClick={() => handleClickModalSignUp()}
        >
          Sign Up
        </button>

        <Modal modalShow={modalSignUpShow} setModalShow={setModalSignUpShow}>
          <h1 className={style.modalTitle}>Sign Up</h1>
          <p className={style.modalText}>
            We have received your message and would like to thank you for
            writing to us. We will reply by email as soon as possible.
          </p>
        </Modal>
      </div>
    </nav>
  );
};

export default PCNav;
