const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver = new webdriver.Builder().forBrowser('firefox').build();


async function login(){
    try{
        await driver.get('https://anotepad.com/create_account');
        await driver.manage().window().maximize();
		
        await driver.findelement(webdriver.by.id("loginemail")).sendkeys("thao_test_1@gmail.com");
		
		await driver.findelement(webdriver.by.xpath("//input[@placeholder='enter password']")).sendkeys("123456");

		await driver.findelement(webdriver.by.xpath('//button[text()="login"]')).click();
		
        driver.quit();  
    }

    catch(err){
        handlefailure(err, driver)
    }
}

login();


function handleFailure(err, driver) {
     console.error('Fail to login\n', err.stack, '\n');
     driver.quit();
}
