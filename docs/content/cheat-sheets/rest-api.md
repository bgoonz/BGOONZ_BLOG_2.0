### Status codes

<table><thead><tr class="header"><th>Code</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>200 OK</code></td><td>Successful get, patch (return a JSON object)</td></tr><tr class="even"><td><code>201 Created</code></td><td>Successful post (return a JSON object)</td></tr><tr class="odd"><td><code>202 Accepted</code></td><td>Successful post, delete, path - async</td></tr><tr class="even"><td><code>204 No content</code></td><td>Successful delete</td></tr><tr class="odd"><td><code>206 Partial content</code></td><td>Successful get - async</td></tr></tbody></table>

### Error status

<table><thead><tr class="header"><th>Code</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>401 Unauthorized</code></td><td>Not authenticated</td></tr><tr class="even"><td><code>403 Forbidden</code></td><td>Authenticated, but no permissions</td></tr><tr class="odd"><td><code>422 Unprocessable entity</code></td><td>Validation</td></tr></tbody></table>

### Errors

    HTTP/1.1 401 Unauthorized
    Content-Type: application/json
    {
      'id': 'auth_failed',
      'message': "You're not logged in."
    }

Here’s an example of a possible error reply.

### Versioning

    GET /api/foo
    Accept: application/json; version=1

You can pass a `version=x` to the Accept request header. [Info here](https://github.com/interagent/http-api-design#version-with-accepts-header)

### Authentication

    curl -is https://$TOKEN@api.example.com/

### Methods

<table><thead><tr class="header"><th>Request</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>GET /articles/1</code></td><td>read, returns <em>200</em></td></tr><tr class="even"><td><code>PUT /articles/1</code></td><td>edit (or path), returns <em>200</em></td></tr><tr class="odd"><td><code>DELETE /articles/1</code></td><td>delete, returns <em>200</em></td></tr><tr class="even"><td><code>POST /articles</code></td><td>create, returns <em>201</em></td></tr><tr class="odd"><td><code>GET /articles</code></td><td>list, returns <em>200</em></td></tr></tbody></table>

### References

-   [interagent/http-api-design](https://github.com/interagent/http-api-design) *(github.com)*
