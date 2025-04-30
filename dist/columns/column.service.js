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
exports.ColumnService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const column_entity_1 = require("./column.entity");
const user_entity_1 = require("../users/user.entity");
let ColumnService = class ColumnService {
    columnRepository;
    userRepository;
    constructor(columnRepository, userRepository) {
        this.columnRepository = columnRepository;
        this.userRepository = userRepository;
    }
    async create(createColumnDto) {
        const column = this.columnRepository.create(createColumnDto);
        return await this.columnRepository.save(column);
    }
    async findOne(id) {
        try {
            const numericId = parseInt(id, 10);
            return await this.columnRepository.findOneOrFail({ where: { id: numericId } });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Column with ID ${id} not found`);
        }
    }
    async createColumn(createColumnDto, userId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const column = this.columnRepository.create({ ...createColumnDto, user });
        return this.columnRepository.save(column);
    }
    async getColumns(userId) {
        return this.columnRepository.find({ where: { user: { id: userId } } });
    }
    async getColumnById(columnId, userId) {
        const column = await this.columnRepository.findOne({ where: { id: columnId, user: { id: userId } } });
        if (!column) {
            throw new Error('Column not found or not owned by the user');
        }
        return column;
    }
};
exports.ColumnService = ColumnService;
exports.ColumnService = ColumnService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(column_entity_1.Column)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ColumnService);
//# sourceMappingURL=column.service.js.map