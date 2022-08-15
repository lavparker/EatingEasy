class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false 
      t.string :address, null: false
      t.integer :phone_number, null: false
      t.string :cuisine, null: false
      t.string :details, null: false
      t.text :additional_features 
      t.string :hours, null: false
      t.string :dress_code, null: false
      t.string :website, null: false
      t.text :dining_style, null: false 
      t.timestamps
    end
    add_index :restaurants, :name 
    add_index :restaurants, :address, unique: true
    add_index :restaurants, :phone_number, unique: true
    add_index :restaurants, :cuisine
  end
end
