# WiP
Meant to emulate NEI out of game, as well as offer many calculations. First goal is to work with GT Mega, but other modpacks might be supported in the future

# Tips on running

run ```bundle install``` and ``` yarn install``` to get all dependencies setup. Then ```rails s``` and ```yarn run dev:client``` in another window to run the server. Navigate to localhost:3000 in a web browser to see the site. 

# DB setup

run ```rails db:create``` to create the db. Then ```rails db:migrate``` if you have any issues try running ```rails db:drop``` first then the other two commands. 

# Storing data

At the moment, this is very much in dev. Running ```rake recipes:store``` should seed the database with some test data from the Recipes.json file. In the future this command should still be used, however that may change. This may take an hour or so lol 