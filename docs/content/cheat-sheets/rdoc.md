### Basic RDoc format

    # Foo.
    #
    # @example
    #
    #   y
    #   g
    #
    # @param [String] param_name The xx and xx.
    #
    # @see https://example.com/
    #
    # @return [true] if so

### Hash parameters

    # @param [Hash] opts the options to create a message with.
    # @option opts [String] :subject The subject
    # @option opts [String] :from ('nobody') From address
    # @option opts [String] :to Recipient email
    # @option opts [String] :body ('') The email's body

### Parameter types

    # @param (see User#initialize)
    # @param [OptionParser] opts the option parser object
    # @param [Array<String>] args the arguments passed from input. This
    #   array will be modified.
    # @param [Array<String, Symbol>] list the list of strings and symbols.
    # @param [Hash<Symbol, String>] a hash with symbol keys and string values
    #
    # The options parsed out of the commandline.
    # Default options are:
    #   :format => :dot

### Inline

    _bold_
    _emphasized_
    +code+

    https://www.example.com/
    See Models::User@Examples
    {Google}[https://google.com/]

### Skip

    def input # :nodoc:

    module MyModule # :nodoc: all

### Definition lists

    # == Definition lists
    #
    # list::  hi.
    # +foo+:: parameterized

    # == Definition lists
    # [foo]   also
    # [bar]   like this

### Return types

    # @return [String]
    # @return [String, nil] the name

### Callseq

    # :call-seq:
    #   ARGF.readlines(sep=$/)     -> array
    #   ARGF.readlines(limit)      -> array
    #   ARGF.readlines(sep, limit) -> array
    #
    #   ARGF.to_a(sep=$/)     -> array
    #   ARGF.to_a(limit)      -> array
    #   ARGF.to_a(sep, limit) -> array

### Category

    # :category: Utilities

### Sections

    # :section: Expiry methods
    # methods relating to expiring

    def expire!
    def expired?
    ...

### Using tomdoc

    # :markup: TomDoc

Place this at the beginning of the file.

Also see
--------

{: .-one-column}

-   <a href="http://rdoc.rubyforge.org/RDoc/Markup.html" class="uri">http://rdoc.rubyforge.org/RDoc/Markup.html</a>
-   <a href="https://www.rubydoc.info/gems/yard/file/docs/GettingStarted.md" class="uri">https://www.rubydoc.info/gems/yard/file/docs/GettingStarted.md</a> {: .-also-see}
