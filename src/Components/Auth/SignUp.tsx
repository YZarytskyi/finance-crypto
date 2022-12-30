import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SendButton from '@mui/material/Button';
import { Notify } from 'notiflix';
import { auth } from '../Firebase/Firebase';
import sprite from 'assets/images/icons.svg';
import style from './Auth.module.scss';

const schema = yup.object({
  email: yup
    .string()
    .email('⚠ Invalid email')
    .required('⚠ This field is required'),
  password: yup.string().required('⚠ This field is required'),
  isAgree: yup
    .boolean()
    .isTrue('⚠ You have to agree with Terms of Use and Privacy Policy'),
});

interface IFormInputs {
  email: string;
  password: string;
  isAgree: boolean;
}

interface SignUpProps {
  setModalAuthShow: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void;
}

export const SignUp: React.FC<SignUpProps> = ({ setModalAuthShow }) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setModalAuthShow(false);
      Notify.success('You successfully signed up');
    } catch (error: any) {
      const errorMessage = error.message.slice(10);
      setError(`⚠ ${errorMessage}`);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInputs) => {
    setError('');
    setLoading(true);
    signUp(data.email, data.password);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
      <label htmlFor="emailSignUp" className={style.formLabel}>
        Email
      </label>
      <input
        id="emailSignUp"
        {...register('email')}
        placeholder="Enter your email"
        className={style.formInput}
      />
      <p className={style.formErrorMessage}>{errors.email?.message || ' '}</p>

      <label htmlFor="passwordSignUp" className={style.formLabel}>
        Password
      </label>
      <input
        id="passwordSignUp"
        {...register('password')}
        type="password"
        placeholder="Enter your password..."
        className={style.formInput}
      />
      <p className={style.formErrorMessage}>
        {errors.password?.message || ' '}
      </p>

      <label className={`${style.formLabel} ${style.labelCheckbox}`}>
        <input
          {...register('isAgree')}
          type="checkbox"
          className={style.formCheckbox + ' ' + 'hidden'}
        />
        <svg className={style.formCheckboxIcon} width="17" height="16">
          <use href={`${sprite}#check`}></use>
        </svg>
        I agree with <a href="">Terms of Use</a> and{' '}
        <a href="">Privacy&nbsp;Policy</a>.
      </label>
      <p className={style.formErrorMessage}>
        {errors.isAgree?.message || ' '}
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
