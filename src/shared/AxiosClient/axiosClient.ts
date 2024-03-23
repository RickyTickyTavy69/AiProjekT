import axios, {AxiosInstance} from "axios";

type ClientOptions = {
    baseURL: string;
}

class AxiosClient{
    public readonly apiInstance: AxiosInstance;
    constructor({baseURL}: ClientOptions){
        this.apiInstance = axios.create({baseURL})
    }
    // copied from work project, see how the generics work
    public apiGet<R>(url: string, params?: unknown): Promise<R> {
        return this.apiInstance.get(url, { params });
    }

    public apiPost() {

    }

    public apiPut(){

    }

    public apiDelete(){

    }
}

console.log(AxiosClient);
