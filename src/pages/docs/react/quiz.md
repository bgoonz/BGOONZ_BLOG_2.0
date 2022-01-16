




What we know:

A top-level App component returns <Button /> from its render() method.

Question:

What is the relationship between <Button /> and this in that Button’s render()?

Answer:

<Button> is a React "element".
If you log it, you will see a plain object like { type: Button, props: {} }.

The element does not represent anything on the screen at that point.
It is a description of what App wants to be rendered.

At some point, React will look at that description and think: “Hmm, there was no Button here but now there should be. So I’ll create a Button instance.”

This Button instance created by React is this value in the render() and lifecycle methods. It’s only useful for calling setState() or reading the props and state.

If App gets re-rendered and React sees a <Button /> in its output again, it will think: “Hmm, I already have a Button instance exactly at the same spot. Rather than create a new one, I will just update props on the existing one and re-render it.”

Let’s recap.

<Button /> is an element, a description of what should be rendered. this inside the Button is the actual instance React created based on that description.

App can return a different <Button /> element every time but as long as its key doesn’t change, and it is still a <Button /> and not a <Door />, React will keep using the same instance.

Question:

Does rendering <Button><Icon /></Button> guarantee that an Icon mounts?

It doesn’t. Ultimately it’s always up to the component to decide what to do with its children. For example, the Button implementation could completely ignore them and render something else:

function Button(props) {
  return <h1>I render whatever I want</h1>
}
Interestingly, it could also render children multiple times:

function Button(props) {
  return (
    <div>
      I like to repeat things.
      {props.children}
      {props.children}
      {props.children}
    </div>
  );
}
Ultimately, children is not a special prop in any way except for JSX sugar syntax. <Button><Icon /></Button> is technically the same as <Button children={<Icon />} />, and it’s up to the component how to treat its input props.

Question:

Can the App change anything in the Button output? What and how?

Answer:

There have been a few fun answers in the quiz comments so I will direct you to them. Indeed, since JavaScript doesn't provide any guarantees, technically you can hijack Button before React gets a chance to render it.

However, normally there is no way for a parent component to control the child output except by two mechanisms: passing props and providing context. You probably already know about props, and I won’t talk about the context because it’s an experimental API and has a few pitfalls. Don’t use context in apps unless you know its pitfalls well.

Of course, if you get a DOM node for the component via refs, you can do anything you want with the DOM nodes of other components, but it will likely mess up React.