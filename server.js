const express = require( "express" );
const fs = require( "fs" );
const { request } = require( "http" );
const cors = require( "cors" );
const morgan = require( "morgan" );
const app = express();
const PORT = 4000;

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( morgan( "dev" ) );
app.use( cors() );
app.use( globalMiddleware );


app.get( "/", ( req, res ) =>
{
    console.log( req.url );
    res.send( "Hello Alien" );
} );

app.get( "/home", ( req, res ) =>
{
    fs.readFile( "./pages/index.html", "utf-8", ( err, data ) =>
    {
        if ( err )
        {
            console.log( err );
            res.send( `<h1>Something went wrong</h1>` );
        } else
        {
            res.write( data );
            res.send( console.log( "Requesting home page" ) );
            res.end();
        }
    } );
} );

app.get( "/about", ( req, res ) =>
{
    fs.readFile( "./pages/about.html", "utf-8", ( err, data ) =>
    {
        if ( err )
        {
            console.log( err );
            res.send( `<h1>Something went wrong</h1>` );
        } else
        {
            res.write( data );
            res.send( console.log( "Requesting about page" ) );
            res.end();
        }
    } );
} );


app.get( "/contact", ( req, res ) =>
{
    fs.readFile( "./pages/contact.html", "utf-8", ( err, data ) =>
    {
        if ( err )
        {
            console.log( err );
            res.send( `<h1>Something went wrong</h1>` );
        } else
        {
            res.write( data );
            res.send( console.log( "Requesting Contact page" ) );
            res.end();
        }
    } );
} );
app.listen( PORT, "localhost", () => { console.log( `Server is listening on Port:${ PORT }` ); } );

function handler ( req, res, next )
{
    // read request object
    // Process request
    // response request result
}


function globalMiddleware ( req, res, next )
{
    console.log( `${ req.method } - ${ req.url }` );
    console.log( "I'm a global middleware" );
    next();
}