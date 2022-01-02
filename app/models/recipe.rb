class Recipe < ApplicationRecord

    has_many :inputs
    has_many :outputs
end