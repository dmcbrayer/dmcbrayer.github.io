# This is my personal site

It's where I do things like publish personal blog posts and link to some of my other projects.  But it's also a testing ground, where I try out some of the things I've been learning recently.  This site is built on [Jekyll](https://jekyllrb.com) and is served up with [Gulp](http://gulpjs.com) as the task runner.  Jekyll's the skeleton, Gulp is the brains.

## Installing dependencies

This requires npm (get it [here](http://blog.npmjs.org/post/85484771375/how-to-install-npm)), gulp, bundler.

Once you've installed npm, to get gulp, run `npm install -g gulp`.

To get bundler run `gem install bundler`.  This assumes you already have ruby installed.  

## Installation and use

First, fork this repository.  Then `git clone` your fork.  `cd` into the folder you cloned into and run `bundle install && npm install` to install the dependencies.  

Once you've installed the dependencies, from the project root, run `gulp` and your server will start up.

## Directory Structure

I'm including this breakdown because it would have helped me when I was first starting.

### _assets

This is where your raw assets live.  When gulp runs, it will take the items in this directory and run a variety of operations on them (e.g., compile and minify the sass, concat and uglify the scripts, compress the images).  The default directory structure looks like this:

```
_assets/
|
|-fonts/
|-img/
|-scripts/
|-scss/
|
```
You set the folders in this directory as the sources for the various gulp tasks in your `gulp-config.js` file.  You can arrange or rename it however you want, just be sure to update the config file.

### _drafts

This is where your draft posts live.  New drafts are automatically put here when you run `octopress new draft <TITLE>`.

### _includes

These are the template files for repeatable sections of the site.  By default, the `<head>`, `<header>` and `<footer>` are part of this, but you could put anything here that you may want to reuse in other parts of the site.

### _layouts

This is the actual code of layouts that you use throughout the site.  In other words, this is the framework for what will be output when you generate a new page or post.  

### _pages

This is where the static pages for the site live (like the about page, for example).  You can simply create a new .md or .html file for each new page that you want, but I like to create a new directory for the name of the page, with an `index.html` inside that holds the actual code for the page.

### _posts

This is where the published posts live.

### _site

This won't exist until jekyll runs and builds your site, but this is the output of the actual code for your site, after gulp and jekyll do everything they need to do.  This is what users will actually see when they visit your site.

### _templates

This is very similary to `_layouts`, but it's a little more general.  It's just for Octopress to use to generate the appropriate front matter when you use the `octopress` command to generate a page or post.  We need both folders.

### assets

This is gulp's output from running its operations on the `_assets` folder.  I wish there was a better way, but apparently jekyll requires it to be done this way.  So under the hood, gulp compiles all the assets into this directory, then when jekyll runs it just copies this folder into `_site` so that the live site will be able to find the assets.  You can set the structure of this in the `gulp-config.js` file if you want to change folder names and all that.  If you do, also remember to change the html tags that reference those assets.
