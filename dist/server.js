"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3200;
app_1.default.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}.`);
});
//# sourceMappingURL=server.js.map