import pyparsing as pp
single_value = pp.QuotedString(quoteChar="'", endQuoteChar="'")
parser = pp.nestedExpr(opener="[", closer="]",
                       content=single_value,
                       ignoreExpr=None)

example = "['title|You are looking at article' ['@articlenumber'] ['@articlename']]"
print(parser.parseString(example, parseAll=True))

text = '{They {mean to {win}} Wimbledon}'
print(pp.nestedExpr(opener='{', closer='}').parseString(text)
