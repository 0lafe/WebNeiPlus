class CreateInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :inputs do |t|
      t.integer :quantity, null: false
      t.belongs_to :recipe
      t.belongs_to :item
      
      t.timestamps
    end
  end
end
