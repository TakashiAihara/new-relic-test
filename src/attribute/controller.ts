import { Body, Controller, Get } from "@nestjs/common";
import * as newrelic from "newrelic";

import { AttributeService } from "./service";
import { AttributeBody } from "./type";

@Controller()
export class AttributeController {
  constructor(private readonly service: AttributeService) {}

  @Get()
  async handle() {
    await newrelic.startBackgroundTransaction(
      "AttributeController",
      async () => {
        try {
          await this.service.execute();
        } catch (err) {
          console.log(err.message, err);
        } finally {
          newrelic.endTransaction();
        }
      }
    );
  }
}
