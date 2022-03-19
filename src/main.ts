import helmet from 'helmet';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet());

  await app.listen(PORT, () => {
    console.log('api running on port 3000');
  });
}

bootstrap();
