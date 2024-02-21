import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerMiddleware = new LoggerMiddleware();
  app.use(loggerMiddleware.use.bind(loggerMiddleware));
  await app.listen(3000);
}
bootstrap();
