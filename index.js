const compile = require("@adguard/hostlist-compiler");
const fs = require('fs');

;(async () => {
    // Compile filters
    var obj = JSON.parse(fs.readFileSync(core.getInput("input"), 'utf8'));

    const result = await compile(obj);
    
    // Write to file
    fs.writeFileSync(core.getInput("output"), result.join('\n'));
})();