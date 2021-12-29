const utilObj = {
  "anagrams": function anagrams( str ) {
    if ( str.length <= 2 )
      return str.length === 2 ? [ str, str[ 1 ] + str[ 0 ] ] : [ str ];
    return str
      .split( '' )
      .reduce(
        ( acc, letter, i ) => acc.concat( anagrams( str.slice( 0, i ) + str.slice( i + 1 ) ).map( val => letter + val ) ),
        []
      );
  },
  "arrayToHtmlList": function arrayToHTMLList( arr, listID ) {
    return document.querySelector( `#${ listID }` ).innerHTML += arr
      .map( item => `<li>${ item }</li>` )
      .join( '' );
  },
  "ary": function ary( fn, n ) {
    return ( ...args ) => fn( ...args.slice( 0, n ) );
  },
  "atob": function atob( str ) {
    return Buffer.from( str, 'base64' ).toString( 'binary' );
  },
  "average": function average( ...nums ) {
    return nums.reduce( ( acc, val ) => acc + val, 0 ) / nums.length;
  },
  "aveargeBy": function averageBy( arr, fn ) {
    return arr
      .map( typeof fn === 'function' ? fn : val => val[ fn ] )
      .reduce( ( acc, val ) => acc + val, 0 ) / arr.length;
  },
  "bind": function bind( fn, context, ...args ) {
    return function () {
      return fn.apply( context, args.concat( ...arguments ) );
    };
  },
  "bindAll": function bindAll( obj, ...fns ) {
    return fns.forEach(
      fn => (
        ( f = obj[ fn ] ),
        ( obj[ fn ] = function () {
          return f.apply( obj );
        } )
      )
    );
  },
  "bindKey": function bindKey( context, fn, ...boundArgs ) {
    return ( ...args ) => context[ fn ].apply( context, [ ...boundArgs, ...args ] );
  },
  "bota": function btoa( str ) {
    return new Buffer( str, 'binary' ).toString( 'base64' );
  },
  "bottomVisible": function bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >=
      ( document.documentElement.scrollHeight || document.documentElement.clientHeight );
  },
  "byteSize": function byteSize( str ) {
    return new Blob( [ str ] ).size;
  },
  "call": function call( key, ...args ) {
    return context => context[ key ]( ...args );
  },
  "capitalize": function capitalize( [ first, ...rest ], lowerRest = false ) {
    return first.toUpperCase() + ( lowerRest ? rest.join( '' ).toLowerCase() : rest.join( '' ) );
  },
  "capitalizeEveryWord": function capitalizeEveryWord( str ) {
    return str.replace( /\b[a-z]/g, char => char.toUpperCase() );
  },
  "castArray": function castArray( val ) {
    return ( Array.isArray( val ) ? val : [ val ] );
  },
  "chainAsync": function chainAsync( fns ) {
    let curr = 0;
    const next = () => fns[ curr++ ]( next );
    next();
  },
  "chunk": function chunk( arr, size ) {
    return Array.from( {
      length: Math.ceil( arr.length / size )
    }, ( v, i ) => arr.slice( i * size, i * size + size ) );
  },
  "clampNumber": function clampNumber( num, a, b ) {
    return Math.max( Math.min( num, Math.max( a, b ) ), Math.min( a, b ) );
  },
  "cloneRegExp": function cloneRegExp( regExp ) {
    return new RegExp( regExp.source, regExp.flags );
  },
  "coalesce": function coalesce( ...args ) {
    return args.find( _ => ![ undefined, null ].includes( _ ) );
  },
  "coalesceFactory": function coalesceFactory( valid ) {
    return ( ...args ) => args.find( valid );
  },
  "collectInto": function collectInto( fn ) {
    return ( ...args ) => fn( args );
  },
  "colorize": function colorize( ...args ) {
    return ( {
      black: `\\x1b[30m${ args.join( ' ' ) }`,
      red: `\\x1b[31m${ args.join( ' ' ) }`,
      green: `\\x1b[32m${ args.join( ' ' ) }`,
      yellow: `\\x1b[33m${ args.join( ' ' ) }`,
      blue: `\\x1b[34m${ args.join( ' ' ) }`,
      magenta: `\\x1b[35m${ args.join( ' ' ) }`,
      cyan: `\\x1b[36m${ args.join( ' ' ) }`,
      white: `\\x1b[37m${ args.join( ' ' ) }`,
      bgBlack: `\\x1b[40m${ args.join( ' ' ) }\\x1b[0m`,
      bgRed: `\\x1b[41m${ args.join( ' ' ) }\\x1b[0m`,
      bgGreen: `\\x1b[42m${ args.join( ' ' ) }\\x1b[0m`,
      bgYellow: `\\x1b[43m${ args.join( ' ' ) }\\x1b[0m`,
      bgBlue: `\\x1b[44m${ args.join( ' ' ) }\\x1b[0m`,
      bgMagenta: `\\x1b[45m${ args.join( ' ' ) }\\x1b[0m`,
      bgCyan: `\\x1b[46m${ args.join( ' ' ) }\\x1b[0m`,
      bgWhite: `\\x1b[47m${ args.join( ' ' ) }\\x1b[0m`
    } );
  },
  "compact": function compact( arr ) {
    return arr.filter( Boolean );
  },
  "compose": function compose( ...fns ) {
    return fns.reduce( ( f, g ) => ( ...args ) => f( g( ...args ) ) );
  },
  "composeRight": function composeRight( ...fns ) {
    return fns.reduce( ( f, g ) => ( ...args ) => g( f( ...args ) ) );
  },
  "copyToClipboard": function copyToClipboard( str ) {
    const el = document.createElement( 'textarea' );
    el.value = str;
    el.setAttribute( 'readonly', '' );
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild( el );
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt( 0 ) : false;
    el.select();
    document.execCommand( 'copy' );
    document.body.removeChild( el );
    if ( selected ) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange( selected );
    }
  },
  "countBy": function countBy( arr, fn ) {
    return arr.map( typeof fn === 'function' ? fn : val => val[ fn ] ).reduce( ( acc, val, i ) => {
      acc[ val ] = ( acc[ val ] || 0 ) + 1;
      return acc;
    }, {} );
  },
  "countOccurrences": function countOccurrences( arr, val ) {
    return arr.reduce( ( a, v ) => ( v === val ? a + 1 : a + 0 ), 0 );
  },
  "createElement": function createElement( str ) {
    const el = document.createElement( 'div' );
    el.innerHTML = str;
    return el.firstElementChild;
  },
  "currentUrl": function currentURL() {
    return window.location.href;
  },
  "curry": function curry( fn, arity = fn.length, ...args ) {
    return arity <= args.length ? fn( ...args ) : curry.bind( null, fn, arity, ...args );
  },
  "decapitalize": function decapitalize( [ first, ...rest ], upperRest = false ) {
    return first.toLowerCase() + ( upperRest ? rest.join( '' ).toUpperCase() : rest.join( '' ) );
  },
  "deepClone": function deepClone( obj ) {
    let clone = Object.assign( {}, obj );
    Object.keys( clone ).forEach(
      key => ( clone[ key ] = typeof obj[ key ] === 'object' ? deepClone( obj[ key ] ) : obj[ key ] )
    );
    return clone;
  },
  "deepFlatten": function deepFlatten( arr ) {
    return [].concat( ...arr.map( v => {
        return ( Array.isArray( v ) ? deepFlatten( v ) : v );
    } ) );
  },
}
