### Multiline strings

    Multiline: |
        hello
        world

### Inheritance

    parent: &defaults
        a: 2
        b: 3

    child:
        <<: *defaults
        b: 4

### Reference content

    values: &ref
        - These values
        - will be reused below

    other_values:
        <<: *ref
