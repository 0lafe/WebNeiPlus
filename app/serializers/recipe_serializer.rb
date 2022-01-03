class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :power, :amps, :duration, :inputs, :outputs
  has_many :inputs
  has_many :outputs
end
