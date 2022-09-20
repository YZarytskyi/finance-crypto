import style from "./Contacts.module.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Modal } from "react-bootstrap";
import SendButton from "@mui/material/Button";

const schema = yup.object({
  fullName: yup.string().required("⚠ This field is required"),
  email: yup
    .string()
    .email("Invalid email")
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full Name
        <input {...register("fullName")} />
        <p>{errors.fullName?.message ? errors.fullName?.message : " "}</p>
      </label>
      <label>
        Email
        <input {...register("email")} />
        <p>{errors.email?.message ? errors.email?.message : " "}</p>
      </label>
      <label className={style.formTextarea}>
        Message
        <textarea {...register("message")} />
        <p>{errors.message?.message ? errors.message.message : " "}</p>
      </label>
      <SendButton type="submit" variant="outlined">
        Send
      </SendButton>
      <ModalContact show={modalShow} onHide={() => setModalShow(false)} />
    </form>
  );
};

export default ContactsForm;

interface ModalContactProps {
  show: boolean;
  onHide: () => void;
}

const ModalContact: React.FC<ModalContactProps> = (props) => {
  return (
    <Modal
      {...props}
      style={{
        overflowY: "scroll",
      }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={style.modal}>
        <h1>Thank you for getting in touch!</h1>
        <br />
        <p>
          We have received your message and would like to thank you for writing
          to us. We will reply by email as soon as possible.
          <div>Talk to you soon.</div>
        </p>
        <div>
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
