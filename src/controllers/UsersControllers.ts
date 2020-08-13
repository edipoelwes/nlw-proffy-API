import { Request, Response } from "express";
import db from "../database/connection";

export default class UsersController {
  async index(request: Request, response: Response) {
    const user = await db("users");

    return response.json({ user });
  }

  async create(request: Request, response: Response) {
    const { name, avatar, whatsapp, bio } = request.body;
    
    await db("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    return response.status(201).send();
  }
}
