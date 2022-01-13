class Api::ItemsController < ApplicationController

    def show
        render json: { name: Item.find(params[:id]).localized_name }
    end

end