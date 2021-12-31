class Api::RecipesController < ApplicationController

    def index
        reply = RecipeReader.getRecipeTypes
        render json: {reply}
    end

end