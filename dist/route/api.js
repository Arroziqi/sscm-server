"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth-middleware");
const user_controller_1 = require("../controller/user-controller");
const competition_controller_1 = require("../controller/competition-controller");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.use(auth_middleware_1.authMiddleware);
// User API
exports.apiRouter.get("/api/users/current", user_controller_1.UserController.get);
exports.apiRouter.patch("/api/users/current", user_controller_1.UserController.update);
exports.apiRouter.delete("/api/users/current", user_controller_1.UserController.logout);
// Competition API
exports.apiRouter.post("/api/competitions", competition_controller_1.CompetitionController.create);
exports.apiRouter.get("/api/competitions/:competitionId(\\d+)", competition_controller_1.CompetitionController.get);
exports.apiRouter.put("/api/competitions/:competitionId(\\d+)", competition_controller_1.CompetitionController.update);
exports.apiRouter.delete("/api/competitions/:competitionId(\\d+)", competition_controller_1.CompetitionController.remove);
exports.apiRouter.get("/api/competitions", competition_controller_1.CompetitionController.search);
