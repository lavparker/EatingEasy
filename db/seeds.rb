# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Post.create!(:title => "Post 4", :body => "Body 4")

#run bundle exec rails db:seed command after each update to this file 
Restaurant.destroy_all
User.destroy_all

#Restaurant seeds
#wills start at 3 next time 
Restaurant.create(:name => 'La Grande Boucherie', :address => '145 W 53rd St, New York, NY 10019', :phone_number => "2125107777", :cuisine => "French", :details => "Polished French restaurant in an expansive art nouveau–style space with an elegant heated atrium.", :hours => "11:00AM - 12:00AM", :dress_code => "Business Casual", :website => "www.boucherie.nyc", :dining_style => "Fine Dining")
Restaurant.create(:name => 'Gramercy Tavern', :address => '42 E 20th St, New York, NY 10003', :phone_number => "2124477777", :cuisine => "New American", :details => "Flatiron District tavern with food you can't find anywhere else.", :hours => "11:30AM - 6:00PM", :dress_code => "Fancy Schmancy", :website => "www.gramercytavern.com", :dining_style => "Pre Fixe")
Restaurant.create(:name => '1803 NYC', :address => '82 Reade St, New York, NY 10007', :phone_number => "2122673333", :cuisine => "Cajun-Creole", :details => "Spot for upstcale takes on Cajun-Creole food and drinks. One bite will take you to NOLA's French Quarter in the season of Mardi Gras.", :hours => "11:30AM - 9:00PM", :dress_code => "Mardi Gras attire required", :website => "www.1803nyc.com", :dining_style => "Fine Dining")
Restaurant.create(:name => 'Zou Zou’s', :address => '385 9th Ave Suite 85, New York, NY 10001', :phone_number => "2123808888", :cuisine => "Mediterranean", :details => "Zou Zou's offers a menu inspired by and celebrating the cuisine and flavors of the Eastern Mediterranean region, bringing in influences from Lebanon, Israel, Turkey, Egypt, Syria, and Jordan.", :hours => "11:30AM - 11:00PM", :dress_code => "Casual", :website => "www.zouzousnyc.com", :dining_style => "Casual Dining")
Restaurant.create(:name => 'COTE Korean Steakhouse', :address => '16 W 22nd St, New York, NY 10010', :phone_number => "2124017777", :cuisine => "Korean", :details => "Upscale Korean steakhouse with cool smokeless grills and allllll of the wine.", :hours => "5:00PM - 11:00PM", :dress_code => "Casual", :website => "www.cotenyc.com", :dining_style => "Fast Casual")
Restaurant.create(:name => 'Melbas Restaurant', :address => '300 W 114th St, New York, NY 10026', :phone_number => "2128647777", :cuisine => "Southern Soul", :details => "Southern classics served in a retro setting that's relaxed & homey by day, bustling in the evening..", :hours => "12:00PM - 12:00AM", :dress_code => "Casual", :website => "www.melbasrestaurant.com", :dining_style => "Casual")
# Restaurant.create!(:name =>  "Kochi", :address =>  "652 10th Ave, New York, NY  10036", :phone_number => "2164787777", :cuisine =>  "Korean", :details =>  "Seasonal ingredients shine both on your tastebuds and on your plate in this cool, sleek venue!", :hours =>  "Daily 5:00PM - 12:00AM", :dress_code =>  "Business Casual", :website => "www.kochiny.com", :dining_style =>  "multicourse tasting menu")

#Demo User 

User.create!(first_name: "Beyonce", last_name: "User", username: "DemoUser1", email: "demo.user@ymail.com", password: "password")