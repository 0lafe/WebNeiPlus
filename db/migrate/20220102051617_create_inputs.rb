class CreateInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :inputs do |t|
      t.integer :quantity, null: false
      
      t.timestamps
    end
  end
end
