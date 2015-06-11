"use strict";

require("./helpers/setup");


describe("Case progress end-to-end test", function()
{
	this.timeout(300000);
	var driver;
	var all_passed = true;

	before(function () {
    var serverConfig = process.env.SAUCE ?
      serverConfigs.sauce : serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = process.env.SAUCE ?
      _.clone(require("./helpers/caps").android18) :
      _.clone(require("./helpers/caps").android19);
    desired.app = require("./helpers/apps").androidApiDemos;
    if (process.env.SAUCE) {
      desired.name = 'android - simple';
      desired.tags = ['sample'];
    }
    return driver
      .init(desired)
      .setImplicitWaitTimeout(3000);
  });

	after(function()
	{
		return driver
		.quit()
		.finally(function ()
		{
			if(process.env.SAUCE)
				return driver.sauceJobStatus(all_passed);
		});

	});

	afterEach(function()
	{
		all_passed = all_passed && this.currentTest.state === 'passed';
	});

	it("Case 1 should increment progress", function()
	{
		return driver
			.elementByAccessibilityId('case1_btn')
			.should.exists;
			//.click()

	});

});