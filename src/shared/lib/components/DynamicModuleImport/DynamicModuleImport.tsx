import React, { useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import {
  CustomStore,
  StateSchema,
} from "../../../../app/providers/StoreProvider/config/StateSchema.ts";

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer;
};

type DynamicModuleImportProps = {
  children: React.ReactNode;
  ReducersList: ReducersList;
  removeAfterUnmount?: boolean;
};

const DynamicModuleImport = ({
  children,
  ReducersList,
  removeAfterUnmount = false,
}: DynamicModuleImportProps) => {
  const store = useStore() as CustomStore;

  useEffect(() => {
    for (const [key, reducer] of Object.entries(ReducersList)) {
      store.ReducerManager.add(key as keyof StateSchema, reducer);
    }


    return () => {
      if(removeAfterUnmount){
        for (const [key] of Object.keys(ReducersList)) {
          store.ReducerManager.remove(key as keyof StateSchema);
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default DynamicModuleImport;
