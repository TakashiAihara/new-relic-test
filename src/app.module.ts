import { Module } from '@nestjs/common';

import { AttributeModule } from './attribute/module';

@Module({
  imports: [AttributeModule],
})
export class AppModule {}
