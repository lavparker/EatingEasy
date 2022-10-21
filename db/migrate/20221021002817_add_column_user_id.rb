class AddColumnUserId < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :user_id, :integer, null: false
  end
end
