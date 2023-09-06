import { AxiosInstance } from "axios"
declare module "request" {
    export default AxiosInstance
}

declare module "@req" {
    export default AxiosInstance
}

// 这个文件必须和 request.js 同名吗 request.d.ts , 我问AI 说不用，
// 我记得 ts 会加载所有项目下的 d.ts 文件