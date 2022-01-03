class Recipe < ApplicationRecord

    belongs_to :recipe_type
    has_many :inputs
    has_many :outputs

end