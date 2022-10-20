class ChangePhoneToStringReservations < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :phone_number, :string
  end
end
