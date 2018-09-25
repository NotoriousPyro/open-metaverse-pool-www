# Open Source Metaverse Mining Pool Web Application

Accompanies open-metaverse-pool and can serve as an example or a framework for your frontend.

## Prerequisites

* [open-metaverse-pool](https://github.com/NotoriousPyro/open-metaverse-pool)
* Ubuntu 16.04.5 LTS
* nodejs (on Ubuntu 16.04.5 LTS, install <code>nodejs-legacy</code>)
* git
* nginx
* Varnish HTTP Cache

## Installation

Use <code>git</code> to download this repo to a folder, then <code>cd</code> to it:

    git clone git@github.com:NotoriousPyro/open-metaverse-pool-www.git /Your/Destination/Folder
    cd /Your/Destination/Folder

Change <code>ApiUrl: '//example.net/'</code> in <code>config/environment.js</code> to match your domain name, blank will use the current domain. Also don't forget to adjust other options.

Then use the following:

    npm install -g ember-cli@2.9.1
    npm install -g bower
    npm install
    bower install
    ./build.sh

Configure varnish using the example in <code>/examples/varnish.vcl</code> and set the port to open-metaverse-pool API
Configure nginx using the example in <code>/examples/nginx.conf</code> and serve content from <code>/Your/Destination/Folder/dist</code>. Set the upstream port and IP to the varnish server.

## Running

Now just start varnish, nginx, and make sure your API is up. If you get errors, please check folder permissions, missing folders and other common problems PRIOR to raising an issue. Issues raised with no prior debugging will be closed.