class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false 
      t.integer :overall_rating, null: false 
      t.integer :food_rating, null: false 
      t.integer :ambiance_rating, null: false 
      t.integer :value_rating, null: false 
      t.integer :noise_level, null: false
      t.text :body, null: false 
      t.timestamps
    end
    add_index :reviews, :restaurant_id
    add_index :reviews, :user_id
    add_index :reviews, :overall_rating
  end
end
