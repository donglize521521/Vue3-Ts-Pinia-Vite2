import { login, getCurrentUser } from "@/api/auth"
import { LoginParams } from "./typings/auth"
const loginParams: LoginParams = { username: "zhufeng", password: "123456" }
login(loginParams).then((res) => {
  const token: string = res.data
  window.sessionStorage.setItem("token", token)
  getCurrentUser().then((res) => {
    console.log(res.data)
  })
})
