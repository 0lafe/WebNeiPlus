class Api::RecipesController < ApplicationController

    def index
        reply = RecipeReader.Read
        render json: {recipes: reply}
    end

end