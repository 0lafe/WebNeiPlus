class Api::RecipesController < ApplicationController

    def index
        render json: {recipes: RecipeType.all}
    end

end