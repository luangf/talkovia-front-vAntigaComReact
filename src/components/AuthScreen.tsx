import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "../icons/GoogleIcon";
import {
  Circle,
  CircleCheck,
  Eye,
  EyeClosed,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Input from "./Input";

interface AuthScreenProps {
  authPage: "login" | "sign" | "forgot";
}

function AuthScreen({ authPage }: AuthScreenProps) {
  const navigate: NavigateFunction = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  //const [email, setEmail] = useState<string>("");
  //const [password, setPassword] = useState<string>("");

  const { register, handleSubmit } = useForm();

  let title: string = "";
  let buttonGoogle: string = "";
  let haveAccount: string = "";
  let actionHaveAccount: string = "";
  let mainButton: string = "";

  if (authPage === "login") {
    title = "Login";
    buttonGoogle = "Continue";
    haveAccount = "Don’t have an account? ";
    actionHaveAccount = "Sign up";
    mainButton = "Log In";
  } else if (authPage === "sign") {
    title = "Sign Up";
    buttonGoogle = "Sign up";
    haveAccount = "Already have an account? ";
    actionHaveAccount = "Log in";
    mainButton = "Sign Up";
  } else if (authPage === "forgot") {
    title = "Forgot your password?";
    mainButton = "Email Me";
  }

  console.log("render");
  console.log("render2");

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-custom-blue2 to-custom-blue3 sm:min-h-screen">
      <main className="bg-white p-3 w-full h-full sm:h-auto sm:border-2 sm:border-black sm:rounded-md sm:shadow-2xl sm:w-[30rem]">
        <img
          className="mx-auto mb-3"
          width={175}
          src="./src/assets/img/logo-3.png"
          alt="Logo Talkovia"
        />
        <header className="text-2xl font-bold mb-3">{title}</header>

        {(authPage === "login" || authPage === "sign") && (
          <button className="flex justify-center items-center gap-2 border-2 border-black p-1 w-full cursor-pointer rounded-md shadow-md hover:bg-blue-100 my-4">
            <GoogleIcon />
            <span>{buttonGoogle} with Google</span>
          </button>
        )}

        {(authPage === "login" || authPage === "sign") && (
          <div className="flex items-center gap-5">
            <hr className="w-1/2 bg-gray-500" />
            <span>or</span>
            <hr className="w-1/2 bg-gray-500" />
          </div>
        )}

        {authPage === "forgot" && (
          <p className="mb-3">
            We will send you an email with instructions on how to reset your
            password.
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <div className="relative">
            <Mail className="absolute bottom-2.5 left-1" />
            <Input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          {(authPage === "login" || authPage === "sign") && (
            <>
              <label htmlFor="password">Password:</label>

              <div className="relative">
                <Lock className="absolute bottom-2.5 left-1" />
                {passwordVisible ? (
                  <Eye
                    size={30}
                    className="pr-0.5 h-full border-l-2 border-black absolute right-0 cursor-pointer hover:bg-blue-100 hover:border-2 hover:rounded-r-md"
                    onClick={() => setPasswordVisible(false)}
                  />
                ) : (
                  <EyeClosed
                    size={30}
                    className="pr-0.5 h-full border-l-2 border-black absolute right-0 cursor-pointer hover:bg-blue-100 hover:border-2 hover:rounded-r-md"
                    onClick={() => setPasswordVisible(true)}
                  />
                )}
                <Input
                  paddingRight="pr-9"
                  {...register("password")}
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                />
              </div>

              {authPage === "sign" && (
                <>
                  <div className="my-1">
                    <p>Your password must contain at least</p>
                    <ul>
                      <li className="flex gap-1">
                        <Circle />
                        <CircleCheck className="text-green-600 hidden" />1
                        letter
                      </li>
                      <li className="flex gap-1">
                        <Circle />
                        <CircleCheck className="text-green-600 hidden" />1
                        number or special character (example: # ? ! &)
                      </li>
                      <li className="flex gap-1">
                        <Circle />
                        <CircleCheck className="text-green-600 hidden" />
                        10 characters
                      </li>
                    </ul>
                  </div>
                  <label htmlFor="username">Username:</label>
                  <div className="relative">
                    <User className="absolute bottom-2.5 left-1" />
                    <Input
                      {...register("username")}
                      type="text"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    className="cursor-pointer h-5 w-5"
                    type="checkbox"
                    id="remember-me-checkbox"
                    name="remember-me-checkbox"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="remember-me-checkbox"
                    className="hover:underline cursor-pointer pl-1.5"
                  >
                    Remember me
                  </label>
                </div>

                {authPage === "login" && (
                  <a
                    onClick={() => {
                      navigate("/forgot-password");
                    }}
                    className="text-custom-blue cursor-pointer rounded-md hover:underline"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
            </>
          )}
          {authPage === "sign" && (
            <div className="flex">
              <input
                className="cursor-pointer h-5 w-5 flex-shrink-0 mt-1"
                type="checkbox"
                id="agree"
                name="agree"
              />
              <label htmlFor="agree" className="cursor-pointer pl-1.5">
                <p>
                  I agree to the{" "}
                  <a
                    className="text-custom-blue cursor-pointer hover:underline"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Terms of Service
                  </a>
                  . For more information about Talkovia's privacy practices, see
                  the{" "}
                  <a
                    className="text-custom-blue cursor-pointer hover:underline"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Talkovia Privacy Statement
                  </a>
                  . We'll occasionally send you account-related emails.
                </p>
              </label>
            </div>
          )}

          <button className="text-white mt-3 min-w-full block bg-custom-blue p-1.5 border-2 border-black rounded-md shadow-md hover:bg-blue-500">
            {mainButton}
          </button>

          {authPage === "forgot" && (
            <a
              onClick={() => {
                navigate("/");
              }}
              className="text-custom-blue cursor-pointer hover:underline mx-auto"
            >
              Go Back
            </a>
          )}

          {(authPage === "login" || authPage === "sign") && (
            <p className="text-center">
              {haveAccount}
              <a
                onClick={() => {
                  if (authPage === "login") {
                    navigate("/create-account");
                  } else {
                    navigate("/");
                  }
                }}
                className="text-custom-blue cursor-pointer hover:underline"
              >
                {actionHaveAccount}
              </a>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default AuthScreen;
