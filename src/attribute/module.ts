import { Module } from '@nestjs/common';

import { AttributeController } from './controller';
import { AttributeService } from './service';

@Module({
  imports: [],
  controllers: [AttributeController],
  providers: [AttributeService],
})
export class AttributeModule {}
