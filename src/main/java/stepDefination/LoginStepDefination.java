package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.PendingException;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver d;
	
	@Given("^user is already on facebook loginpage$")
	public void user_is_already_on_facebook_loginpage()  {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.gecko.driver", "F:\\Driver Server\\geckodriver.exe");
		  System.setProperty("webdriver.chrome.driver", "F:\\chromedriver.exe");
		
		//d=new FirefoxDriver();
		  d=new ChromeDriver();
		  d.get("https://www.facebook.com/");
	    
	}

	@When("^user enter usename$")
	public void user_enter_usename()  {
	    // Write code here that turns the phrase above into concrete actions
		d.findElement(By.xpath("//input[@id='email']")).sendKeys("test");
		
	    
	}

	@Then("^user enter password$")
	public void user_enter_password()  {
	    // Write code here that turns the phrase above into concrete actions
		d.findElement(By.xpath("//input[@id='pass']")).sendKeys("test");
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Exception  {
	    // Write code here that turns the phrase above into concrete actions
		d.findElement(By.xpath("//input[@value='Log In']")).click();
		Thread.sleep(5000);
		d.quit();
	}

	

}
