### Properties

    import { observable, computed } from 'mobx';

    class Page {
        @observable title = '';
        @observable published = false;
        @observable author = null;

        @computed get authorName() {
            return this.author || 'Anonymous';
        }
    }

### Actions

    class Page {
        @action publish() {
            this.published = true;
            // do ajax/async here if you like
        }
    }

### Plain objects

    const person = observable({
        name: 'Ella Fitzgerald'
    });

    const temp = observable(23)
    temp.get()
    temp.set(25)
    temp.observe(...)

Reactions
---------

### Importing

    import { autorun, autorunAsync, when } from 'mobx';

### autorun()

    // Runs it, finds out what it accessed, then observe those
    autorun(() => {
        console.log(page.title);
    });

### when()

    class Foo {
        constructor() {
            when(
                () => !this.isVisible,
                () => this.doSomething()
            );
        }
    }

### expr()

    // A temporary computed value. Its result is cached.
    render () {
      const isPublished = expr(() => page.published === true)
      if (isPublished) { ... }
    }

[Modifiers](http://mobxjs.github.io/mobx/refguide/modifiers.html)
-----------------------------------------------------------------

-   `asMap(obj)` - JS map (dynamic keys)
-   `asReference(fn)` - don’t observe me
-   `asStructure(obj)` - JS object (observe as deepEqual)
-   `asFlat(array)` - JS array (observe its children)

React
-----

### mobx-react

    import { observer } from 'mobx-react';

    @observer
    class PageView extends React.Component {
        render() {
            return <div>{this.props.page.title}</div>;
        }
    }

    <PageView page={page} />;

### Functional components

    import { observer } from 'mobx-react'

    const PageView = observer(({page}) => {
      <div>{page.title}</div>
    })

    <PageView page={page} />

References
----------

-   <a href="https://github.com/mobxjs/mobx" class="uri">https://github.com/mobxjs/mobx</a>
