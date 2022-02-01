class ItemSerializer < ActiveModel::Serializer
  attributes :id, :unlocalized_name, :localized_name, :handler_ids
  # has_many :inputs
  # has_many :outputs

end