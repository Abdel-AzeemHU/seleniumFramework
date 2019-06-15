$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End_Tests.feature");
formatter.feature({
  "line": 1,
  "name": "Automated End2End Tests",
  "description": "Description: The purpose of this feature is to test End 2 End integration.",
  "id": "automated-end2end-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy Two items",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout cart and enter personal details on checkout page and place the order",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "he can view the order and download the invoice",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;",
  "rows": [
    {
      "cells": [
        "productName"
      ],
      "line": 13,
      "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;;1"
    },
    {
      "cells": [
        "Apple MacBook Pro 13-inch"
      ],
      "line": 14,
      "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"Apple MacBook Pro 13-inch\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy Two items",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout cart and enter personal details on checkout page and place the order",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "he can view the order and download the invoice",
  "keyword": "Then "
});
formatter.match({
  "location": "E2ETests.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 210144499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple MacBook Pro 13-inch",
      "offset": 15
    }
  ],
  "location": "E2ETests.he_search_for(String)"
});
formatter.result({
  "duration": 5213044799,
  "status": "passed"
});
formatter.match({
  "location": "E2ETests.choose_to_buy_Two_items()"
});
formatter.result({
  "duration": 25295614100,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pages.PageBase.clickButton(PageBase.java:25)\r\n\tat pages.ProductDetailsPage.AddToCart(ProductDetailsPage.java:56)\r\n\tat steps.E2ETests.choose_to_buy_Two_items(E2ETests.java:34)\r\n\tat ✽.And choose to buy Two items(End2End_Tests.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2ETests.moves_to_checkout_cart_and_enter_personal_details_on_checkout_page_and_place_the_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2ETests.he_can_view_the_order_and_download_the_invoice()"
});
formatter.result({
  "status": "skipped"
});
});