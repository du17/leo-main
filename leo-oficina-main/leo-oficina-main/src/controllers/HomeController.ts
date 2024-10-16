import { Request, Response } from "express";

export class HomeController {
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }

  public Index() {
    return this.res.render("home/index.ejs");
  }
}
