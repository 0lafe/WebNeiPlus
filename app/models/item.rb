class Item < ApplicationRecord

    validates :item_id, presence: true
    validates :metadata, presence: true
    validates :modid, presence: true

    def full_name
        return "#{self.modid}.#{self.item_id}:#{self.metadata}"
    end

end