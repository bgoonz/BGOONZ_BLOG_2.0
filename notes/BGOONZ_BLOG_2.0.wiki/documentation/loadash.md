/\*

\_.get( object, path, [ defaultValue ] )
source npm package

Gets the value at path of object.If the resolved value is undefined, the defaultValue is returned in its place.

Since
3.7 .0

Arguments
object( Object ): The object to query.
path( Array | string ): The path of the property to get.
[ defaultValue ](*): The value returned
for undefined resolved values.
Returns
( \* ): Returns the resolved value.

Example
var object = {
'a': [ {
'b': {
'c': 3
}
} ]
};
_.get( object, 'a[0].b.c' );
_.get( object, [ 'a', '0', 'b', 'c' ] );
\_.get( object, 'a.b.c', 'default' );
Try in REPL

\_.has( object, path )
source npm package

Checks
if path is a direct property of object.

Since
0.1 .0

Arguments
object( Object ): The object to query.
path( Array | string ): The path to check.
Returns
( boolean ): Returns true
if path exists,
else false.

Example
var object = {
'a': {
'b': 2
}
};
var other = _.create( {
'a': _.create( {
'b': 2
} )
} );
_.has( object, 'a' );
_.has( object, 'a.b' );
_.has( object, [ 'a', 'b' ] );
_.has( other, 'a' );
\*/
