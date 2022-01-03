class OutputSerializer < ActiveModel::Serializer
  attributes :quantity, :item
  belongs_to :item
  belongs_to :recipe
end
