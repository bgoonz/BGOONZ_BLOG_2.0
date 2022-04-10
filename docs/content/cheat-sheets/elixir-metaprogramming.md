subtitle

2022-01-03

------------------------------------------------------------------------

title: Elixir metaprogramming category: Elixir

------------------------------------------------------------------------

Kernel
------

Most of these magic is defined in [Kernel.SpecialForms](http://devdocs.io/elixir/elixir/kernel.specialforms).

### Pseudo-variables

    __DIR__     # current dir
    __MODULE__  # current module
    __CALLER__  # caller of the function

### [`__ENV__`](http://devdocs.io/elixir/elixir/kernel.specialforms#__ENV__/0)

    Map.keys(__ENV__)
    [:__struct__, :aliases, :context, :context_modules, :export_vars, :file,
     :function, :functions, :lexical_tracker, :line, :macro_aliases, :macros,
     :module, :requires, :vars]

    __CALLER__.module |> Module.definitions_in |> IO.inspect

    apply(Enum, :reverse, [[1, 2, 3]])
