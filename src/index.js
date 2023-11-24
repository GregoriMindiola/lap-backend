import { connect } from "./database/db.js";
import app from "./server/app.js";

const PORT = 3000;

const main = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
};

main();
