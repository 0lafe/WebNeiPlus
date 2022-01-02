class CreateOutputs < ActiveRecord::Migration[6.1]
  def change
    create_table :outputs do |t|
      t.integer :quantity, null: false
      t.belongs_to :recipe
      t.belongs_to :item
    end
  end
end
