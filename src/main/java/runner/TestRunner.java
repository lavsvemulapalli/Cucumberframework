package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
 features = "F:\\jarfiles\\lib\\SampleProjectBDD\\src\\main\\java\\features"
 ,glue={"stepDefination"}
 



)
	


public class TestRunner {
	

}
