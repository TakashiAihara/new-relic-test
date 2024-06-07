import * as newrelic from "newrelic";

export const someTransactionalMethod = async () => {
  await newrelic.startBackgroundTransaction(
    "someTransactionalMethod",
    async () => {
      try {
        console.log("execute method");
      } catch (err) {
        console.log(err.message, err);
      } finally {
        newrelic.endTransaction();
      }
    }
  );
};
