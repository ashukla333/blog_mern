import { InputHook } from "@/app/components/constants/Elements/InputField";
import MainLogo from "@/app/components/constants/Elements/MainLogo";
import { TextContent } from "@/app/components/constants/Elements/Text";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EmailRegex, NameRegex, passwordRegex } from "../../../../../../utils/regax/regax";
import { Button } from "@material-tailwind/react";
import { useSnackbar } from "notistack";
import { loginUrlApi, userUrlAPi } from "../../../../../../Apis/ApiMethods/list";
import { useRouter } from "next/navigation";
import {  customAxiosPOST } from "../../../../../../Apis/ApiMethods/methods";


const LoginPage = ({ setAuthType }) => {





  const FormFields = [
    {
      name: "email",
      subName: "Email",
      type:"email",
      validations: {
        required: "User Email is Required",
        pattern: {
          value: EmailRegex,
          message: "Enter Valid email Name",
        },
      },
      placeholder: "Enter Email ",
    },
    {
      name: "password",
      subName: "Password",
      type:"password",
      validations: {
        required: "Password is Required",
        pattern: {
          value: passwordRegex,
          message: "Enter Valid Password",
        },
      },
      placeholder: "Enter Password",
    },
  ];

  const {
    handleSubmit,
    control,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router=useRouter()
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    if (data) {
      const response = await customAxiosPOST(loginUrlApi, data);
      try {
        if (response.status) {
          clearErrors();
          enqueueSnackbar(response.message, {
            variant: "success",
          });
          reset();
          localStorage.setItem("AuthToken",response.data.token)
          router.push('/')
        } else {
          enqueueSnackbar(response.message, {
            variant: "error",
          });
          console.debug({ msg: response.message });
        }
      } catch (error) {
        enqueueSnackbar(error, {
          variant: "warning",
        });
      }
    }
  };
  return (
    <div className="flex w-[95%] rounded-md sm:w-[400px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] gap-4 flex-col justify-center items-center p-8">
      <MainLogo />
      <TextContent
        text={"Welcome Back ! 👋"}
        className={"text-primary-text-color"}
      />
      <TextContent
        text={"Login to Your Account"}
        className={"text-primary-black-color font-sans w-max text-xl"}
      />

      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {FormFields?.map((field, index) => {
          return (
            <InputHook
              key={index}
              name={field?.name}
              subName={field?.subName}
              type={field?.type}
              subNameClassName={"text-[16px]"}
              className={
                "p-3 rounded-[5px] focus:outline-none border-[1px] border-grey-color focus:border-red-400 transition-all text-primary-text-color"
              }
              parentClassName={"gap-2"}
              control={control}
              errors={errors}
              rules={{ ...field?.validations }}
              placeholder={field?.placeholder}
            />
          );
        })}
        <Button
          type="submit"
          className="bg-primary-black-color w-full py-3 text-sm font-roboto leading-4 tracking-wider"
        >
          LOGIN
        </Button>
        <TextContent
          text={"Forgot Password ?"}
          onClick={() => setAuthType("forgot password")}
          className={
            "self-end cursor-pointer hover:text-primary-text-color text-sm hover:underline transition-all"
          }
        />
      </form>
    </div>
  );
};

export default LoginPage;
