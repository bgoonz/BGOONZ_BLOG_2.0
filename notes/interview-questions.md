## Russian Dolls

Oleg has _N_ dolls of various sizes. He can place the smaller dolls inside the larger ones, but dolls of the exact same size cannot be placed inside each other. He needs to find the minimum number of dolls that remain when the maximum number of dolls have been packed.

###

![](https://s3.amazonaws.com/eduglider-content-p/default/russian-nesting-dolls-shutterstock_178065278-copy-34875-1522351668544-34875-1556901487719.jpg)

### Input

The first line of input contains an integer _N_, representing the number of dolls initially.\
The second line consists of _N_ space-separated integers representing the size of dolls.

###

### Constraints

1 ≤ _N_ ≤ 105\
1 ≤ _size of doll_ ≤ 105

###

### Output

Print an integer representing the minimum number of dolls Oleg has after placing all smaller dolls inside the larger dolls.

### Example #1

Input

4
2 2 3 3

Output

2

Explanation: In order to be left with the minimum number of dolls, Oleg will do the following:

-   Puts doll at index 1 inside doll at index 3 i.e doll of size two in size three.
-   Puts doll at index 2 inside box at index 4 i.e doll of size two in size three

Now he is left with two dolls of size three which cannot be further placed inside each other. So, the output is 2.

### ![](https://s3.amazonaws.com/eduglider-content-p/default/img_14032018_191456_0-5352-1525358902966.png)Example #2

Input

6
1 2 2 3 4 5

Output

2

Explanation: Oleg will place dolls at index (1, 2, 4, 5) in the doll at index 6. So, he will remain with two dolls of sizes two and five.

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)

[](http://www.firepad.io/)
