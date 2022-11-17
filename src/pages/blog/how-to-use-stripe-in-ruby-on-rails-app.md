---
title: How to Use Stripe in Ruby on Rails App
template: post
date: 2022-11-17T14:59:50.620Z
image: https://sloboda-studio.com/wp-content/uploads/2020/08/image-2611.jpg
thumb_image: /blog/image-2611.jpg
image_position: top
categories:
  - src/data/categories/awesome-lists.yaml
tags:
  - src/data/tags/clean-code.yaml
show_author_bio: false
related_posts:
  - src/pages/blog/accessibility.md
cmseditable: true
---
Original article here [](https://sloboda-studio.com/blog/how-to-use-stripe-in-ruby-on-rails-app)<https://sloboda-studio.com/blog/how-to-use-stripe-in-ruby-on-rails-app>

You are no longer need to manually manage all of your payments. All you need now is some time to install a trustworthy payment gateway into your website.

Stripe's international payment system, which enables both individuals and businesses to use online payment methods, is one of the reasons it is one of the best online payment gateway solutions. Let's examine the process of adding a payment gateway to a website.

## Implementing a payment gateway: integrating Stripe

Stripe is a simple-to-use solution for every business because of its accessible interface and thorough documentation. How to add Stripe to a Ruby on Rails application is a quick guide we have prepared for you about Stripe payment integration.

### 1. Creating the developer’s profile

![## integrating Stripe](/blog/stripe-developer-profile-3.png)

### 2. Installing Stripe to the Project

In order to use Stripe in your application, you need to add the Stripe Ruby gem:\
`gem 'stripe'`

Then, add it to the project by launching the $ bundle command and create the controller via the command line $ rails g controller charges.\
Upon adding the controller, create the Customer object. Although you can perform the charges directly, creating the customer will allow you to use repetitive billing.

`def new
end`

def create\
# Amount in cents\
@amount = 500

customer = Stripe::Customer.create(\
:email => params\[:stripeEmail],\
:source => params\[:stripeToken]\
)

charge = Stripe::Charge.create(\
:customer => customer.id,\
:amount => @amount,\
:description => ‘Rails Stripe customer’,\
:currency => ‘usd’\
)

rescue Stripe::CardError => e\
flash\[:error] = e.message\
redirect_to new_charge_path\
end

### 3. Configuring Stripe Keys

Return to your Stripe profile and navigate to the API keys section. Save your test and live keys to the file secrets.yml in the config folder. The file's contents should look like this (we used keys from our test account):

Development:

`stripe_secret_key: 'sk_test_nWjL9fQH8v23uSiEPJT5d1Xs'
stripe_publishable_key: 'pk_test_NxfJqAJ1j1w8p0K3959byw1P'`

production:

`stripe_secret_key: 'sk_live_wHzOtGqRSHVCCh1eaJiVd3M1'
stripe_publishable_key: 'pk_live_iGxbYHVwYXZlQBZAKeuhzYEW'`

Then go to the **stripe.rb** file located in the directory config/initializers/stripe.rb and add the following code there:

`Rails.configuration.stripe = {
:publishable_key => ENV['PUBLISHABLE_KEY'],
:secret_key => ENV['SECRET_KEY']
}`

Stripe.api_key = Rails.configuration.stripe\[:secret_key]

Remember that in order to avoid compromising the application affecting real customers, you should only add the test keys.

### 4. Creating Page Views

The following step is to configure how the payment form will be displayed on the page: create a credit card payment form and the page that is displayed after the charge has been processed.

You must use the payment form to charge your customer. The simplest way to integrate it is to use Stripe Checkout, which is a tool that allows you to easily accept payments. How does Stripe Checkout work? It generates a simple but functional payment form automatically. Include this code on your payment page to get it.

Now create a **charges.html.erb** layout under the **app/views/layouts** directory:

`<!DOCTYPE html>
<html>
<head></head>
<body>
<%= yield %>
</body>
</html>`

The next step is to create a checkout page **new.html.erb** in the **app/views/charges** folder in order to display the payment form, validate the credit card details and report errors:

`<%= form_tag charges_path do %>
<article>
<% if flash[:error].present? %>
<div id="error_explanation">
<p><%= flash[:error] %></p>
</div>
<% end %>
<label class="amount">
<span>Amount: $5.00</span>
</label>
</article>`

`<script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
data-key="<%= Rails.configuration.stripe[:publishable_key] %>"
data-description="Monthly subscription"
data-amount="500"
data-locale="auto"></script>
<% end %>`

Then add a **create.html.erb** view in the same directory in order to show the user a message about a successful transaction:

`<h2>Great! Your payment of $100 was successful!</h2>`

Now you know how to implement a payment gateway. We have added the payment form validating the details provided by the customer. In the next step, we generated a one-time token that will be submitted directly to your server. By default, the snippet will look like below, but it can be customized to match your brand’s colors. 

![](https://sloboda-studio.com/wp-content/uploads/2018/10/stripe-payment-form.jpg)