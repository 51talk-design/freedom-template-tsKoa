import { Service, Inject } from "typedi";
import { IUserService } from "../interface/services/IUserService";
const logger = require("../utils/logger.js").getLogger("UserService.ts");

/**
 * 用户相关service，提供以下能力
 * 1、用户登录 ——login
 * @class
 * @implements {IUserService}
 */
@Service("userService")
export class UserService implements IUserService {

  /**
	 * 登录
	 * @param {string} account 登录账号， 用户手机号或邮箱
	 * @param {string} password 登录密码
	 * @returns {any} 通过校验时返回登录用户信息； 未通过校验抛出错误；
	 */
  login(account: string, password: string): Promise<import("../models/UserModel").UserModule.UserModel> {
    throw new Error("Method not implemented.");
  }
}