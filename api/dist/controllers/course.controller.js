"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeInstructor = exports.updateInstructors = exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getCourse = exports.getCourses = void 0;
var typeorm_1 = require("typeorm");
var Course_1 = require("../models/Course");
var User_1 = require("../models/User");
var getCourses = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, courses, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                return [4 /*yield*/, courseRepository.find()];
            case 1:
                courses = _a.sent();
                return [2 /*return*/, res.json(courses)];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, next(err_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCourses = getCourses;
var getCourse = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, course, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                return [4 /*yield*/, courseRepository.findOne(req.params.id)];
            case 1:
                course = _a.sent();
                if (course) {
                    return [2 /*return*/, res.json(course)];
                }
                else {
                    return [2 /*return*/, res.status(404).json({ msg: "Course Not Found", status: 404 })];
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, next(err_2)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCourse = getCourse;
var createCourse = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, newCourse, saved, course, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                newCourse = courseRepository.create(req.body);
                return [4 /*yield*/, courseRepository.save(newCourse)];
            case 1:
                saved = _a.sent();
                return [4 /*yield*/, courseRepository.findOne(saved.id)];
            case 2:
                course = _a.sent();
                return [2 /*return*/, res.json(course)];
            case 3:
                err_3 = _a.sent();
                return [2 /*return*/, next(err_3)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createCourse = createCourse;
var updateCourse = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, course, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                return [4 /*yield*/, courseRepository.findOne(req.params.id)];
            case 1:
                course = _a.sent();
                if (course) {
                    courseRepository.merge(course, req.body);
                    courseRepository.save(course);
                    return [2 /*return*/, res.json(course)];
                }
                return [2 /*return*/, res.status(404).json({ msg: "Course Not Found", status: 404 })];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, next(err_4)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateCourse = updateCourse;
var deleteCourse = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                return [4 /*yield*/, courseRepository.delete(req.params.id)];
            case 1:
                result = _a.sent();
                if (result.affected) {
                    return [2 /*return*/, res.json({ msg: "Course Deleted", status: 200, id: +req.params.id })];
                }
                return [2 /*return*/, res.json({ msg: "Course Not Found", status: 404 })];
            case 2:
                err_5 = _a.sent();
                return [2 /*return*/, next(err_5)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCourse = deleteCourse;
// Pisa el arreglo de instructores con el nuevo pasado por body.
var updateInstructors = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, userRepository, course, users, newInstructors, updatedCourse, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, courseRepository.findOne(req.params.courseId)];
            case 1:
                course = _a.sent();
                return [4 /*yield*/, userRepository.find()];
            case 2:
                users = _a.sent();
                newInstructors = users.filter(function (user) { return req.body.instructors.includes(user.id); });
                if (!course) {
                    return [2 /*return*/, res.status(404).json({ msg: "Course Not Found", status: 404 })];
                }
                course.instructors = newInstructors;
                return [4 /*yield*/, courseRepository.save(course)];
            case 3:
                updatedCourse = _a.sent();
                return [2 /*return*/, res.json(updatedCourse)];
            case 4:
                err_6 = _a.sent();
                next(err_6);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateInstructors = updateInstructors;
var removeInstructor = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var courseRepository, userRepository, course, user_1, updatedCourse, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                courseRepository = typeorm_1.getRepository(Course_1.Course);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, courseRepository.findOne(req.params.courseId)];
            case 1:
                course = _a.sent();
                return [4 /*yield*/, userRepository.findOne(req.params.userId)];
            case 2:
                user_1 = _a.sent();
                if (!course) {
                    return [2 /*return*/, res.status(404).json({ msg: "Course Not Found", status: 404 })];
                }
                if (!user_1) return [3 /*break*/, 4];
                course.instructors = course.instructors.filter(function (instructor) {
                    return instructor.id !== user_1.id;
                });
                return [4 /*yield*/, courseRepository.save(course)];
            case 3:
                updatedCourse = _a.sent();
                return [2 /*return*/, res.json(updatedCourse)];
            case 4: return [2 /*return*/, res.status(404).json({ msg: "User Not Found", status: 404 })];
            case 5: return [3 /*break*/, 7];
            case 6:
                err_7 = _a.sent();
                next(err_7);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.removeInstructor = removeInstructor;
//# sourceMappingURL=course.controller.js.map