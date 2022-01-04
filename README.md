# WiP
Meant to emulate NEI out of game, as well as offer many calculations. First goal is to work with GT Mega, but other modpacks might be supported in the future

# DB setup

run ```rails db:create``` to create the db. Then ```rails db:migrate``` if you have any issues try running ```rails db:drop``` first then the other two commands. 

# Storing data

At the moment, this is very much in dev. Running ```rake recipes:store``` should seed the database with some test data from the Recipes.json file. In the future this command should still be used, however that may change. On my M1 lowend macbook this took ~1 hour. This is probably going to only go up as I add support for machines, fluids, and more relations in the DB. Eventually this will be made into an importable csv file, however that isn't a top priority

# Tips on running

run ```bundle install``` and ``` yarn install``` to get all dependencies setup. Then ```rails s``` and ```yarn run dev:client``` in another window to run the server. Navigate to localhost:3000 in a web browser to see the site. 