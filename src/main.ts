import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Trello Clone API')
    .setDescription('API для управления пользователями, колонками и карточками')
    .setVersion('1.0')
    .addBearerAuth() // Если используете JWT, добавляем поддержку Bearer токенов
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger будет доступен по пути /api

  await app.listen(3000);
}

bootstrap();