import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store.ts";
import { StateSchema } from "../config/StateSchema.ts";
import { useNavigate } from "react-router-dom";

type ProviderProps = {
  children: React.ReactNode;
  initialState?: StateSchema;
};

const StoreProvider = ({ children, initialState }: ProviderProps) => {
    const navigate = useNavigate();

  const store = createReduxStore(navigate, initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
