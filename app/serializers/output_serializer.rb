class OutputSerializer < ActiveModel::Serializer
  attributes :quantity, :item, :relx, :rely
  belongs_to :item
  belongs_to :recipe
end
