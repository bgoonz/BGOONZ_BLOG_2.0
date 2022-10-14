---
title: Automating and Scaling REST API
template: post
date: 2022-10-14T06:25:58.360Z
image_position: right
categories: []
show_author_bio: false
cmseditable: true
---
<!--StartFragment-->

REST API is a powerful way to run tests. REST means Representational State Transfer. But it's not always enough. You can not find some pitfalls by just being alone with the Rest API. Here only an end-to-end test is required to find some errors. Here, we will use Test Project's Rest API testing framework for the end-to-end test. This Rest api testing automation framework is an open-source addon for REST API clients. 

We will need actions like sending HTTP/S requests using GET, POST, PUT and DELETE so this open-source Rest API testing framework will work for us. 

In this blog, I will show you how to make automated rest API tests with TestProject; we will also use NASA's APIs as an example. 

Before going ahead, you will need below things:

* [A TestProject account](https://testproject.io/)
* A TestProject agent
* [REST API addon](https://app.testproject.io/#/addons/testproject)

End-to-End Automated Test: Step by Step

Step 1: Create A New Recorded Test By Opening Your TestProject Account.

Create a new test in your TestProject account by logging in. We'll use a web test as an example (but you could also develop a mobile test or even a programmed test in the same way):

![Select test type](https://lh5.googleusercontent.com/WykEQqG4e_xVVfsD5zWuKDrjSTrZFpugIYrolj-1csib4ohaw39ztUSM3MSON-98ZT3WaODXTCFdICCbgvSBvCvvb7DlO1GjTl6KsFYRsGT_2V3y6cGE5Y9UrVVGpfGpVxEZS-nPOOpLqO4varY9zb6VScqgPpPKJYMv5Ul49S3-eAUFxZ4yW-SW6c9psG-arnp7sA "Select test type")

You must then give test information, including the test name, description, and tested URL.

The initial application URL doesn't play a significant role here because our test will primarily rely on REST API commands, which include the URL as part of the steps. However, it still needs to be provided as one of the web test default parameters.

![Add test details](https://lh4.googleusercontent.com/3ycrRk78O38MRfwNGev9b1dZLPWsZAmYJn0rYRSTIQrKU-k-BzQex3yKcIyyd3qefTzUBwK45DyUc3Zy-PvYluQCCPAEoFee2IWRCKNEFcbTg6pQTTT_aFbmmZU0-B7ynSSTeFqW5Fy6pBTuFU5XuZqKEjk9uLKKLEdHkVjm7qHX2XoZNWIRxraJbmf2DXHZO4u6rw "Add test details")

Next, choose "Record" from the menu:

![Record or design](https://lh4.googleusercontent.com/aU8WmQeh9aNgWKj71wMB6hPPfwXspQ3-TWGdiFi-b05XRrsJ7qqmS48t7Ffz04YVBWZP4IwmC-1buJBxr6wI3S1dj8pjM80oYzVhJwH5c4zdKEvZxo0ENC58ZAYDo7zCSFTcoWugGAlzeLXdNf3Nk2ORHiMHMuQxmnJ5bsxk8TJdX__PoJkv12e6ReerKVzbfm7r7g "Record or design")

The test recorder in TestProject will open a new tab in the browser.

Step 2: Use GET API Command And Receive All Asteroids, [Excerpt The Initial Asteroid ID](https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY)

Using the GET API query and extracting the first asteroid ID, we will do our initial step of retrieving all of the accessible asteroids.

Let's add the following step (action type step) to our recorded test to do this. Select the "Add step" button (+) in the step editor, then click "Type" and change to "Action," navigate to "Actions" and look up GET. The HTTP GET Request act from the addons library will then appear: Choose the activity. Now, a step will be included with the possible options listed below:

![Add steps to our record](https://lh5.googleusercontent.com/vaE1-TeoNLWBgGIxXm_lqRqyjCpw2u1MAxI5EpjrAH_2Lf5gm3qRPy_qnWCfnzacsCi2gccETE1qCX_MSX8HdBs4PedAiJEFcIXB-0O1o4j1h_E1Q9tZxTTqoMIp_npnD9YMAz65wDedBXbh18Sv2ZSZxZ4gzD-dWoDUSkBp2Xthc8rL50EsWh1F1-yr6oxyBlBM8g "Add steps to our record")

Now, let's add matching data to get a reply like the one below: 

* URL(to add): <https://api.nasa.gov/neo/rest/v1/neo/browse> 
* Query(to add): api_key=DEMO
* ExpectedStatus: We'll key in "200" as the code. According to NASA's documentation, the intended server status, if the request is valid, will be 200.
* JSONPath: According to Jayway JsonPath syntax, we are looking for a first neo reference id, which will be supplied as part of the endpoint for our subsequent step, $.near earth objects\[0].neo reference id.

For the Response field, parameters are added to store retrieved neo_reference_id. In our step editor, the step should appear as follows: 

![Step Editor](https://lh6.googleusercontent.com/VcXGNvqgQp_hGpJcbdnESqLcGdpzsWuIOkLKsT6iZvv1NnDgMFgf_0pxQI0qymIHVURWOT7TRg-I340yKcLGOTmY3UufXk17LRZLWotsL9UY-Fy3wDoiLZqXZOtnySQqVYAdQv7FGSsKrGzSt_bNYnFCWVe7yTwiMQYkK-6WXmWI2DObMnUcGyF-BizgRPE5UIRdxQ "Step Editor")

Now select "Create." A step will be generated and successfully completed. The response message will be retrieved if this execution is successful (displayed below).

![Step execution messages](https://lh4.googleusercontent.com/Hzuw3nRQVPpZyKMMlIZVIVaNrAwci5VnjDe5Ycw9Zv00C4op4p_I59qhsfItD-Y6O0VQtH9Oddw-PHtzpMiGi4fNuhsJuoy2MzO7GP2-HbXjM3FLCst6l-7UG7eGOZmx2x7luXmiwn4fXv70cpCS2Iu1aZRNN5GmhetBaqTVqyOdTfXW0zhR1JOfmIhFrG3hRmO5GQ "Step execution messages")

Step 3: Establish A Dynamic Endpoint URL: Extract Data And Examine The Server's Reaction

Now, let's build a dynamic endpoint URL using the asteroid ID obtained before and extract the NASA JPL URL, which stands for the URL of a web page that contains all of the asteroid's information, from the server response.

The asteroid ID (also known as neo reference id), which was obtained above, is part of the endpoint that gives us complete asteroid information, as seen in this example, according to NASA's API documentation.

To build the endpoint URL and get a new value called NASA JPL URL from the response message, we will construct a GET request in this step using the neo reference id value that was placed in the server response argument.

Let's add a new step (of the action variety) to our recorded test. Then look for the GET action. The HTTP GET Request action will then be displayed. Choose the action, then provide the necessary data below:

* URL(to add): <https://api.nasa.gov/neo/rest/v1/neo/server_response>
* Query(to add): api_key=DEMO_KEY
* ExpectedStatus: according to documentation, the expected server status in case the request is valid will be 200. 
* JSONPath: $.nasa_jpl_url

In order to store the obtained value (nasa jpl url), we will additionally add a parameter (Asteroid URL) for the Response field.

Below is what the screen will look like:

![](https://lh4.googleusercontent.com/a0hyxeAEUNXfNOfNyyMftw4hSbWxVQrpA-Sjak5mVXMU6Kqa9qziq04HfghM7-0tov7u6tx5Hq3Tb1fecR7RDSzpqjj9E_HZ4vaLrNJYhw1AVrepumNRc67J_i8uSs8OIO_TSF8CgJWnzmmmucCsRPzKxL2PoqB0xzddFqSpbLXEWbYhxg_7BhH5EI-uU30rUK7qtQ)z

Let's carry out the test procedures now and see what happens. We received the precise asteroid id details, as shown in the answer schema below. The two GET requests (from steps 2 and 3) are connected because the second call (in this step, step 3), which is dependent on the first REST API call, is directed to a particular endpoint (from step 2).

![Step execution messages](https://lh4.googleusercontent.com/-ofFoFp9MJTpJSQDEieyjtUqGJufpHtX9A8aHbKvluFDT4-OE2zI1QnE_z8ZKAMCcm_uFlEHWiRbptyyfImEATSmjneRavJ2R6TYANGpM5T0fMPWDPc4PxZZbydV7N3VsSq3Xv-OBIn2wyQntxvTRIDn0svGBZ1UD6NB9Vc3ag4bqRwND8mRJgAUTOf7SibFAJE9yw "Step execution messages")

Step 4: Replace The URL With A Legitimate Structure

Let's modify the URL with a legitimate structure (adding "s" to the HTTP string) to get around the problem we discovered with the response schema. Let's add a new step (of the action type) to our recorded test to do this. Then, look for the action "Replace in the string," choose it, and add the following parameters:

* SearchPattern: http
* Original: string Asteroid_URL parameter
* Literal: https
* Result: New parameter called Fixed_Asteroid_URL

![Modify the URL](https://lh6.googleusercontent.com/EhuOwVj0v7KMvvQkbg8c_1_R7RxOp_t5Ka9lAgeofENeM_rdWdO5aCQHJ5mPeNnJANZiXzg-QazPLFdZ4bXraNZZ9QyXRJtYaxbLewHyxy0ZAbpafVCjeWRh8MiAdiNmzwtsqjyBQ9AhVjIN1zNZIquOFXoQPwuBl3sQeTsbi3LgvoEo1JKo6g31PTUkdSRJ2OtF_w "Modify the URL")

Step 5: Navigate To A New URL And Check The ID Labels To Demonstrate The Power Of End-To-End Tests

Let's add another step to our recorded test so we may navigate to the new URL. Choose the Fixed Asteroid URL option for the URL parameter (the URL we retrieved and fixed in step 4 above). The step will navigate to the appropriate asteroid URL after it has been created:

![Navigate To A New URL](https://lh6.googleusercontent.com/EhuOwVj0v7KMvvQkbg8c_1_R7RxOp_t5Ka9lAgeofENeM_rdWdO5aCQHJ5mPeNnJANZiXzg-QazPLFdZ4bXraNZZ9QyXRJtYaxbLewHyxy0ZAbpafVCjeWRh8MiAdiNmzwtsqjyBQ9AhVjIN1zNZIquOFXoQPwuBl3sQeTsbi3LgvoEo1JKo6g31PTUkdSRJ2OtF_w "Navigate To A New URL")

We will add a new step (element action step) to this end-to-end functional test scenario to verify that the asteroid ID label displayed on the web page (of the static URL) corresponds to the ID extracted during the first API call from step 2 above. The SPK ID label that seems on the web page is identified in this phase using TestProject's built-in element locator, and the "Get text" element action step is then activated as shown below:

![Add a validation](https://lh6.googleusercontent.com/l_uTKq5AiSXKmdODexP6uePS1V2xwammBxOwc9hH9EXpehqZRgniRfM4B9SJCDMVhp45-jLoSPFWv7p-KR8Fo86kQABYbv_xFPqhImW7s9J5-evswIImUGeTJDvffkMv_9oDOhzKDaFw2nBcdsEBYdwwwpO_nMIh0mtHEG5dp1xODuonifIZTzl6IvgXCTYwrtJ8fg "Add a validation")

Now let's add a validation by pressing "+" in the following steps "Get text."

* Pick "text" from the "select field."
* Now pick the "Equals" from the "select validation type."
* Select the server_response parameter that has the original ID

Step 6: Review Test Results From Our Recorded Experiment

It is the final step. We have made all the steps, including Automate API Testing and selection of Rest API testing framework. Now, let's start our completion of the test from the project area in the TestProject dashboard so we can scan test reports. 

As seen below, you may thoroughly examine each test step to observe screenshots and step-execution times and track every success and failure of your end-to-end integration test:

![API test](https://lh4.googleusercontent.com/ugUPbktvO1ReVbxUZ8hW-mTF3NZQXrh_X0rAftNXSZMDlHrSnElcUO1582R8h6cm7JtygEc9TwL9I8VMJYCzhtiE5cZy1CwHPIuZ2pOM2AzcZL0DIe1OKtHPYdIsd0mesQ_Iuy7czw_Yp82sO1OOvbbFajxVD0rxC1G5aor4w5cz1C6L5f67EM9pNJIjuXI1V5LMrg "API test")

Final Words

This blog has covered the steps to make end-to-end automated steps with TestProject's best Rest API testing framework to Automate API Testing. 

We began with submitting fundamental API requests, and it concluded with verifying and contrasting UI-based aspects. In essence, we created a robust end-to-end test by combining REST API and recorded UI stages within the same automated test. And what's even more extraordinary is that none of this required writing a single line of code! Will you consider it the** [best Rest api testing automation post](https://quokkalabs.com/blog/rest-vs-grpc-which-is-the-best-api-protocol/)**? Let me know in the comments. 

<!--EndFragment-->