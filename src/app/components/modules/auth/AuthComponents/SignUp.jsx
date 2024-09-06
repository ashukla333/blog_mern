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
import { customAxiosPOST } from "../../../../../../Apis/ApiMethods/methods";
import { signupUrlApi } from "../../../../../../Apis/ApiMethods/list";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router=useRouter()
  const FormFields = [
    {
      name: "name",
      subName: "Username",
      type: "text",
      validations: {
        required: "User Name is Required",
        pattern: {
          value: NameRegex,
          message: "Enter Valid User Name",
        },
      },
      placeholder: "Enter User Name",
    },
    {
      name: "email",
      subName: "Email",
      type: "email",
      validations: {
        required: "Email is Required",
        pattern: {
          value: EmailRegex,
          message: "Enter Valid Email",
        },
      },
      placeholder: "Enter Email",
    },
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
      type: "password",
      subName: "Confirm Password",
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
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    if (data) {
      const response = await customAxiosPOST(signupUrlApi, data);
      try {
        if (response.status) {
          clearErrors();
          enqueueSnackbar(response.message, {
            variant: "success",
          });
          reset();
          router.push('/auth')
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
    <div className="flex w-[95%] rounded-md sm:w-[550px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] gap-4 flex-col justify-center items-center p-8">
      <MainLogo />
      <TextContent
        text={"Join Us Today! 🚀"}
        className={"text-primary-text-color capitalize"}
      />
      <TextContent
        text={"Create your account and start your journey with us."}
        className={
          "text-primary-black-color sm:text-base text-sm font-sans w-max "
        }
      />

      <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 my-3  gap-4">
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
        </div>

        <div className="flex justify-center  items-center">
          <Button
            type="submit"
            className="bg-primary-black-color w-full py-3 text-sm font-roboto leading-4 tracking-wider"
          >
            Sign Up
          </Button>
        </div>

        <div className="flex justify-end py-2 items-center">
        <TextContent
        text={"Log in your account"}
        onClick={()=>{router.push("/auth")}}
        className={"text-primary-black-color underline font-sans cursor-pointer w-max text-sm"}
      />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
