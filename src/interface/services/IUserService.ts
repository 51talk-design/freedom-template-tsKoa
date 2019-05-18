import { UserModule } from "../../models/UserModel"

/** 
 * 
 * 用户相关服务接口
 * @interface
 */
export interface IUserService {

	/**
	 * 登录
	 * @param {string} account 登录账号， 用户手机号或邮箱
	 * @param {string} password 登录密码
	 * @returns {any} 通过校验时返回登录用户信息； 未通过校验抛出错误；
	 */
	login(account: string, password: string): Promise<UserModule.UserModel>;
}