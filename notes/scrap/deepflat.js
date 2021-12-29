function deepFlatten( arr ) {
    return [].concat( ...arr.map( v => {
      if ( Array.isArray( v ) ) {
        return deepFlatten( v );
      } else {
        return v;
      }
    } ) );
  }
console.log( deepFlatten( [ 1, [ 2, [ 3, [ 4, 5 ] ] ] ] ) );
