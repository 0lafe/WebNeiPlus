class Item < ApplicationRecord

    validates :item_id, presence: true
    validates :metadata, presence: true
    validates :modid, presence: true

    has_many :inputs
    has_many :outputs

    def full_name
        return "#{self.modid}.#{self.item_id}:#{self.metadata}"
    end

    def handler_ids
        handlers = {}
        self.inputs.each { |input|
            handlers[input.recipe.recipe_type.id] = true
        }
        handlers.keys
    end

end