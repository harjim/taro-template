/**
 * 项目后台 API 地址配置
 */
const HOST =
  process.env.NODE_ENV === "development" ? "开发环境地址" : "生产环境地址"

export default {
  login: `${HOST}/login`, // 登录
  about: `${HOST}/about` // 登录
}
