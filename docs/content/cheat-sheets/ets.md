---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

title: Erlang ETS
category: Elixir

weight: -1

---

## ETS

### Usage

```elixir
iex> table = :ets.new(:my_table, [])
     8211
```

```elixir
iex> :ets.insert(table, {:fruit, "Apple"})
iex> :ets.lookup(table, :fruit)
     [{:fruit, "Apple"}]
```

```elixir
iex> :ets.delete(table)
iex> :ets.delete_all_objects(table)
```

### Flags

```elixir
iex> table = :ets.new(:my_table, [:set, :protected])
```

{: .-setup}

| `:set` | no duplicate keys (or: `:ordered_set`, `:bag`, `:duplicate_bag`) |
| `:protected` | only this process can use it (or: `:public`, `:private`) |

### Ordered sets

```elixir
:ets.first(table)
:ets.last(table)
:ets.next(table, key)
:ets.prev(table, key)
```

## References

{: .-one-column}

-   <http://erlang.org/doc/man/ets.html>
-   <http://learnyousomeerlang.com/ets>
