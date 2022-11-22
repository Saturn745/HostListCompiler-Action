const compile = require("@adguard/hostlist-compiler");

;(async () => {
    // Compile filters
    const result = await compile({
        name: 'Your Hostlist',
        sources: [
            {
                type: 'adblock',
                source: 'https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt', // or local file
                transformations: ['RemoveComments', 'Validate'],
            },
        ],
        transformations: ['Deduplicate'],
    });
    
    // Write to file
    writeFileSync('hosts.txt', result.join('\n'));
})();