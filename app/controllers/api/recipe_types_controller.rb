class Api::RecipeTypesController < ApplicationController

    def show
        aType = RecipeType.find(params[:id])
        render json: { name: aType.name, quantity: aType.recipes.count, gui_url: aType.gui_url }
    end

end