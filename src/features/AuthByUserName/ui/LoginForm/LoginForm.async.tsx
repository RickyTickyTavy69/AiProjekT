import {lazy} from "react";

const LoginForm = lazy(
    async () => await import("./LoginForm.tsx")
);

export default LoginForm;
