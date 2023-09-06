import { AxiosInstance } from "axios"
declare module "request" {
    export default AxiosInstance
}

declare module "@req" {
    export default AxiosInstance
}