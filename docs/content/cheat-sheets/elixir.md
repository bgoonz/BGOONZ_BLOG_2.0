subtitle

2022-01-03

------------------------------------------------------------------------

title: Elixir category: Elixir

tags: \[New\] weight: -10

------------------------------------------------------------------------

Getting started
---------------

### Hello world

    # hello.exs
    defmodule Greeter do
      def greet(name) do
        message = "Hello, " <> name <> "!"
        IO.puts message
      end
    end

    Greeter.greet("world")

    elixir hello.exs
    # Hello, world!

{: .-setup}

### Variables

    age = 23

### Maps

    user = %{
      name: "John",
      city: "Melbourne"
    }

    IO.puts "Hello, " <> user.name

{: .-setup}

### Lists

    users = [ "Tom", "Dick", "Harry" ]

{: data-line="1”}

    Enum.map(users, fn user ->
      IO.puts "Hello " <> user
    end)

### Piping

    source
    |> transform(:hello)
    |> print()

{: data-line="2,3”}

    # Same as:
    print(transform(source, :hello))

These two are equivalent.

### Pattern matching

    user = %{name: "Tom", age: 23}
    %{name: username} = user

{: data-line="2”}

This sets `username` to `"Tom"`.

### Pattern matching in functions

    def greet(%{name: username}) do
      IO.puts "Hello, " <> username
    end

    user = %{name: "Tom", age: 23}

{: data-line="1”}

Pattern matching works in function parameters too.

Control flow
------------

### If

    if false do
      "This will never be seen"
    else
      "This will"
    end

### Case

    case {1, 2, 3} do
      {4, 5, 6} ->
        "This clause won't match"
      {1, x, 3} ->
        "This will match and bind x to 2"
      _ ->
       "This will match any value"
    end

### Cond

    cond do
      1 + 1 == 3 ->
        "I will never be seen"
      2 * 5 == 12 ->
        "Me neither"
      true ->
        "But I will (this is essentially an else)"
    end

### Errors

    try do
      throw(:hello)
    catch
      message -> "Got #{message}."
    after
      IO.puts("I'm the after clause.")
    end

Types
-----

### Primitives

<table><thead><tr class="header"><th>Sample</th><th>Type</th></tr></thead><tbody><tr class="odd"><td><code>nil</code></td><td>Nil/null</td></tr><tr class="even"><td><code>true</code> <em>/</em> <code>false</code></td><td>Boolean</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>?a</code></td><td>Integer (ASCII)</td></tr><tr class="odd"><td><code>23</code></td><td>Integer</td></tr><tr class="even"><td><code>3.14</code></td><td>Float</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>'hello'</code></td><td>Charlist</td></tr><tr class="odd"><td><code>&lt;&lt;2, 3&gt;&gt;</code></td><td>Binary</td></tr><tr class="even"><td><code>"hello"</code></td><td>Binary string</td></tr><tr class="odd"><td><code>:hello</code></td><td>Atom</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>[a, b]</code></td><td>List</td></tr><tr class="even"><td><code>{a, b}</code></td><td>Tuple</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>%{a: "hello"}</code></td><td>Map</td></tr><tr class="odd"><td><code>%MyStruct{a: "hello"}</code></td><td>Struct</td></tr><tr class="even"><td><code>fn -&gt; ... end</code></td><td>Function</td></tr></tbody></table>

### Type checks

    is_atom/1
    is_bitstring/1
    is_boolean/1
    is_function/1
    is_function/2
    is_integer/1
    is_float/1

    is_binary/1
    is_list/1
    is_map/1
    is_tuple/1

    is_nil/1
    is_number/1
    is_pid/1
    is_port/1
    is_reference/1

### Operators

    left != right   # equal
    left !== right  # match
    left ++ right   # concat lists
    left <> right   # concat string/binary
    left =~ right   # regexp

Modules
-------

### Importing

    require Redux   # compiles a module
    import Redux    # compiles, and you can use without the `Redux.` prefix

    use Redux       # compiles, and runs Redux.__using__/1
    use Redux, async: true

    import Redux, only: [duplicate: 2]
    import Redux, only: :functions
    import Redux, only: :macros

    import Foo.{Bar, Baz}

### Aliases

    alias Foo.Bar, as: Bar
    alias Foo.Bar   # same as above

    alias Foo.{Bar, Baz}

String
------

### Functions

    import String

{: .-setup}

    str = "hello"
    str |> length()        # → 5
    str |> codepoints()    # → ["h", "e", "l", "l", "o"]
    str |> slice(2..-1)    # → "llo"
    str |> split(" ")      # → ["hello"]
    str |> capitalize()    # → "Hello"
    str |> match(regex)

### Inspecting objects

    inspect(object, opts \\ [])

    value |> IO.inspect()

    value |> IO.inspect(label: "value")

Numbers
-------

### Operations

    abs(n)
    round(n)
    rem(a, b)   # remainder (modulo)
    div(a, b)   # integer division

### Float

    import Float

{: .-setup}

    n = 10.3

{: .-setup}

    n |> ceil()            # → 11.0
    n |> ceil(2)           # → 11.30
    n |> to_string()       # → "1.030000+e01"
    n |> to_string([decimals: 2, compact: true])

    Float.parse("34")  # → { 34.0, "" }

### Integer

    import Integer

{: .-setup}

    n = 12

{: .-setup}

    n |> digits()         # → [1, 2]
    n |> to_charlist()    # → '12'
    n |> to_string()      # → "12"
    n |> is_even()
    n |> is_odd()

    # Different base:
    n |> digits(2)        # → [1, 1, 0, 0]
    n |> to_charlist(2)   # → '1100'
    n |> to_string(2)     # → "1100"

    parse("12")           # → {12, ""}
    undigits([1, 2])      # → 12

### Type casting

    Float.parse("34.1")    # → {34.1, ""}
    Integer.parse("34")    # → {34, ""}

    Float.to_string(34.1)  # → "3.4100e+01"
    Float.to_string(34.1, [decimals: 2, compact: true])  # → "34.1"

Map
---

### Defining

    m = %{name: "hi"}       # atom keys (:name)
    m = %{"name" => "hi"}   # string keys ("name")

### Updating

    import Map

{: .-setup}

    m = %{m | name: "yo"}  # key must exist

    m |> put(:id, 2)      # → %{id: 2, name: "hi"}
    m |> put_new(:id, 2)  # only if `id` doesn't exist (`||=`)

    m |> put(:b, "Banana")
    m |> merge(%{b: "Banana"})
    m |> update(:a, &(&1 + 1))
    m |> update(:a, fun a -> a + 1 end)

    m |> get_and_update(:a, &(&1 || "default"))
    # → {old, new}

### Deleting

    m |> delete(:name)  # → %{}
    m |> pop(:name)     # → {"John", %{}}

### Reading

    m |> get(:id)       # → 1
    m |> keys()         # → [:id, :name]
    m |> values()       # → [1, "hi"]

    m |> to_list()      # → [id: 1, name: "hi"]
                        # → [{:id, 1}, {:name, "hi"}]

### Deep

    put_in(map, [:b, :c], "Banana")
    put_in(map[:b][:c], "Banana")    # via macros

    get_and_update_in(users, ["john", :age], &{&1, &1 + 1})

### Constructing from lists

    Map.new([{:b, 1}, {:a, 2}])
    Map.new([a: 1, b: 2])
    Map.new([:a, :b], fn x -> {x, x} end)  # → %{a: :a, b: :b}

### Working with structs

#### Struct to map

    Map.from_struct(%AnyStruct{a: "b"})  # → %{a: "b"}

#### Map to struct

    struct(AnyStruct, %{a: "b"})  # → %AnyStruct{a: "b"}

List
----

    import List

{: .-setup}

    l = [ 1, 2, 3, 4 ]

{: .-setup}

    l = l ++ [5]         # push (append)
    l = [ 0 | list ]     # unshift (prepend)

    l |> first()
    l |> last()

    l |> flatten()
    l |> flatten(tail)

Also see [Enum](#enum).

Enum
----

### Usage

    import Enum

{: .-setup}

    list = [:a, :b, :c]

{: .-setup}

    list |> at(0)         # → :a
    list |> count()       # → 3
    list |> empty?()      # → false
    list |> any?()        # → true

    list |> concat([:d])  # → [:a, :b, :c, :d]

Also, consider streams instead.

### Map/reduce

    list |> reduce(fn)
    list |> reduce(acc, fn)
    list |> map(fn)
    list |> reject(fn)
    list |> any?(fn)
    list |> empty?(fn)

    [1, 2, 3, 4]
    |> Enum.reduce(0, fn(x, acc) -> x + acc end)

Tuple
-----

### Tuples

    import Tuple

{: .-setup}

    t = { :a, :b }

    t |> elem(1)    # like tuple[1]
    t |> put_elem(index, value)
    t |> tuple_size()

### Keyword lists

    list = [{ :name, "John" }, { :age, 15 }]
    list[:name]

    # For string-keyed keyword lists
    list = [{"size", 2}, {"type", "shoe"}]
    List.keyfind(list, "size", 0)  # → {"size", 2}

Functions
---------

### Lambdas

    square = fn n -> n*n end
    square.(20)

### & syntax

    square = &(&1 * &1)
    square.(20)

    square = &Math.square/1

### Running

    fun.(args)
    apply(fun, args)
    apply(module, fun, args)

### Function heads

    def join(a, b \\ nil)
    def join(a, b) when is_nil(b) do: a
    def join(a, b) do: a <> b

Structs
-------

### Structs

    defmodule User do
      defstruct name: "", age: nil
    end

    %User{name: "John", age: 20}

    %User{}.struct  # → User

See: [Structs](http://elixir-lang.org/getting-started/structs.html)

Protocols
---------

### Defining protocols

    defprotocol Blank do
      @doc "Returns true if data is considered blank/empty"
      def blank?(data)
    end

    defimpl Blank, for: List do
      def blank?([]), do: true
      def blank?(_), do: false
    end

    Blank.blank?([])  # → true

### Any

    defimpl Blank, for: Any do ... end

    defmodule User do
      @derive Blank     # Falls back to Any
      defstruct name: ""
    end

### Examples

-   `Enumerable` and `Enum.map()`
-   `Inspect` and `inspect()`

Comprehensions
--------------

### For

    for n <- [1, 2, 3, 4], do: n * n
    for n <- 1..4, do: n * n

    for {key, val} <- %{a: 10, b: 20}, do: val
    # → [10, 20]

    for {key, val} <- %{a: 10, b: 20}, into: %{}, do: {key, val*val}

### Conditions

    for n <- 1..10, rem(n, 2) == 0, do: n
    # → [2, 4, 6, 8, 10]

### Complex

    for dir <- dirs,
        file <- File.ls!(dir),          # nested comprehension
        path = Path.join(dir, file),    # invoked
        File.regular?(path) do          # condition
      IO.puts(file)
    end

Misc
----

### Metaprogramming

    __MODULE__
    __MODULE__.__info__

    @after_compile __MODULE__
    def __before_compile__(env)
    def __after_compile__(env, _bytecode)
    def __using__(opts)    # invoked on `use`

    @on_definition {__MODULE__, :on_def}
    def on_def(_env, kind, name, args, guards, body)

    @on_load :load_check
    def load_check

### Regexp

    exp = ~r/hello/
    exp = ~r/hello/i
    "hello world" =~ exp

### Sigils

    ~r/regexp/
    ~w(list of strings)
    ~s|strings with #{interpolation} and \x20 escape codes|
    ~S|no interpolation and no escapes|
    ~c(charlist)

Allowed chars: `/` `|` `"` `'` `(` `[` `{` `<` `"""`. See: [Sigils](http://elixir-lang.org/getting-started/sigils.html)

### Type specs

    @spec round(number) :: integer

    @type number_with_remark :: {number, String.t}
    @spec add(number, number) :: number_with_remark

Useful for [dialyzer](http://www.erlang.org/doc/man/dialyzer.html). See: [Typespecs](http://elixir-lang.org/getting-started/typespecs-and-behaviours.html)

### Behaviours

    defmodule Parser do
      @callback parse(String.t) :: any
      @callback extensions() :: [String.t]
    end

    defmodule JSONParser do
      @behaviour Parser

      def parse(str), do: # ... parse JSON
      def extensions, do: ["json"]
    end

See: [Module](http://elixir-lang.org/docs/stable/elixir/Module.html)

References
----------

{: .-one-column}

-   [Learn Elixir in Y minutes](https://learnxinyminutes.com/docs/elixir/)
