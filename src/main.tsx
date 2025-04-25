import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CreateAccountPage from "./pages/CreateAccountPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6Ld_U7EqAAAAAIbcwuIy9J6CNLeo6pUcCmJ7eY9s">
      <RouterProvider router={router} />
    </GoogleReCaptchaProvider>
  </StrictMode>
);
