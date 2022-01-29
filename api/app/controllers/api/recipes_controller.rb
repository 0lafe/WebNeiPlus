class Api::RecipesController < ApplicationController

    def index
        render json: RecipeType.all.left_joins(:recipes).group(:id).order('COUNT(recipes.id) DESC')
    end

    def show
        render json: RecipeReader.recipe_show(params)
    end

end