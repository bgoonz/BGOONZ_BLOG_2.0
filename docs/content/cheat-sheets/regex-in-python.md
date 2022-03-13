# Regex In Python

### What Are Regular Expressions?

Regular expressions are patterns that help a user match character combinations in text files and strings. You can use regular expressions to filter or find a specific pattern in the output of a command or a document.

There are various use cases of regular expressions, the most renowned being [the grep command in Linux](https://www.makeuseof.com/grep-command-practical-examples/). Other applications include information filtering such as extracting email addresses and phone numbers from a data dump.

The main reason why many developers stray away from regular expressions is the lack of awareness about the power of pattern matching. Some even find regular expressions confusing because of the hefty amount of characters and sequences used in the patterns.

Whatever the reason may be, regular expressions are and will be one of the most important aspects of programming that everyone should know about.

### Regular Expressions: Matching Characters and Sequences

Regex is a whole new language in itself. A regex engine interprets patterns comprised of several characters equipped with specific meanings. Basic literals such as alphanumeric characters match themselves. But complex characters such as $, \*, +, {, etc. aid in higher-order matching.

1. **Asterisk (\*):** Matches the preceding character zero or more times. The literal meaning of the character would be "Element multiplied n times". For example, if the regular expression is **abc\***, the strings matched will be ab, abc, abcc, abccc, abcccc, etc. The expression **\[bc]\*** will match bc, bcbc, bcbc, etc.
2. **Plus (+):** Matches the preceding character one or more times. The working of the **+** character is similar to **\***, but the **+** character omits the pattern if the character doesn't occur. For example, **abc+** will match abc, abcc, abccc, etc. but not ab.
3. **Question Mark (?):** Matches the preceding character zero or one time(s). For example, the pattern **abc?** will match ab and abc only.
4. **Pipe (|):** Used as a binary **OR** operator. Matches either of the characters preceding and succeeding the pipe. For example, **a|b** will match either a or b.
5. **Dot (.):** Matches a character whose identity is unknown. For example, **a.c** will match aac, abc, acc, a2c, and so on.
6. **Carrot (^):** Matches the first character in the pattern. For example, **^Ra** will match words starting with **Ra** such as Rabbit, Raccoon, and Random.
7. **Dollar ($):** Matches the last character in the pattern. For example, **an$** will match words ending with **an** such as Van, Dan, and Plan.
8. **Hyphen (-):** Used to define a range of characters. For example, **\[0-9]** will match all single-digit numeric characters.

Special sequences used in regular expression patterns are:

1. **\A:** Returns a match if the succeeding characters are present at the beginning of the string. For example, **\AThe** will match words starting with the **The** such as The, Them, They, etc.
2. **\b:** Returns a match if the character is found at either the beginning or at the end of a word. For example, **\bmad** and **mad\b** will match words such as **made** and **nomad** respectively.
3. **\B:** Returns a match if the character is not found at the beginning or end of a word.
4. **\d:** Matches numerical characters present in the string. For example, **/d\*** will match numbers such as 1, 12, 1232, etc.
5. **\D:** Matches non-numerical characters in the string. **/D** will match a, b, c, f, etc.
6. **\s:** Matches a whitespace character in the text.
7. **\S:** Matches a non-whitespace character in the text.
8. **\w:** Returns a match if the string contains alphanumeric characters including underscores. For example, **\w** will match a, b, c, d, 1, 2, 3, etc.
9. **\W:** Returns a match if the string doesn't contain alphanumeric characters or underscores.
10. **\Z:** Matches characters at the end of a string. For example, **end\Z** will match words ending with **end** such as bend, mend, tend, etc.

### Python Methods for Regular Expressions

In Python, the **re** library provides all the necessary functions and utilities required to implement regex in your programs. You don't have to download the library using pip as it comes preinstalled with the Python interpreter.

To import the **re** library in Python, add the following code to your script:

```
import re
```

Note that while passing regular expressions in Python, we use raw strings as they do not interpret special characters such as and differently.

#### Match()

The **re.match()** method in Python returns a regex object if the program finds a match at the beginning of the specified string. This function takes two basic arguments:

```
re.match(pattern, string)
```

...where **pattern** is the regular expression and **string** is the text that needs to be searched.

Take a look at the code snippet below.

```
import rematch = re.match(r'Word', "This sentence contains a Word")print(match)
```

The **r** character before the string stands for raw string.

Output:

```
None
```

The aforementioned code returns **None** because **Word** wasn't present at the beginning of the string.

If a match is found, you can print the match using the **group()** method that belongs to the regex object.

```
import rematch = re.match(r'Word', "Word is hard to read")print(match.group(0))
```

Output:

```
Word
```

#### Search()

The **re.search()** method takes similar arguments as re.match(). While match() only returns matches present at the beginning of the string, **search()** will return matches found at any index in the string.

```
import rematch = re.search(r'Word', "This sentence contains a Word. Word is hard to read.")print(match.group(0))
```

Note that the **match()** and **search()** methods will only return one pattern match. In the above-mentioned code, **Word** appears twice. But the **search()** function will only match the first occurrence of the word.

```
Word
```

#### FindAll()

As you can already guess, the **findall()** method returns every possible match in the string.

```
import rematch = re.search(r'Word', "This sentence contains a Word. Word is hard to read.")for elem in match: print(elem)
```

Instead of returning a regex object, the findall() function returns a list of all the matches. You can iterate through the list using a [for loop in python](https://www.makeuseof.com/learn-for-loops-in-python/).

#### Split()

If you want to split a string into sub-strings using a pattern as a delimiter, then the **split()** function is the one you need.

```
import resplit = re.split(r'and', "This word and that and this are different.")print(split)
```

Output:

```
['This word", "that", "this are different."]
```

#### Sub()

The **sub()** method allows a user to substitute a specific word in the place of a pattern. It takes the following arguments.

```
re.sub(pattern, replacement, string)
```

Consider this code snippet:

```
import reresult = re.sub(r'and', 'or', "Dave and Harry must be punished.")print(result)
```

Output:

```
Dave or Harry must be punished.
```

#### Compile()

The **re.compile()** method in the **re** library allows a user to store a compiled version of the regular expression pattern in the memory. Then, using the compiled object, the user can quickly filter the specified text dump for matched patterns.

```
import repattern = re.compile('Python')match = pattern.findall("Python is a great language for writing scripts. Python is easy to learn.")print(match)
```

This function is primarily used for saving patterns that are resource-intensive and need a lot of time to run. Compiling and saving the pattern as an object beforehand solves this issue.

### Leverage the Power of Regex With Python

When you are working with text files and output, regex is a great tool to have at your disposal. You can quickly write some code to filter or substitute specific patterns in the document.

Memorizing all the characters and matching sequences can be hard if you're just starting out with regex. To get better at regular expressions, referring to a list of characters, methods, and sequences every now and then will definitely help you in the long run.
