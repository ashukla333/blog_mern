import { InputHook } from "@/app/components/constants/Elements/InputField";
import MainLogo from "@/app/components/constants/Elements/MainLogo";
import { TextContent } from "@/app/components/constants/Elements/Text";
import React from "react";
import { useForm } from "react-hook-form";
import {
  EmailRegex,
  NameRegex,
  passwordRegex,
} from "../../../../../../utils/regax/regax";
import { Button } from "@material-tailwind/react";
import { useSnackbar } from "notistack";
import {
  ChangePasswordUrlApi,
  loginUrlApi,
} from "../../../../../../Apis/ApiMethods/list";
import { useRouter } from "next/navigation";
import {
  customAxiosPOST,
  customAxiosPUT,
} from "../../../../../../Apis/ApiMethods/methods";
import userInfo from "../../../../../../Apis/urlConstants";

const ForgotPass = ({ setAuthType }) => {
  const FormFields = [
    {
      name: "password",
      subName: "Password",
      type: "password",
      validations: {
        required: "Password is Required",
        pattern: {
          value: passwordRegex,
          message: "Enter Valid Password",
        },
      },
      placeholder: "Enter Password",
    },
    {
      name: "confirmPassword",
      subName: "Confirm Password",
      type: "password",
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
      confirmPassword: "",
      password: "",
    },
  });
  const user = userInfo();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    data.userId = user._id;
    if (data) {
      const response = await customAxiosPUT(ChangePasswordUrlApi, data);
      try {
        if (response.status) {
          clearErrors();
          enqueueSnackbar(response.message, {
            variant: "success",
          });
          reset();
          setAuthType("login");
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
        text={"Enter Your New Password"}
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
          Change Password
        </Button>
        <div className="flex justify-between items-center">
          <TextContent
            text={"Login"}
            onClick={() => setAuthType("login")}
            className={
              "self-end cursor-pointer hover:text-primary-text-color text-sm hover:underline transition-all"
            }
          />
          <TextContent
            text={"Sign Up ?"}
            onClick={() => router.push("/signup")}
            className={
              "self-end cursor-pointer hover:text-primary-text-color text-sm hover:underline transition-all"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPass;
