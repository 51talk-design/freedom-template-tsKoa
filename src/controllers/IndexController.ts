import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
  Ctx,
  Render
} from "freedom-routing-controllers";

/**
 * 主页控制器
 * @class
 */
@Controller()
export class IndexController {

  /**
   * 主页
   * @return {string} 返回主页模板html
   */
  @Get("/")
  @Render("index.html")
  async getIndexAction(@Ctx() ctx): Promise<any> {
    return {
      title: "freedom大前端倾心打造"
    };
  }
}