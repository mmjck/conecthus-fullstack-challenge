"use client";
import {
  Breadcrumb,
  ConfirmDialog,
  CustomTypography,
  Input,
  PrimaryButton,
  SecondaryButton,
  SuccessPopUp,
} from "@/components";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import userService from "@/service/user-service";

import { useFormik } from "formik";
import * as Yup from "yup";

const UpdateUser = () => {
  const router = useRouter();
  const service = userService();

  const params = useParams();
  const { id } = params;

  const [data, setData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [registration, setRegistration] = useState("");
  const [disabledForm, setDisabledForm] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data
      ? {
          email: data.email,
          name: data.name,
          registration: data.registration,
          password: data.password,
          confirmPassword: data.password,
        }
      : {
          email: "",
          name: "",
          registration: "",
          password: "",
          confirmPassword: "",
        },
    validationSchema: Yup.object({
      email: Yup.string().email("E-mail inválido").required("Insira o Email"),
      name: Yup.string().required("Insira a nome"),
      registration: Yup.string().required("Insira a matrícula"),
      password: Yup.string()
        .min(6, "Mínimo de 6 caractéres")
        .max(6, "Máximo de 6 caractéres")
        .required("Insira a senha"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Senhas devem ser iguais")
        .required("Insira a senha"),
    }),
    validateOnChange: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getById(id);
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const { name, email, password, registration } = values;
    console.log(values);

    try {
      await service.update({
        id,
        name,
        email,
        password,
        registration,
      });
      setPopupVisible(true);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formData = () => {
    return (
      <form>
        <div className="mb-1">
          <div className="flex items-center justify-between">
            <span className="w-[200px] font-bold text-[12px] font-manrope text-[#0B2B25] tracking-normal">
              Dados do Usuário
            </span>
            <div className="w-full h-[0.5px] bg-[#707070]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder={"Insira o nome completo*"}
            helperText={"• Máx. 30 Caracteres"}
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            placeholder={"Insira o Nº da matrícula*"}
            helperText={"• Mín. 4 Letras | • Máx. 10 Caracteres"}
            maxLength={10}
            name={"registration"}
            onChange={formik.handleChange}
            value={formik.values.registration}
          />
          <Input
            type="text"
            placeholder={"Insira o E-mail*"}
            helperText={"• Máx. 40 Caracteres"}
            maxLength={40}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mt-10 mb-1">
          <div className="flex flex-row items-center">
            <span className="w-[200px] font-bold text-[12px] font-manrope text-[#0B2B25] tracking-normal text-left">
              Dados de acesso
            </span>
            <div className="w-full h-[0.5px] bg-[#707070]"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input
            type="password"
            placeholder={"Senha"}
            maxLength={6}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder={"Repetir Senha"}
            maxLength={6}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
        </div>

        <SuccessPopUp
          title={"Dados salvos com sucesso"}
          visible={popupVisible}
          onClose={hidePopup}
        ></SuccessPopUp>

        <div className="mt-6 flex items-center justify-end gap-x-2">
          <SecondaryButton title={"Cancelar"} onClick={openModal} />
          <PrimaryButton
            type="submit"
            title={"Salvar"}
            onClick={formik.handleSubmit}
            disabled={!(formik.isValid && formik.dirty)}
          />
        </div>
        <ConfirmDialog
          title={"Deseja cancelar?"}
          description={"Os dados inseridos não serão salvos"}
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={() => {
            closeModal();
            router.replace("/users/");
          }}
        />
      </form>
    );
  };

  return (
    <div className="h-screen bg-grey mt-10 p-5">
      <Breadcrumb items={["Usuários", "Cadastro de usuário"]}></Breadcrumb>

      <div className="mt-5 flex items-center">
        <Link href={"/users"}>
          <FontAwesomeIcon icon={faChevronLeft} size="sl" />
        </Link>
        <CustomTypography label={"Editar usuário"}></CustomTypography>
      </div>

      <div className="bg-white mt-2 p-5 rounded">{data && formData()}</div>
    </div>
  );
};

export default UpdateUser;
