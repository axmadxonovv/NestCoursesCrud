// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });
  app.enableCors({ origin: 'http://localhost:5173' });

  await app.listen(3000);
}
bootstrap();
