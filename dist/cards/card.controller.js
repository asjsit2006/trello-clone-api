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
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const card_service_1 = require("./card.service");
const create_card_dto_1 = require("./dto/create-card.dto");
const update_card_dto_1 = require("./dto/update-card.dto");
const card_entity_1 = require("./card.entity");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let CardController = class CardController {
    cardService;
    constructor(cardService) {
        this.cardService = cardService;
    }
    async createCard(columnId, createCardDto) {
        return this.cardService.create(columnId, createCardDto);
    }
    async getCardsByColumn(columnId) {
        return this.cardService.getAllByColumn(columnId);
    }
    async getCard(id) {
        return this.cardService.getById(id);
    }
    async updateCard(id, updateCardDto) {
        return this.cardService.update(id, updateCardDto);
    }
    async deleteCard(id) {
        return this.cardService.remove(id);
    }
};
exports.CardController = CardController;
__decorate([
    (0, common_1.Post)('create/:columnId'),
    (0, swagger_1.ApiOperation)({ summary: 'Создать карточку в колонке' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', description: 'ID колонки' }),
    (0, swagger_1.ApiBody)({ type: create_card_dto_1.CreateCardDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Создана новая карточка', type: card_entity_1.Card }),
    __param(0, (0, common_1.Param)('columnId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_card_dto_1.CreateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "createCard", null);
__decorate([
    (0, common_1.Get)('column/:columnId'),
    (0, swagger_1.ApiOperation)({ summary: 'Получить все карточки по колонке' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', description: 'ID колонки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Возвращает все карточки в колонке', type: [card_entity_1.Card] }),
    __param(0, (0, common_1.Param)('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getCardsByColumn", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Получить карточку по ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID карточки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Возвращает карточку', type: card_entity_1.Card }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getCard", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Обновить карточку по ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID карточки' }),
    (0, swagger_1.ApiBody)({ type: update_card_dto_1.UpdateCardDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Карточка обновлена', type: card_entity_1.Card }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_card_dto_1.CreateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "updateCard", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Удалить карточку по ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID карточки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Карточка удалена', type: card_entity_1.Card }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "deleteCard", null);
exports.CardController = CardController = __decorate([
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardController);
//# sourceMappingURL=card.controller.js.map