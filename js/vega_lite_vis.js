var spec1 = "js/test.json"; 
vegaEmbed('#test_chart', spec1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var spec2 = "js/rental_market_distribution.json"; 
vegaEmbed('#test2_chart', spec2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var spec3 = "js/male_female_earning.json"; 
vegaEmbed('#test3_chart', spec3).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var spec4 = "js/migration.json"; 
vegaEmbed('#test4_chart', spec4).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);