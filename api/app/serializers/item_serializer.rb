class ItemSerializer < ActiveModel::Serializer
  attributes :id, :full_name
  has_many :inputs
  has_many :output
end