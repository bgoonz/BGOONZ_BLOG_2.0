subtitle

2022-01-03

------------------------------------------------------------------------

title: GraphQL

category: API

------------------------------------------------------------------------

Intro
-----

Queries
-------

### Basic query

    {
        status;
    }

#### ↓

    {
        status: 'available';
    }

{: .-setup}

### Nesting

    { hero { name height } }

#### ↓

    { hero:
        { name: "Luke Skywalker",
          height: 1.74 } }

{: .-setup}

### Lists

    { friends { name } }

#### ↓

    {
        friends: [{ name: 'Luke Skywalker' }, { name: 'Han Solo' }, { name: 'R2D2' }];
    }

{: .-setup}

GraphQL queries look the same for both single items or lists of items.

### Lookups

    {
      hero(id: "1000") { id name }
    }

#### ↓

    { hero:
        { id: "1000",
        { name: "Luke Skywalker" } }

{: .-setup}

### Aliases

    {
      luke: hero(id: "1000") { name }
      han: hero(id: "1001") { name }
    }

#### ↓

    { luke:
        { name: "Luke Skywalker" },
        han:
        { name: "Han Solo" } }

{: .-setup}

### Operation names and variables

#### Query

    query FindHero($id: String!) {
      hero(id: $id) { name }
    }

Just to make things less ambiguous. Also, to use variables, you need an operation name.

#### Variables

    {
        id: '1000';
    }

### Mutations

#### Query

    { createReview($review) { id } }

#### Variables

    {
        review: {
            stars: 5;
        }
    }

#### ↓

    {
        createReview: {
            id: 5291;
        }
    }

Mutations are just fields that do something when queried.

### Multiple types

    {
      search(q: "john") {
        id
        ... on User { name }
        ... on Comment { body author { name } }
      }
    }

Great for searching.

Over HTTP
---------

#### GET

    fetch('http://myapi/graphql?query={ me { name } }');

#### POST

    fetch('http://myapi/graphql', {
      body: JSON.stringify({
        query: '...',
        operationName: '...',
        variables: { ... }
      })
    })

Schema
------

### Basic schemas

    type Query {
      me: User
      users(limit: Int): [User]
    }

    type User {
      id: ID!
      name: String
    }

See: [sogko/graphql-shorthand-notation-cheat-sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)

### Built in types

#### Scalar types

`Int` | Integer |  
`Float` | Float |  
`String` | String |  
`Boolean` | Boolean |  
`ID` | ID |

#### Type definitions

`scalar` | Scalar type |  
`type` | Object type |  
`interface` | Interface type |  
`union` | Union type |  
`enum` | Enumerable type |  
`input` | Input object type |

#### Type modifiers

`String` | Nullable string |  
`String!` | Required string |  
`[String]` | List of strings |  
`[String]!` | Required list of strings |  
`[String!]!` | Required list of required strings |

### Mutations

    type Mutation {
      users(params: ListUsersInput) [User]!
    }

### Interfaces

    interface Entity {
      id: ID!
    }

    type User implements Entity {
      id: ID!
      name: String
    }

### Enums

    enum DIRECTION {
      LEFT
      RIGHT
    }

    type Root {
      direction: DIRECTION!
    }

{: data-line="1,2,3,4”}

### Unions

    type Artist { ··· }
    type Album { ··· }

    union Result = Artist | Album

    type Query {
      search(q: String) [Result]
    }

{: data-line="4”}

References
----------

-   <a href="http://graphql.org/learn/queries/" class="uri">http://graphql.org/learn/queries/</a>
-   <a href="http://graphql.org/learn/serving-over-http/" class="uri">http://graphql.org/learn/serving-over-http/</a>
