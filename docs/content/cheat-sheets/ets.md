subtitle

2022-01-03

------------------------------------------------------------------------

title: Erlang ETS category: Elixir

weight: -1

------------------------------------------------------------------------

ETS
---

### Usage

    iex> table = :ets.new(:my_table, [])
         8211

    iex> :ets.insert(table, {:fruit, "Apple"})
    iex> :ets.lookup(table, :fruit)
         [{:fruit, "Apple"}]

    iex> :ets.delete(table)
    iex> :ets.delete_all_objects(table)

### Flags

    iex> table = :ets.new(:my_table, [:set, :protected])

{: .-setup}

`:set` | no duplicate keys (or: `:ordered_set`, `:bag`, `:duplicate_bag`) |  
`:protected` | only this process can use it (or: `:public`, `:private`) |

### Ordered sets

    :ets.first(table)
    :ets.last(table)
    :ets.next(table, key)
    :ets.prev(table, key)

References
----------

{: .-one-column}

-   <a href="http://erlang.org/doc/man/ets.html" class="uri">http://erlang.org/doc/man/ets.html</a>
-   <a href="http://learnyousomeerlang.com/ets" class="uri">http://learnyousomeerlang.com/ets</a>
