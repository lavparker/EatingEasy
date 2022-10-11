class AddPhoneNumberToUsrs < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :phone_number, :string
  end
end
