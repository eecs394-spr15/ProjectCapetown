"use strict";

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var desired = {
	"appium-version": "1.4.3",
	platformName: "iOS",
	platformVersion: "8.2",
	deviceName: "Jingyao's iPhone",
	//app: "/Users/jingyaoqin/desktop/ProjectCapetown/test/e2e/application.ipa",
	bundleId: "nuboard.com.nu.nuboard",
	udid: "3ed5f154b05e71f6a0f14b080fa7be5c52691fd7",
	autoWebview: true

};

var browser = wd.promiseChainRemote("10.0.0.7", 4723);

// browser.init(desired).then(function() {
// 	return browser
// 		//.elementByName("Cancel").click()
// 		.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]").sendKeys("testname")
// 		.elementByName("Done").click()
// 		.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[2]").sendKeys("testpassword")
// 		.elementByName("Done").click()
// 		.elementByName("Login").click()
// 		.fin(function() {
// 			return browser.quit();
// 		});
// }).done();


describe("Node Sample Automation Code", function() {

//   before(function() {
// browser.init(desired);
// });
// after(function() {

// });
// beforeEach(function() {
// 	localStorage.removeItem('testname');
// });
// afterEach(function() {
// 	localStorage.removeItem('testname');
// });
	it("Should Register a new user with an unused username&password", function(){
		//this.timeout(3000000);
		browser.init(desired).then(function() {
		return browser
			.elementByName("Sign Up").click().sleep(3000)
		//.elementByName("Cancel").click()
		.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]").sendKeys("testname").sleep(3000)
		.elementByName("Done").click().sleep(3000)
		.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[2]").sendKeys("testpassword").sleep(3000)
		.elementByName("Done").click().sleep(3000)
		.elementByName("Register").click().sleep(3000).done();
		});
	});


  });
