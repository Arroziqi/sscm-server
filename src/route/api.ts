import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";
import { CompetitionController } from "../controller/competition-controller";
import { PortfolioController } from "../controller/portfolio-controller";
import { ExperienceController } from "../controller/experience-controller";
import { ActivityController } from "../controller/activity-controller";

export const apiRouter = express.Router();
apiRouter.use(authMiddleware);

// User API
apiRouter.get("/api/users/current", UserController.get);
apiRouter.patch("/api/users/current", UserController.update);
apiRouter.delete("/api/users/current", UserController.logout);

// Competition API
apiRouter.post("/api/competitions", CompetitionController.create);
apiRouter.get(
  "/api/competitions/:competitionId(\\d+)",
  CompetitionController.get
);
apiRouter.put(
  "/api/competitions/:competitionId(\\d+)",
  CompetitionController.update
);
apiRouter.delete(
  "/api/competitions/:competitionId(\\d+)",
  CompetitionController.remove
);
apiRouter.get("/api/competitions/search", CompetitionController.search);
apiRouter.get("/api/competitions", CompetitionController.list);

// Portfolio API
apiRouter.post("/api/portfolio", PortfolioController.create);
apiRouter.put("/api/portfolio", PortfolioController.update);
apiRouter.get("/api/portfolio", PortfolioController.get);

// Experience API
apiRouter.post("/api/experience", ExperienceController.create);
apiRouter.get("/api/experience/:experienceId(\\d+)", ExperienceController.get);
apiRouter.get("/api/experience", ExperienceController.list);
apiRouter.put(
  "/api/experience/:experienceId(\\d+)",
  ExperienceController.update
);
apiRouter.delete(
  "/api/experience/:experienceId(\\d+)",
  ExperienceController.remove
);

// Activity API
apiRouter.post("/api/activity", ActivityController.create);
apiRouter.get("/api/activity/:activityId(\\d+)", ActivityController.get);
apiRouter.get("/api/activity", ActivityController.list);
apiRouter.put("/api/activity/:activityId(\\d+)", ActivityController.update);
apiRouter.delete("/api/activity/:activityId(\\d+)", ActivityController.remove);
