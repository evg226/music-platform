import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () =>
      console.log(`Server Music-platform has started on PORT ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
};
start();
