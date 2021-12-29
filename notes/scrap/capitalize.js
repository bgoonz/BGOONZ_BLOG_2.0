/*
Time Complexity
O( n )
1. The function takes an array of strings as its first argument.
2. The second argument is optional.If it' s not provided, the rest of the array will be converted to lowercase.
3. Thefunction returns a string that is the result of the first argument' s first element being converted to uppercase, and the rest of the array being converted to lowercase.
*/
function capitalize( [ first, ...rest ], lowerRest = false ) {
  const capitalized = first.toUpperCase() + ( lowerRest ? rest.join( '' ).toLowerCase() : rest.join( '' ) );
  return capitalized;
};
