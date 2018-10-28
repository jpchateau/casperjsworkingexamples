casper.options.viewportSize = {width: 1920, height: 1080};
casper.options.waitTimeout = 10000;
casper.options.verbose = true;
casper.options.logLevel = "debug";
/*
casper.options.pageSettings = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64; rv:62.0) Gecko/20100101 Firefox/62.0"
};
*/

casper.options.onResourceRequested = function(requestData, networkRequest) {
    if (networkRequest['url'].match(/\.(js|css|png|jpg|jpeg|woff)/) || networkRequest['url'].match(/;base64|_wdt/)) {
        return;
    }

    casper.log('Requested url: ' + networkRequest['url'], 'info');
};
