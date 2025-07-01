import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for development or specific origins in production
  app.enableCors(); 
  
  // Example: Set a global prefix for all routes
  // app.setGlobalPrefix('api');

  // Example: Use WebSockets (if configured in AppModule)
  // const server = app.getHttpServer();
  // const socketIoAdapter = new WsAdapter(app);
  // app.useWebSocketAdapter(socketIoAdapter);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
