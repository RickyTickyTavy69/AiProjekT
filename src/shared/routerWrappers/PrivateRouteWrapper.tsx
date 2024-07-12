import React, {useEffect, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAuthData} from "@/entities/User/model/selectors/getAuthData/getAuthData.ts";
import {getIsAuthDataLoading} from "@/entities/User/model/selectors/getAuthData/getIsAuthDataLoading.ts";

const PrivateRouteWrapper = ({children}: {children: React.ReactNode}) => {

    const navigate = useNavigate();
    const authData = useSelector(getAuthData);
    const isLoading = useSelector(getIsAuthDataLoading);

    const authenticated = useMemo(() => !!(authData?.username && authData?.id), [authData]);

    useEffect(()=>{
        if(!isLoading && !authenticated){
            navigate("/");
        }
    }, [navigate, authenticated, isLoading])

    return(
        <>
            {children}
        </>
    )
}

export default PrivateRouteWrapper;
