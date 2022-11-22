import style from './Auth.module.scss'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendButton from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import { useAppDispatch } from '../../Store/hooks';
import { setCurrentUser } from '../../Store/Reducers/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("⚠ Invalid email")
    .required("⚠ This field is required"),
  password: yup.string().required("⚠ This field is required"),
});

interface LoginProps {
  setModalAuthShow: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}

const Login: React.FC<LoginProps> = ({setModalAuthShow}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(setCurrentUser(user));
      navigate("/");
      setModalAuthShow(false);
    })
    .catch((error) => {
      const errorMessage = error.message.slice(10);
      setError(`⚠ ${errorMessage}`)
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: IFormInputs) => {
    setError("");
    setLoading(true);
    await login(data.email, data.password);
    setLoading(false)
    }

  return(
    <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
          <label htmlFor="email" className={style.formLabel}>
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            placeholder="Enter your email..."
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
  );
};

export default Login;