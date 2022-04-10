subtitle

2022-01-03

------------------------------------------------------------------------

title: Capybara category: Ruby libraries

weight: -5 tags: \[Featurable\]

------------------------------------------------------------------------

### Navigating

    visit articles_path

### Clicking links and buttons

    click_on 'Link Text'
    click_button
    click_link

### Interacting with forms

    attach_file 'Image', '/path/to/image.jpg'
    fill_in 'First Name', with: 'John'

    check 'A checkbox'
    uncheck 'A checkbox'

    choose 'A radio button'

    select 'Option', from: 'Select box'
    unselect

### Limiting

    within '.classname' do
      click '...'
    end

    within_fieldset :id do
      ...
    end

Querying
--------

### Predicates

    page.has_css?('.button')
    expect(page).to have_css('.button')
    page.should have_css('.button')

{: .-setup}

<table><thead><tr class="header"><th>Positive</th><th>Negative</th></tr></thead><tbody><tr class="odd"><td><code>has_content?</code></td><td><code>has_no_content?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_css?</code> <em>(selector)</em></td><td><code>has_no_css?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_xpath?</code> <em>(path)</em></td><td><code>has_no_xpath?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_link?</code> <em>(selector)</em></td><td><code>has_no_link?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_button?</code> <em>(selector)</em></td><td><code>has_no_button?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_field?</code> <em>(selector)</em></td><td><code>has_no_field?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_checked_field?</code> <em>(selector)</em></td><td><code>has_unchecked_field?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_table?</code> <em>(selector)</em></td><td><code>has_no_table?</code></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>has_select?</code> <em>(selector)</em></td><td><code>has_no_select?</code></td></tr></tbody></table>

{: .-headers.-left-align}

In Rspec, these also map to matchers like `page.should have_content`.

### Selectors

    expect(page).to have_button('Save')

    expect(page).to have_button('#submit')

    expect(page).to have_button('//[@id="submit"]')

The `selector` arguments can be text, CSS selector, or XPath expression.

### RSpec assertions

    page.has_button?('Save')

    expect(page).to have_no_button('Save')

In RSpec, you can use `page.should` assertions.

### About negatives

    expect(page).to have_no_button('Save')   # OK

    expect(page).not_to have_button('Save')  # Bad

Use `should have_no_*` versions with RSpec matchers because `should_not have_*` doesn’t wait for a timeout from the driver.

RSpec
-----

### Matchers

    expect(page).to \

{: .-setup}

      have_selector '.blank-state'
      have_selector 'h1#hola', text: 'Welcome'
      have_button 'Save'
      have_checked_field '#field'
      have_unchecked_field
      have_css '.class'
      have_field '#field'
      have_table '#table'
      have_xpath '//div'

      have_link 'Logout', href: logout_path

      have_select 'Language',
        selected: 'German'
        options: ['Engish', 'German']
        with_options: ['Engish', 'German'] # partial match

      have_text 'Hello',
        type: :visible # or :all
        # alias: have_content

### Common options

All matchers have these options: {: .-setup}

      text: 'welcome'
      text: /Hello/
      visible: true
      count: 4
      between: 2..5
      minimum: 2
      maximum: 5
      wait: 10

Other features
--------------

### Finding

    find(selector)
    find_button(selector)
    find_by_id(id)
    find_field(selector)
    find_link(selector)
    locate

### Scoping

    within '#delivery' do
      fill_in 'Street', with: 'Hello'
    end

    within :xpath, '//article'
    within_fieldset
    within_table
    within_frame
    scope_to

    find('#x').fill_in('Street', with: 'Hello')
    # same as within

### Scripting

    execute_script('$("input").trigger("change")')
    evaluate_script('window.ga')

Executes JavaScript.

### Debugging

    save_and_open_page

Opens the webpage in your browser.

### Page

    page
      .all('h3')
      .body
      .html
      .source
      .current_host
      .current_path
      .current_url

### AJAX

    using_wait_time 10 do
      ...
    end

### Misc

    drag
    field_labeled

### Page object

    page.status_code == 200
    page.response_headers

See: <a href="http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Session" class="uri">http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Session</a>

### Poltergeist

    Capybara.register_driver :poltergeist do |app|
      Capybara::Poltergeist::Driver.new(app, :inspector => true)
    end
    Capybara.javascript_driver = :poltergeist

Use [poltergeist](https://github.com/teampoltergeist/poltergeist) to integrate PhantomJS.

### Blacklist

    config.before :each, :js do
      page.driver.browser.url_blacklist = [
        'fonts.googleapis.com',
        'use.typekit.net',
        'f.vimeocdn.com',
        'player.vimeo.com',
        'www.googletagmanager.com'
      ].flat_map { |domain| [ "http://#{domain}", "https://#{domain}" ] }
    end

### Debugging

Enable `inspector: true` and then: {: .-setup}

    page.driver.debug

To pause execution for a while:

    page.driver.pause

Selenium
--------

### Accepting confirm() and alert()

    accept_alert { ... }
    dismiss_confirm { ... }
    accept_prompt(with: 'hi') { ... }

Alternatively:

    page.driver.browser.switch_to.alert.accept

### Updating session

    page.set_rack_session(foo: 'bar')

See also
--------

{: .-one-column}

-   <a href="http://rubydoc.info/github/jnicklas/capybara/Capybara/RSpecMatchers" class="uri">http://rubydoc.info/github/jnicklas/capybara/Capybara/RSpecMatchers</a>
-   <a href="http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Matchers" class="uri">http://www.rubydoc.info/github/jnicklas/capybara/master/Capybara/Node/Matchers</a>
