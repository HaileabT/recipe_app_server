import { initDatabase } from "./database/database";
import { app } from "./api/api";

initDatabase();

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
