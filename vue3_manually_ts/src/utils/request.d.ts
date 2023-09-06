import { AxiosInstance } from "axios"
declare module "requestjs" {
    export default AxiosInstance
}

declare module "@req" {
    export default AxiosInstance
}