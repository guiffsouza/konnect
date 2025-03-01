import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GeneratorTicketsService } from './generator-tickets/generator-tickets.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const ticketsGenerator = app.get(GeneratorTicketsService);
  ticketsGenerator.generator();
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
