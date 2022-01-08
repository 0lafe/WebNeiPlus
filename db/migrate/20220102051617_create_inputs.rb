class CreateInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :inputs do |t|
      t.integer :quantity, null: false
      t.integer :relx
      t.integer :rely
      t.belongs_to :recipe
      t.belongs_to :item
    end
  end
end
