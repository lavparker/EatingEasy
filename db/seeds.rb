# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Post.create!(:title => "Post 4", :body => "Body 4")

Restaurant.destroy_all

#wills tart at 2 next time 
Restaurant.create(:name => 'Boucherie', :address => '123 orange st', :phone_number => "5555555", :cuisine => "african", :details => "good to eat", :hours => "8 to 5", :dress_code => "casual", :website => "www.www.com", :dining_style => "casz")
#Restaurant.create(:name => 'Boucherie', :address => '123 orange st', :phone_number => "5555555", :cuisine => "african", :details => "good to eat", :hours => "8 to 5", :dress_code => "casual", :website => "www.www.com", :dining_style => "casz")