---
title: Metalsmith Path Metadata
---

A plugin for [Metalsmith](https://metalsmith.io/) that modifies metadata
for a given path.

If you need some help, send me an
[email](mailto:theholycoder@gmail.com)!

Table of contents
-----------------

:TOC:

-   [Installation](#Installation)
-   [Use](#Use)

Installation
------------

Go to your working directory then:

``` {.bash org-language="sh"}
$ npm install metalsmith-path-metadata
```

Use
---

``` {.javascript org-language="js"}
var Metalsmith   = require('metalsmith');
var collections  = require('metalsmith-collections');
var layouts      = require('metalsmith-layouts');
var markdown     = require('metalsmith-markdown');
var permalinks   = require('metalsmith-permalinks');
var pathMetadata = require('metalsmith-path-metadata'); // Import/require the file 

Metalsmith(__dirname)         

  .metadata({                 

    sitename: "My Static Site & Blog",
    siteurl: "http://example.com/",
    description: "It's about saying »Hello« to the world.",
    generatorname: "Metalsmith",
    generatorurl: "http://metalsmith.io/"
  })
  .source('./src')       
  .destination('./build')
  .clean(true)          
  .use(collections({    
    posts: 'posts/*.md' 
  }))                   
  .use(pathMetadata({                     // Use the plugin and pass in config
    "about.hbs": {                        // Specify the path 
      title: "New Title For This Example" // Specify the key with the new data
    }
  }))
  .use(markdown())      
  .use(permalinks({     
    relative: false     
  }))
  .use(layouts())       
  .build(function(err) {
    if (err) throw err; 
  });
```
