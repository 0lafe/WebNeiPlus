class Api::RecipesController < ApplicationController

    def index
        render json: RecipeReader.get_types
    end

    def show
        render json: RecipeReader.get_one(params[:id])
    end

end