class Api::RecipeTypesController < ApplicationController

    def show
        render json: { name: RecipeType.find(params[:id]).name, quantity: RecipeType.find(params[:id]).recipes.count }
    end

end