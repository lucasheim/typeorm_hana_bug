import "reflect-metadata";
import { createConnection } from "@sap/hana-client";

const connectionParameters = {
  serverNode: "localhost:39041",
  uid: "SYSTEM",
  pwd: "M@st3rP@55",
};

const connection = createConnection();

connection.connect(connectionParameters, function (err: any) {
  connection.exec(
    `INSERT INTO "migrations"("timestamp", "name") VALUES (?, ?)`,
    [1628709573737, "firstChange1628709573737"],
    (error: any) => {
      console.log(error);
    }
  );
});
