import { Injectable } from "@nestjs/common";
import * as newrelic from "newrelic";
import { someTransactionalMethod } from "src/util";

@Injectable()
export class AttributeService {
  async execute(): Promise<void> {
    const attribute = {
      customerId: "customer-id",
      executeId: "execute-id",
    };

    // newrelic.addCustomAttributes(attribute); // This does not cause an error.
    await someTransactionalMethod();
    newrelic.addCustomAttributes(attribute); // This causes an error after someTransactionalMethod() is called.
  }
}
