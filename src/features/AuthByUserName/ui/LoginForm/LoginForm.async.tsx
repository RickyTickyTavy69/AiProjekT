import {lazy} from "react";

const LoginForm = lazy(
    () => import("./LoginForm.tsx")
);

export default LoginForm;
