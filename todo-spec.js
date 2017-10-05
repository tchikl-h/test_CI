function click(path) {

    myWait(path);
    element(path).isDisplayed().click();
}

function sendkeys(path, text) {

    myWait(path);
    element(path).clear().sendKeys(text);
}

function myExpect(path, expectation) {

    if (expectation == true)
	myWait(path);
    if (expectation == false)
	myWaitNot(path);
    expect(element(path).isPresent()).toBe(expectation);
}

function print(message) {

    browser.manage().logs().get('browser').then(function(browserLogs) {
	console.log("");
	console.log("");
	console.log(message);
    });
}

function myWait(path) {

    browser.wait(protractor.ExpectedConditions.presenceOf(element(path)), 40000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(path)), 40000);
}

function myWaitNot(path) {

    browser.wait(protractor.ExpectedConditions.stalenessOf(element(path)), 20000);
    browser.wait(protractor.ExpectedConditions.invisibilityOf(element(path)), 20000);
}

function login(username, password) {

    sendkeys(by.name("login"), username);
    sendkeys(by.name("password"), password);
    click(by.xpath("//div/input[@type='submit']"));
}

function waitUntil(myElem, str) {

    var data = myElem.getAttribute('value').then(function(data) {

	if (data == str)
	    return;
	browser.driver.sleep(100);
	waitUntil(myElem, str);
    });
}

describe('Notification Intranet Epitech', function() {

    it('check + send notification', function() {

	print("Notification Intranet Epitech");
	browser.ignoreSynchronization = true;
	browser.get('https://intra.epitech.eu/');
	browser.driver.manage().window().setSize(1080, 720);
	login("herve.tchikladze@epitech.eu", "Hh3dml/{");
	myExpect(by.xpath("//div[@class='dropdown message news']"), true);
	browser.get('https://slack.com/signin');
	sendkeys(by.xpath("//input[@type='text']"), "gpp-talk");
	click(by.xpath("//button[@type='submit']"));
	sendkeys(by.xpath("//input[@type='email']"), "tchikladze.herve@hotmail.fr");
	sendkeys(by.xpath("//input[@type='password']"), "Hh3dml/{");
	click(by.xpath("//button[@id='signin_btn']"));
	click(by.xpath("//span[@class='overflow_ellipsis member_name'][contains(., 'herve')]"));
	sendkeys(by.xpath("//textarea[@id='msg_input']"), "Vous avez 1 nouvelle notification.");
	browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });
});
