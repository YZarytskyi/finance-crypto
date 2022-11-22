import style from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendButton from "@mui/material/Button";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import sprite from "../../assets/images/icons.svg";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("⚠ Invalid email")
    .required("⚠ This field is required"),
  password: yup.string().required("⚠ This field is required"),
  isAgree: yup
    .boolean()
    .isTrue("⚠ You have to agree with Terms of Use and Privacy Policy"),
});

interface IFormInputs {
  email: string;
  password: string;
  isAgree: boolean;
}

interface SignUpProps {
  setModalAuthShow: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}

const SignUp: React.FC<SignUpProps> = ({setModalAuthShow}) => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/")
        setModalAuthShow(false)
      })
      .catch((error) => {
        const errorMessage = error.message.slice(10);
        setError(`⚠ ${errorMessage}`);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: IFormInputs) => {
    setError("");
    setLoading(true);
    await signUp(data.email, data.password);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
      <label htmlFor="email" className={style.formLabel}>
        Email
      </label>
      <input
        id="email"
        {...register("email")}
        placeholder="Enter your email"
        className={style.formInput}
      />
      <p className={style.formErrorMessage}>
        {errors.email?.message ? errors.email?.message : " "}
      </p>

      <label htmlFor="password" className={style.formLabel}>
        Password
      </label>
      <input
        id="password"
        {...register("password")}
        type="password"
        placeholder="Enter your password..."
        className={style.formInput}
      />
      <p className={style.formErrorMessage}>
        {errors.password?.message ? errors.password?.message : " "}
      </p>

      <label className={style.formLabel + " " + style.labelCheckbox}>
        <input
          {...register("isAgree")}
          type="checkbox"
          className={style.formCheckbox + " " + "hidden"}
        />
        <svg className={style.formCheckboxIcon} width="17" height="16">
          <use href={`${sprite}#check`}></use>
        </svg>
        I agree with <a href="">Terms of Use</a> and{" "}
        <a href="">Privacy Policy</a>.
      </label>
      <p className={style.formErrorMessage}>
        {errors.isAgree?.message ? errors.isAgree?.message : " "}
        {error && error}
      </p>

      <SendButton
        type="submit"
        variant="outlined"
        disabled={loading}
        className={style.formButton}
      >
        Create an account
      </SendButton>
    </form>
  );
};

export default SignUp;
