"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnController = void 0;
const common_1 = require("@nestjs/common");
const column_service_1 = require("./column.service");
const create_column_dto_1 = require("./dto/create-column.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const column_entity_1 = require("./column.entity");
const swagger_1 = require("@nestjs/swagger");
let ColumnController = class ColumnController {
    columnService;
    constructor(columnService) {
        this.columnService = columnService;
    }
    async create(createColumnDto) {
        return this.columnService.create(createColumnDto);
    }
    createColumn(createColumnDto, user) {
        return this.columnService.createColumn(createColumnDto, user.id);
    }
    async findOne(id) {
        return this.columnService.findOne(id);
    }
    getColumns(user) {
        return this.columnService.getColumns(user.id);
    }
    getColumnById(id, user) {
        return this.columnService.getColumnById(id, user.id);
    }
};
exports.ColumnController = ColumnController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Создать колонку' }),
    (0, swagger_1.ApiBody)({ type: create_column_dto_1.CreateColumnDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Колонка успешно создана', type: column_entity_1.Column }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_column_dto_1.CreateColumnDto]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_column_dto_1.CreateColumnDto, Object]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "createColumn", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Получить колонку по ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID колонки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Возвращает колонку', type: column_entity_1.Column }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "getColumns", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "getColumnById", null);
exports.ColumnController = ColumnController = __decorate([
    (0, swagger_1.ApiTags)('Columns'),
    (0, common_1.Controller)('columns'),
    __metadata("design:paramtypes", [column_service_1.ColumnService])
], ColumnController);
//# sourceMappingURL=column.controller.js.map