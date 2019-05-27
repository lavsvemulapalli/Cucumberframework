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
  "duration": 30229778866,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_usename()"
});
formatter.result({
  "duration": 1302494070,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_password()"
});
formatter.result({
  "duration": 86131016,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 31672399094,
  "status": "passed"
});
});