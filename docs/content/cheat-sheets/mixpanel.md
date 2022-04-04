### Identify

    mixpanel.identify('284');
    mixpanel.people.set({ $email: 'hi@gmail.com' });

    // Set common properties
    mixpanel.register({ age: 28, gender: 'male' });

### Track events

    mixpanel.track('Login success');
    mixpanel.track('Search', { query: 'cheese' });

### References

-   <a href="https://mixpanel.com/help/reference/javascript" class="uri">https://mixpanel.com/help/reference/javascript</a>
