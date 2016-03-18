###Install:

`npm install query-string-pusher`


###Usage:

    var QueryString = require('query-string-pusher')

    QueryString.push('foo=bar')
    // or
    QueryString.push({foo: 'bar'})


###Details:
Query String Pusher rewrites any query string with the same key.
eg. 
    QueryString.push('foo=bar') // or {foo: 'bar'}
    QueryString.push('foo=car') // or {foo: 'car'}
will make the query string foo=car.

You can also chain the pushes anyway you like, eg.
    QueryString.push({foo: 'bar', shoo: 'shoe'}) 
