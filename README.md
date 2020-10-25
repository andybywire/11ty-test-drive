# 11ty Test Drive

This repo is a space for experimenting with the Eleventy SSG as an alternative to Jekyll. I've brought over a few approaches that have worked well for me with Jekyll that are a bit outside of what I've seen for common 11ty workflows so far:

- Gulp, which offers a bit more flexibility for tasks and sequences, and allows me to run my own flavor of Browsersync (in this case, with PHP support for the occasinal form).

- Gulp-SASS, in this case with Sourcemaps built in. There is a SASS plugin for 11ty, but this option seems a bit cleaner and more flexible—and doesn't tie me to one developer's project.

-  Browsersync—part of 11ty, or course—but I wanted a bit more control over how it runs than I was easily able to figure out with what came as part of 11ty. In addition to supporting PHP, I also wanted this site to run on a different port (3030). This, I suspect, will help avoid conflicts with serviceworkers I have running on other sites I develop and test locally (on :3000).

## Getting Started
Needs Node, of course, but after that, two simple commands should get everythign up and running.

- `$npm install`
- `$gulp`

(The $gulp command may be something I've configured globally and forgotten about. If anyone _does_ actually every play with this repo and notices that doesn't work for them, please do let me know.)