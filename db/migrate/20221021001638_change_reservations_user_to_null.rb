class ChangeReservationsUserToNull < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :user_id, :integer, null: true, :default => 3
  end
end
