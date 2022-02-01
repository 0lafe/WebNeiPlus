class Api::ItemsController < ApplicationController

    def show
        render json: Item.find(params[:id])
        # render json: { name: Item.find(params[:id]).localized_name, quantity: Recipe.where(inputs: Input.where(item: Item.find(params[:id]))).count }
    end

end