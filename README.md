# WiP
Meant to emulate NEI out of game, as well as offer a framework for factory design tooling. Planned to support both GT Mega and GTNH.

# DB setup

run ```rails db:create``` to create the db. Then ```rails db:migrate``` if you have any issues try running ```rails db:drop``` first then the other two commands.

# Storing data

If you wish to seed the recipes locally, you will first need [the data](https://drive.google.com/drive/folders/1gvyB35U5ZeEdYljkxrD1SqlJ7sdkMyjr?usp=sharing). Drop the `.Data-dumps` directory right in the root of this project. From there, running `rake recipes:store` should fill the db with the recipes, items, and everything else needed.

One thing to note, at the moment the setup process is very janky to avoid hour long seed times. This requires that you have a freshly created database, simply clearing all records won't be enough. Drop and recreate it if you need to re seed

# Tips on running

run ```bundle install``` and ``` yarn install``` to get all dependencies setup. Then ```rails s``` and ```yarn run dev:client``` in another window to run the server. Navigate to localhost:3000 in a web browser to see the site.

# Building on Debian-based Linux

(orderedset: these are the steps I personally took)

1. `curl rvm` (ruby venv manager, look up the curl link on the rvm website)
2. `source ~/.rvm/scripts/rvm`
3. `rvm install ruby-3.0.2`
4. `sudo apt-get install libpq-dev` (needed to build `pq`)
5. `bundle install`
6. `yarn install` (webapp is runnable from here, rest is DB setup)
7. `sudo apt-get install postgresql`
8. `sudo -u postgres createuser [your username here]` (without brackets ofc)
9. (db build commands listed above)
