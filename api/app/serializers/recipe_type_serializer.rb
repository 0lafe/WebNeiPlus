class RecipeTypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :gui_url, :scale, :recipe_quantity

  def recipe_quantity
    object.recipes.count
  end
end
