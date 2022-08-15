class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :restaurant_id, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :phone_number, null: false 
      t.string :email, null: false
      t.date :date, null: false 
      t.time :time, null: false
      t.integer :party_size, null: false 
      t.text :special_requests  
      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
  end
end
