class Item < ApplicationRecord

    validates :unlocalized_name, presence: true
    validates :localized_name, presence: true
end