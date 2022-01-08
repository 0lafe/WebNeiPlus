class Item < ApplicationRecord

    validates :item_id, presence: true
    validates :metadata, presence: true
    validates :modid, presence: true


    def full_name
        return "#{:modid}.#{:item_id}:#{:metadata}"
    end
end