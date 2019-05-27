$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login test for facebook",
  "description": "",
  "id": "login-test-for-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "checking login functionality",
  "description": "",
  "id": "login-test-for-facebook;checking-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is already on facebook loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter usename",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_facebook_loginpage()"
});
formatter.result({
  "duration": 35516172527,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_usename()"
});
formatter.result({
  "duration": 1485027046,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_password()"
});
formatter.result({
  "duration": 96852414,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 34447564643,
  "status": "passed"
});
});