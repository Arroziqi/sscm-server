"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
const express_1 = __importDefault(require("express"));
const public_router_1 = require("../route/public-router");
const error_middleware_1 = require("../middleware/error-middleware");
const api_1 = require("../route/api");
exports.web = (0, express_1.default)();
exports.web.use(express_1.default.json());
// TODO: Register Public Routes
exports.web.use(public_router_1.publicRouter);
// TODO: Register Private API
exports.web.use(api_1.apiRouter);
// TODO: Register middleware
exports.web.use(error_middleware_1.errorMiddleware);
