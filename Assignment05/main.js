"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//This is the code of "main.ts file" in which we importing the function
const marksheet_js_1 = __importDefault(require("./marksheet.js"));
//Arguments to the function
const result = (0, marksheet_js_1.default)(98, 92, 88, 79, 95);
console.log(`My Result is : ${result}%`);
