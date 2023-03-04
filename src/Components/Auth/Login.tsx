import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Notify } from "notiflix";
import { auth } from "../Firebase/Firebase";
import { COOKIE_TOKEN_NAME, setCookie } from "utils/cookie";
import { setIsAuth } from "Store/Reducers/authSlice";
import { useAppDispatch } from "hooks/redux-hooks";
import sprite from "assets/images/icons.svg";
import SendButton from "@mui/material/Button";
import style from "./Auth.module.scss";

interface IFormInputs {
  email: string;
  password: string;
}

interface LoginProps {
  setModalAuthShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const schema = yup.object({
  email: yup
    .string()
    .email("⚠ Invalid email")
    .required("⚠ This field is required"),
  password: yup.string().required("⚠ This field is required"),
});

export const Login = ({ setModalAuthShow }: LoginProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogIn = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setCookie(COOKIE_TOKEN_NAME, user.uid);
      setModalAuthShow(false);
      dispatch(setIsAuth(true));
      document.body.classList.remove("overflow");
      Notify.success(`Hi, you logged in successfully`);
    } catch (error: any) {
      const errorMessage = error.message.slice(10);
      setError(`⚠ ${errorMessage}`);
    }
  };

  const handleClickGoogleAuth: React.MouseEventHandler<
    HTMLButtonElement
  > = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken as string;
      setCookie(COOKIE_TOKEN_NAME, token);
      setModalAuthShow(false);
      dispatch(setIsAuth(true));
      document.body.classList.remove("overflow");
      Notify.success(`Hi, you logged in successfully`);
    } catch ({ message }) {
      Notify.failure(message as string);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = (data: IFormInputs) => {
    setError("");
    setLoading(true);
    handleLogIn(data.email, data.password);
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
        <label htmlFor="emailLogin" className={style.formLabel}>
          Email
        </label>
        <input
          id="emailLogin"
          {...register("email")}
          placeholder="Enter your email..."
          className={style.formInput}
        />
        <p className={style.formErrorMessage}>
          {errors.email?.message ? errors.email?.message : " "}
        </p>

        <label htmlFor="passwordLogin" className={style.formLabel}>
          Password
        </label>
        <input
          id="passwordLogin"
          {...register("password")}
          type="password"
          placeholder="Enter your password..."
          className={style.formInput}
        />
        <p className={style.formErrorMessage}>
          {errors.password?.message ? errors.password?.message : " "}
          {error && error}
        </p>
        <SendButton
          type="submit"
          variant="outlined"
          disabled={loading}
          className={style.formButton}
        >
          Log In
        </SendButton>
      </form>
      <p className={style.orText}>Or</p>
      <button
        type="button"
        className={style.googleAuth}
        onClick={handleClickGoogleAuth}
      >
        <svg className={style.iconGoogle}>
          <use href={sprite + "#google"} />
        </svg>
        Continue with Google
      </button>
    </>
  );
};
