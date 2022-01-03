class Api::ItemsController < ApplicationController

    def index

    end

    def show
        inputs = Input.where(item: Item.find(params[:id]))
        render json: Recipe.where(inputs: inputs).limit(10)
    end

end