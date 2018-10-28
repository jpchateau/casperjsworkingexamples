casper.test.on('fail', function() {
    casper.capture('browsing-error.png');
});

casper.test.begin('Browsing', function fillForm(test) {
    var url = 'https://www.lacentrale.fr';

    casper.start(url, function() {
        test.assertHttpStatus(200, url + " is alive");

        this.echo('Browser Cookie: ' + this.evaluate(function() {
            return document.cookie;
        }));

        this.echo('user-Agent: ' + this.evaluate(function() {
            return window.navigator.userAgent;
        }));
    });

    casper.then(function() {
        this.echo('Click on link');
        test.assertExists('a[href="/compte_ident.php"]');
        this.click('a[href="/compte_ident.php"]');
    });

    casper.then(function() {
        this.waitForUrl(/compte_ident.php/, function() {
            test.assertTextExist('Mon compte, c\'est gratuit !');
            casper.capture('browsing.png');
        });
    });

    casper.run(function() {
        test.done();
    });
});
