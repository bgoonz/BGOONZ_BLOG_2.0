---
title: "Getting Started "
template: docs
---
Getting Started

ScrapingBee is meant to be the easiest scraping API available on the web.

To scrape a web page, you only need two things:

Your API key, available here
The encoded web page URL you want to scrape (learn more about URL encoding)
The following snippet is an example of a simple GET API call to scrape the URL defined in the query string variable YOUR-URL:

Python
# Install the Python ScrapingBee library:    
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get("YOUR-URL")

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
The API will then respond with the raw HTML content of the target URL:

<html>
  <head>
     ...
  </head>
  <body>
     ...
  </body>
</html>    
Every URL that failed will be tried as many times as possible for 30 seconds.

Be aware of the maximum 30-second timeout when your code calls the API.

Headers and cookies returned by the target website are prefixed with Spb- (for ScraPingBee).

API key
api_key
[string]
(default= "")
required
All requests are authenticated using your private API key.

To get access to your API key, create an account here and confirm your email address.

Python
# Install the Python ScrapingBee library:    
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get("YOUR-URL")

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
URL
url
[string]
(default= "")
required
This parameter is the full URL including the protocol (with http/https) of the page to extract data from.

You must encode your URL. For example, the + character is encoded to %20. Consult your programming language documentation for functions that encode URLs

Several examples of URL encoding can be seen below:

Python
import urllib.parse
encoded_url = urllib.parse.quote("YOUR URL")
Headless Browser

Javascript Rendering
render_js
[boolean]
(default= True)
By default, ScrapingBee fetches the URL to scrape via a headless browser that will execute the JavaScript code on the page. This is the default behavior and costs 5 credits per request.

This can be useful for scraping a Single Page Application built with frameworks such as React.js, Angular.js, JQuery or Vue.

To fetch the URL without using a headless browser, use the render_js=false parameter in the GET request.

The following is an example with a dummy Single Page Application (SPA):

If you use render_js=true (default behavior)

Python
# Install the Python ScrapingBee library:    
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get("YOUR-URL")

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
The following result is returned:

<html>
  <head>
     ...
  </head>
  <body>
     <content>
     </content>
     <content>
     </content>
     <content>
     </content>
      <content>
     </content>
     <content>
     </content>
  </body>
</html>               
But if you use render_js=False instead:

Python
# Install the Python ScrapingBee library:      
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get('YOUR-URL',
    params = { 
        'render_js': 'False',
    }
)

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
This is what is returned:

<html>
  <head>
  ..
  </head>
  <body>
  </body>
</html>          
JavaScript Execution
js_scenario
[stringified JSON]
(default= {})
If you want to interact with pages you want to scrape before we return your the HTML you can add JavaScript scenario to your API call.

For example, if you wish to click on a button, you will need to use this scenario.

{
    "instructions": [
       {"click": "#buttonId"}
    ]
}
And so our scraper will scrape the webpage, click on the button #buttonId and then return you the HTML of the page.

Important: JavaScript scenario are JSON formatted, and in order to pass them to a GET request, you need to stringify them.

You can add multiple instructions to the scenario, they will get executed one by one on our end.

Below is a quick overview of all the different instruction you can use.

{"evaluate": "console.log('foo')"} # Run custom JavaScript
{"click": "#button_id"} # Click on a an element
{"wait": 1000} # Wait for a fixed duration in ms
{"wait_for": "#slow_div"} # Wait for a css element to appear
{"wait_for_and_click": "#slow_div"} # Wait for a css element to appear and then click on it
{"scroll_x": 1000} # Scroll the screen in the horizontal axis, in px
{"scroll_y": 1000} # Scroll the screen in the vertical axis, in px
{"fill": ["#input_1", "value_1"]} # Fill some input
{"evaluate": "console.log('toto')" # Run custom JavaScript code
If you want to learn more about this powerful feature, you can check the full documentation here.

Python
# Install the Python ScrapingBee library:        
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get('YOUR-URL',
    params = { 
        'js_scenario': '{"instructions": [{"click": "#buttonId"}]}',
    }
)

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
Wait for a fixed amount of time
wait
[integer]
(default= 0)
Some code-heavy websites need time to fully "render". To direct ScrapingBee to wait before it returns the fully rendered HTML, use the wait parameter with a value in milliseconds between 0 and 35000.

The ScrapingBee headless browsers will then wait the duration of the time set in milliseconds before returning the page's HTML.

If you need some help setting this up, do not hesitate to contact us.

Python
# Install the Python ScrapingBee library:      
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get('YOUR-URL',
    params = { 
        'wait': '10000',
    }
)

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
Wait for CSS selector
wait_for
[string]
(default= "")
It's sometimes necessary to wait for a particular element to appear in the DOM before ScrapingBee returns the HTML content.

Our headless browsers will wait for the CSS selector passed in the parameter before returning the HTML.

For example, to wait for the element <div class="loading-done"></div> use wait_for=.loading-done in your request.

Python
# Install the Python ScrapingBee library:      
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get('YOUR-URL',
    params = { 
        'wait_for': '.loading-done',
    }
)

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
Blocking Ads
block_ads
[boolean]
(default= false)
By default, ScrapingBee does not block ads. To avoid scraping them (e.g.,to speed up your request), use block_ads=true

This parameter is unnecessary if JavaScript rendering is disabled.

Python
# Install the Python ScrapingBee library:      
# pip install scrapingbee

from scrapingbee import ScrapingBeeClient

client = ScrapingBeeClient(api_key='GATELPJUU6MXROYOT6FJ7WF15M2UX0015UIM64B40ABJ9I4WN0ZEY3GFYJIVA90BPHV8477C0RKX92GU')

response = client.get('YOUR-URL',
    params = { 
        'block_ads': 'True',
    }
)

print('Response HTTP Status Code: ', response.status_code)
print('Response HTTP Response Body: ', response.content)
Blocking Images and CSS
block_resources
[boolean]
(default= true)
By default, and to speed up requests, ScrapingBee blocks all images and CSS in the scraped page, but to scrape them, use block_resources=false

This parameter is unnecessary if JavaScript rendering is disabled.