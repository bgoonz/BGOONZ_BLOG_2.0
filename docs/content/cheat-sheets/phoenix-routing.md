### Showing routes

    mix phx.routes        # 1.3+
    mix phoenix.routes    # 1.2 and below

See: [Mix.Tasks.Phoenix.Routes](https://hexdocs.pm/phoenix/Mix.Tasks.Phoenix.Routes.html) *(hexdocs.pm)*

### Single routes

    get "/", PageController, :index

Also: `put` `post` `patch` `options` `delete` `head`

### Resources

    resources "/users", UserController
    resources "/users", UserController, only: [:index, :show]
    resources "/users", UserController, except: [:delete]

    resources "/users", UserController,
      as: :person    # helper name (person_path)
      name: :person  # ...?
      param: :id     # name of parameter for this resource

Generates these routes:

<table><thead><tr class="header"><th>Method</th><th>Path</th><th>Helper</th></tr></thead><tbody><tr class="odd"><td>GET</td><td><code>/users</code></td><td><code>user_path(:index)</code></td></tr><tr class="even"><td>GET</td><td><code>/users/new</code></td><td><code>user_path(:new)</code></td></tr><tr class="odd"><td>GET</td><td><code>/users/:id</code></td><td><code>user_path(:show, user)</code></td></tr><tr class="even"><td>GET</td><td><code>/users/:id/edit</code></td><td><code>user_path(:edit, user)</code></td></tr><tr class="odd"><td>POST</td><td><code>/users</code></td><td><code>user_path(:create, user)</code></td></tr><tr class="even"><td>PATCH/PUT</td><td><code>/users/:id</code></td><td><code>user_path(:update, user)</code></td></tr><tr class="odd"><td>DELETE</td><td><code>/users/:id</code></td><td><code>user_path(:delete, user)</code></td></tr></tbody></table>

{: .-left-align}

See: [resources/4](https://hexdocs.pm/phoenix/Phoenix.Router.html#resources/4) *(hexdocs.pm)*

### Path helpers

    user_path(conn, :index)                 # → /users
    user_path(conn, :show, 17)              # → /users/17
    user_path(conn, :show, %User{id: 17})   # → /users/17
    user_path(conn, :show, 17, admin: true) # → /users/17?admin=true

    user_url(conn, :index) # → "http://localhost:4000/users"

    MyApp.Router.Helpers.user_path(MyApp.Endpoint, :index)

See: [Helpers](https://hexdocs.pm/phoenix/Phoenix.Router.html#module-helpers) *(hexdocs.pm)*

### Nested resources

    resources "/users", UserController do
      resources "/posts", PostController
    end

    user_post_path(:index, 17)     # → /users/17/posts
    user_post_path(:show, 17, 12)  # → /users/17/posts/12

See: [Scopes and resources](https://hexdocs.pm/phoenix/Phoenix.Router.html#module-scopes-and-resources) *(hexdocs.pm)*

### Scoped routes

    scope "/admin" do
      pipe_through :browser
      resources "/reviews", MyApp.Admin.ReviewController
    end
    # reviews_path() -> /admin/reviews

    scope "/admin", as: :admin do: ... end
    # admin_reviews_path() -> /admin/reviews

See: [scope/2](https://hexdocs.pm/phoenix/Phoenix.Router.html#scope/2) *(hexdocs.pm)*
