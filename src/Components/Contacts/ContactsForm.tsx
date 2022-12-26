import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendButton from "@mui/material/Button";
import Modal from "../Common/Modal/Modal";
import style from "./Contacts.module.scss";

const schema = yup.object({
  fullName: yup.string().required("⚠ This field is required"),
  email: yup
    .string()
    .email("⚠ Invalid email")
    .required("⚠ This field is required"),
  message: yup.string().required("⚠ This field is required"),
});

interface IFormInputs {
  fullName: string;
  email: string;
  message: string;
}

const ContactsForm = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = (data: IFormInputs) => setModalShow(true);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={style.contactsForm}
      autoComplete="off"
    >
      <label className={style.formLabel}>
        Full Name
        <input
          {...register("fullName")}
          className={style.formInput}
          placeholder="Enter your name..."
        />
        <p className={style.formErrorMessage}>
          {errors.fullName?.message ? errors.fullName?.message : " "}
        </p>
      </label>
      <label className={style.formLabel}>
        Email
        <input
          {...register("email")}
          className={style.formInput}
          placeholder="Enter your email..."
        />
        <p className={style.formErrorMessage}>
          {errors.email?.message ? errors.email?.message : " "}
        </p>
      </label>
      <label className={style.formLabel}>
        Message
        <textarea
          {...register("message")}
          className={style.formTextarea}
          placeholder="Enter your message..."
        />
        <p className={style.formErrorMessage}>
          {errors.message?.message ? errors.message.message : " "}
        </p>
      </label>
      <SendButton type="submit" variant="outlined" className={style.formButton}>
        Send
      </SendButton>
      <Modal modalShow={modalShow} setModalShow={setModalShow}>
        <h1 className={style.modalTitle}>Thank you for getting in touch!</h1>
        <p className={style.modalText}>
          We have received your message and would like to thank you for writing
          to us. We will reply by email as soon as possible.
        </p>
      </Modal>
    </form>
  );
};

export default ContactsForm;
