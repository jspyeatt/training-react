#!/bin/bash

# starts babel.
# the first argument is the root source of your app.
# the --outfile argument specifies where the compiled code should
# be written. It basically needs to match whatever directory you 
# are serving your app from with start-server.sh.
#
# I really don't remember the importance of the --presets other
# than to say they tell the compiler what it needs to know about
# your source.

# --watch starts the file watcher which will reload your browser when
# there are changes to your files in src/app.js
#babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

