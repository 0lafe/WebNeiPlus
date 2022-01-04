class RecipeTypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe_quantity

  def recipe_quantity
    object.recipes.count
  end
end
