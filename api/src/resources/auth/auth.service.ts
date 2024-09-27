import { AppDataSource } from "./../../config/ormconfig";
import { User } from "../../entities/users";
import { validatePasswordStrength } from "../../utils/validatePassword";
import { Request, Response } from "express";
import { hashPassword } from "../../utils/bcrypt.util";
import dotenv from "dotenv";

dotenv.config();

class AuthService {
  public async createUser(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    const userRepository = AppDataSource.getRepository(User);
    try {
      // On récupère les données envoyées dans le body de la requête
      const { username, email, password } = req.body;

      // Validation basique
      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }

      //Strong password
      const passwordError = validatePasswordStrength(password);
      if (passwordError) {
        throw new Error(passwordError);
      }

      const existingUser = await userRepository.findOne({
        where: { email },
      });
      if (existingUser) {
        throw new Error("Email already in use.");
      }
      // Créer un nouvel utilisateur via UserService
      const passhash = await hashPassword(password);
      const newUser = userRepository.create({
        username,
        email,
        password: passhash,
      });
      await userRepository.save(newUser);

      // Retourner une réponse de succès
      return res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error: unknown) {
      // En cas d'erreur, on renvoie une réponse avec le code d'erreur 500
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";

      console.error("Error creating user:", error);
      return res
        .status(500)
        .json({ message: "Error creating user", error: errorMessage });
    }
  }
}

export default AuthService;
