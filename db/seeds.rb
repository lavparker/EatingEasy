# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Post.create!(:title => "Post 4", :body => "Body 4")

#run bundle exec rails db:seed command after each update to this file 
require 'open-uri'
Restaurant.destroy_all
User.destroy_all
Reservation.destroy_all
Review.destroy_all

#Restaurant seeds

rest1 = Restaurant.create(
    :name => 'Aunts et Uncles', 
    :address => '1407 Nostrand Ave., Brooklyn, NY 11226', 
    :phone_number => "211-295-0001", 
    :cuisine => "Caribbean", 
    :details => "Relaxed vegan eatery serving plant-based burgers, breakfast sandwiches & sides, plus cocktails.", 
    :hours => "Mon–Sat 10:00 am–10:00 pm Sun 10:00 am–6:00 pm", 
    :dress_code => "Casual Dress", 
    :website => "http://www.auntsetuncles.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/aunts_et_uncles.jpeg')
rest1.photo.attach(io: file, filename: 'aunts_et_uncles.jpeg')


rest2 = Restaurant.create(
    :name => 'La Grande Boucherie', 
    :address => '145 W 53rd St, New York, NY 10019', 
    :phone_number => "212-510-7777", 
    :cuisine => "French", 
    :details => "Polished French restaurant in an expansive art nouveau–style space with an elegant heated atrium.", 
    :hours => "11:00AM - 12:00AM", 
    :dress_code => "Business Casual", 
    :website => "www.boucherie.nyc", 
    :dining_style => "Fine Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/la_grande_boucherie.png')
rest2.photo.attach(io: file, filename: 'la_grande_boucherie.png')


rest3 = Restaurant.create(
    :name => 'Bunna Café', 
    :address => '1084 Flushing Ave, Brooklyn, NY 11237', 
    :phone_number => "2102952222", 
    :cuisine => "Ethiopian", 
    :details => "The traditional way to eat Ethiopian food is to use the injera as a scoop – no utensils. Try it, it’s fun! If you are looking for unique, plant-based food, this is the place to go.", 
    :hours => "11:00AM - 12:00AM", 
    :dress_code => "Business Casual", 
    :website => "http://bunnaethiopia.net/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/bunna_cafe.jpg')
rest3.photo.attach(io: file, filename: 'bunna_cafe.jpg')


rest4 = Restaurant.create(
    :name => 'Gramercy Tavern', 
    :address => '42 E 20th St, New York, NY 10003', 
    :phone_number => "212-447-7777", 
    :cuisine => "New American", 
    :details => "Flatiron District tavern with food you can't find anywhere else.", 
    :hours => "11:30AM - 6:00PM", 
    :dress_code => "Fancy Schmancy", 
    :website => "www.gramercytavern.com", 
    :dining_style => "Pre Fixe"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/gramerc_taver.png')
rest4.photo.attach(io: file, filename: 'gramerc_taver.png')


rest5 = Restaurant.create(
    :name => 'Jasmine’s Caribbean Cuisine', 
    :address => '371 W 46th St, New York, NY 10036', 
    :phone_number => "210-964-5337", 
    :cuisine => "Caribbean, Seafood, Vegetarian / Vegan", 
    :details => "A gem on Restaurant Row, Jasmine’s Caribbean Cuisine provides an escape from the city through the senses with savory dishes and fruit-filled blends of cocktails inspired by islands throughout the Caribbean.", 
    :hours => "Tue–Fri 4:00 pm–10:30 pm Sat 2:00 pm–11:30 pm Sun 2:00 pm–10:30 pm", 
    :dress_code => "Business Casual", 
    :website => "http://jasminescaribbeancuisine.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/jasmines.jpeg')
rest5.photo.attach(io: file, filename: 'jasmines.jpeg')

# rest5.photo.attach(io: File.open("https://eatingeasy-dev.s3.amazonaws.com/jasmines.jpeg"), filename: 'jasmines.jpeg')
# photo5 = File.open('https://eatingeasy-dev.us-east-1.amazonaws.com/jasmines.jpeg')

# rest5.photo.attach(io: file, filename: 'jasmines.jpeg')

rest6 = Restaurant.create(
    :name => '1803 NYC', 
    :address => '82 Reade St, New York, NY 10007', 
    :phone_number => "212-267-3333", 
    :cuisine => "Cajun-Creole", 
    :details => "Spot for upstcale takes on Cajun-Creole food and drinks. One bite will take you to NOLA's French Quarter in the season of Mardi Gras.", 
    :hours => "11:30AM - 9:00PM", 
    :dress_code => "Mardi Gras attire required", 
    :website => "www.1803nyc.com", 
    :dining_style => "Fine Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/1803-nyc-new-york-ny-interior-2.png')
rest6.photo.attach(io: file, filename: '1803-nyc-new-york-ny-interior-2.png')


rest7 = Restaurant.create(
    :name => 'Zou Zou’s', 
    :address => '385 9th Ave Suite 85, New York, NY 10001', 
    :phone_number => "212-380-8888", 
    :cuisine => "Mediterranean", 
    :details => "Zou Zou's offers a menu inspired by and celebrating the cuisine and flavors of the Eastern Mediterranean region, bringing in influences from Lebanon, Israel, Turkey, Egypt, Syria, and Jordan.", 
    :hours => "11:30AM - 11:00PM", 
    :dress_code => "Casual", 
    :website => "www.zouzousnyc.com", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/zou-zous.png')
rest7.photo.attach(io: file, filename: 'zou-zous.png')



rest8 = Restaurant.create(
    :name => 'COTE Korean Steakhouse', 
    :address => '16 W 22nd St, New York, NY 10010', 
    :phone_number => "212-401-7777", 
    :cuisine => "Korean", 
    :details => "Upscale Korean steakhouse with cool smokeless grills and allllll of the wine.", 
    :hours => "5:00PM - 11:00PM", 
    :dress_code => "Casual", 
    :website => "www.cotenyc.com", 
    :dining_style => "Fast Casual"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/cote-korean.jpg')
rest8.photo.attach(io: file, filename: 'cote-korean.jpg')


rest9 = Restaurant.create(
    :name => 'Melbas Restaurant', 
    :address => '300 W 114th St, New York, NY 10026', 
    :phone_number => "212-864-7777", 
    :cuisine => "Southern Soul", 
    :details => "Southern classics served in a retro setting that's relaxed & homey by day, bustling in the evening..", 
    :hours => "12:00PM - 12:00AM", 
    :dress_code => "Casual", 
    :website => "www.melbasrestaurant.com", 
    :dining_style => "Casual"
)
file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/melbas.png')
rest9.photo.attach(io: file, filename: 'melbas.png')


rest10 = Restaurant.create!(
    :name =>  "Kochi", 
    :address =>  "652 10th Ave, New York, NY  10036", 
    :phone_number => "206-478-7777", 
    :cuisine =>  "Korean", 
    :details =>  "Seasonal ingredients shine both on your tastebuds and on your plate in this cool, sleek venue!", 
    :hours =>  "Daily 5:00PM - 12:00AM", 
    :dress_code =>  "Business Casual", 
    :website => "www.kochiny.com", 
    :dining_style =>  "multicourse tasting menu"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/kochi.jpeg')
rest10.photo.attach(io: file, filename: 'kochi.jpeg')


rest11 = Restaurant.create!(
    :name => "Cafe Himalaya",
    :address => "78 East 1st Street (bet 1st Ave & Ave A) New York, NY 10009",
    :phone_number => "212-358-0000",
    :cuisine => "Tibetan/Nepalese",
    :details => "Cafe Himalaya is a Tibetan/Nepalese restaurant located in the Lower East Side of NYC. Visit us for simple, delicious, homemade food from the Himalayas. 
                We take pride in making food that is natural, nutritious and healthy without any preservatives. We aim to bring the taste of the Himalayas to you!",
    :hours => "M: Closed // Tue-Sat: Noon-10 pm // Sun: Noon-9 pm",
    :dress_code => "Casual",
    :website => "https://cafehimalaya.weebly.com/", 
    :dining_style => "Relaxed"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/cafe_himalaya.jpeg')
rest11.photo.attach(io: file, filename: 'cafe_himalaya.jpeg')


rest12 = Restaurant.create!(
    :name => "Popular",
    :address => "215 Chrystie St, New York, NY 10002",
    :phone_number => "212-273-9444",
    :cuisine => "Peruvian",
    :details => "At POPULAR, diners have a special opportunity to enjoy
                 authentic, original, healthy and globally inspired Peruvian
                 cuisine by Chef Diego Muñoz, who helmed The World’s 50 Best
                 Restaurants’ #1 rated Latin American restaurant, 
                 Astrid y Gaston, in Lima. Chef Diego, a rare talent, proudly
                 brings to New York City, the ultimate international gateway, 
                 the best of his Peruvian homeland’s multicultural cuisine—a 
                 microcosm of some of the world’s greatest culinary 
                 traditions—Incan, Spanish, Moorish, African, Italian, Chinese 
                 and Japanese.",
    :hours => "Breakfast: Daily 7AM-11AM
               Brunch: Saturdays & Sundays 11AM–3PM
               Dinner: Daily 6PM–11PM
               Special Cocktail Hour: Monday to Friday 5PM-7PM",
    :dress_code => "Business casual",
    :website => "https://www.popularnyc.com/", 
    :additional_features => "Michelin Starred",
    :dining_style => "Fine dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/popular_peru.jpeg')
rest12.photo.attach(io: file, filename: 'popular_peru.jpeg')


rest13 = Restaurant.create!(
    :name => "Momofuku Ko",
    :address => "8 Extra Pl, New York, NY 10003",
    :phone_number => "212-203-8000",
    :cuisine => "Asian-American",
    :details => "At Ko we are guided by the Japanese 
                 kaiseki tradition as well as seasonality, the innovation of our 
                 mentors and peers, food memories, and the breadth of cuisine 
                 available in the melting pot of New York City.",
    :hours => "Friday 4–9:30PM
                Saturday 4–9:30PM
                Sunday Closed
                Monday Closed
                Tuesday 4–9:30PM
                Wednesday 4–9:30PM
                Thursday 4–9:30PM",
    :dress_code => "Black Tie",
    :website => "https://ko.momofuku.com/", 
    :dining_style => "Fine dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/momofuku_ko.jpeg')
rest13.photo.attach(io: file, filename: 'momofuku_ko.jpeg')


rest14 = Restaurant.create!(
    :name => "Max Brenner New York",
    :address => "841 Broadway, New York, NY 10003",
    :phone_number => "212-467-8888",
    :cuisine => "Comfort food, Dessert, American",
    :details => "For more than 20 years, Max Brenner has offered a chocolate 
                 experience for all the senses. A visit to our Chocolate Bar and 
                 Shop, will entice magical memories in everyone. Because, 
                 chocolate, more than any other food, symbolizes our childhood.",
    :hours => "Mon–Wed, Sun 10:00 am–11:00 pm Thu–Sat 10:00 am–12:00 am",
    :dress_code => "Casual",
    :website => "https://maxbrenner.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/max_brenner.jpeg')
rest14.photo.attach(io: file, filename: 'max_brenner.jpeg')



rest15 = Restaurant.create!(
    :name => "Upland",
    :address => "345 Park Ave S, New York, NY 10010",
    :phone_number => "212-686-1006",
    :cuisine => "Californian",
    :details => "Built around a California-inspired philosophy that takes heavy 
                 cues from the seasons, Upland balances a familiar rusticity 
                 with a smart global approach, all enhanced by an enticing and 
                 urbane touch.",
    :hours => "Friday 11:30AM–3:30PM, 5–10PM
               Saturday	10AM–3PM, 5–10PM
               Sunday 10AM–3PM, 5–9PM
               Monday 11:30AM–3:30PM, 5–10PM
               Tuesday	11:30AM–3:30PM, 5–10PM
               Wednesday 11:30AM–3:30PM, 5–10PM
               Thursday	11:30AM–3:30PM, 5–10PM",
    :dress_code => "Boho-chic",
    :website => "https://uplandnyc.com/", 
    :dining_style => "Fast Casual"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/upland.jpeg')
rest15.photo.attach(io: file, filename: 'upland.jpeg')



rest16 = Restaurant.create!(
    :name => "Sigiri",
    :address => "91 1st Ave., New York, NY 10003",
    :phone_number => "212-614-9333",
    :cuisine => "Sri Lankan",
    :details => "You are about too taste a vast selection of authentic Sri Lankan
                 cuisine, the way it's meant to be cooked with a variety of herbs
                 and spices unique to Sri Lanka.",
    :hours => "Friday 11:30AM–9:30PM
               Saturday 11:30AM–9:30PM
               Sunday 11:30AM–9:30PM
               Monday 11:30AM–9:30PM
               Tuesday 11:30AM–9:30PM
               Wednesday 11:30AM–9:30PM
               Thursday	11:30AM–9:30PM",
    :dress_code => "Business Casual",
    :website => "https://sigiriny.com/", 
    :additional_features => "Cash only, BYOB",
    :dining_style => "Fast Casual"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/sigri.jpeg')
rest16.photo.attach(io: file, filename: 'sigri.jpeg')


rest17 = Restaurant.create!(
    :name => "Manousheh Bleecker",
    :address => "193 Bleecker St, New York, NY 10012",
    :phone_number => "210-331-4111",
    :cuisine => "Lebanese",
    :details => "Manousheh is a specialty bakery in the heart of New York City. 
                 Here you’ll find the single most popular street food in Lebanon 
                 delicious variations of an authentic flatbread.",
    :hours => "Friday 8AM–11PM
               Saturday	8AM–11PM
               Sunday 8AM–11PM
               Monday 8AM–11PM
               Tuesday 8AM–11PM
               Wednesday 8AM–11PM
               Thursday	8AM–11PM",
    :dress_code => "Casual",
    :website => "https://www.manousheh.com/", 
    :dining_style => "Cafe"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/manousheh.jpeg')
rest17.photo.attach(io: file, filename: 'manousheh.jpeg')



rest18 = Restaurant.create!(
    :name => "Queen of Sheba",
    :address => "650 10th Ave, New York, NY 10036",
    :phone_number => "212-397-0111",
    :cuisine => "Ethiopian",
    :details => "Located just a few blocks away from Times Square, the heart of
                the city, on the corner of 10th Avenue and 46th Street in Midtown Manhattan 
                is Queen of Sheba, an Ethiopian eatery that is “perfect for sharing Ethiopian 
                traditional meal, stories and culture with family and friends”. The rum cake 
                is unbelievable! Owner and Executive Chef Philipos Mengistu is truly an 
                Ambassador of Ethiopian food and has been profiled in several TV shows in 
                the US. With a décor that takes you back to Ethiopia, the seating in the 
                restaurant is deliberate; to amplify a sense of community. And you cannot 
                be ashamed to eat with your hands; Queen of Sheba would not have it any 
                other way!",
    :hours => "Monday 5-10pm
               Tuesday - Thursday 12-10pm
               Friday & Saturday 12-11pm
               Sunday 12-10pm",
    :dress_code => "Business Casual",
    :website => "https://www.shebanyc.com/", 
    :additional_features => "Gluten-Free injera available upon request",
    :dining_style => "Family-style"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/queen_of_sheba.jpeg')
rest18.photo.attach(io: file, filename: 'queen_of_sheba.jpeg')


rest19 = Restaurant.create!(
    :name => "Salam",
    :address => "104 W 13th St, New York, NY 10011",
    :phone_number => "212-741-0277",
    :cuisine => "Middle Eastern & Moroccan",
    :details => "Salam is a family business serving new yorkers for over 30-+ 
                 years. We are proud of our traditional middle Eastern dishes 
                 and our creative interpretation of old favorites .our unique 
                 dishes make us a neighborhood favorite",
    :hours => "Friday 5–9PM
               Saturday	5–9PM
               Sunday 5–9PM
               Monday 5–9PM
               Tuesday 5–9PM
               Wednesday 5–9PM
               Thursday	5–9PM",
    :dress_code => "Casual",
    :website => "http://www.salamrestaurant.com/", 
    :dining_style => "Fast Casual"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/salam.png')
rest19.photo.attach(io: file, filename: 'salam.png')



rest20 = Restaurant.create!(
    :name => "Chama Mama",
    :address => "149 W 14th St, New York, NY 10011",
    :phone_number => "210-438-9000",
    :cuisine => "Georgian",
    :details => "You’d expect a Georgian restaurant of this caliber to be tucked 
                 away in South Brooklyn. But no, Chama Mama — with its incredible 
                 regional specialties, Georgian natural wines, and large clay oven 
                 firing fresh bread (for everyone’s favorite khachapuri) — sits 
                 in a sleek space off 14th Street, courtesy of a Tbilisi native 
                 and a chef who cooked for Georgia’s president in a previous life.",
    :hours => "Friday 11AM–11PM
               Saturday	11AM–11PM
               Sunday 11AM–11PM
               Monday 11AM–11PM
               Tuesday 11AM–11PM
               Wednesday 11AM–11PM
               Thursday	11AM–11PM",
    :dress_code => "Business Casual",
    :website => "https://www.chamamama.com/", 
    :additional_features => "Women Operated, Vegan, Organic Wines",
    :dining_style => "Fine dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/chama_mama.jpeg')
rest20.photo.attach(io: file, filename: 'chama_mama.jpeg')


rest21 = Restaurant.create!(
    :name => "Dirt Candy",
    :address => "86 Allen St, New York, NY 10002",
    :phone_number => "212-228-7732",
    :cuisine => "Vegetarian",
    :details => "Leave it to Amanda Cohen to still be blowing to smithereens 
                 every preconceived notion about vegetarian dining. The chef-owner 
                 of Dirt Candy is a James Beard nominee, a pioneer of the 
                 vegetable-forward culinary movement, and a leader intent on building 
                 a better industry: Thanks to a no-tipping system, the entire team 
                 shares equally in the restaurant’s profits. Her layered plates 
                 elate, but they’re also a lot of fun — start with the Korean fried 
                 broccoli; there’s a reason it rarely leaves the menu.",
    :hours => "Friday 5:30–10:30PM
               Saturday	5:30–10:30PM
               Sunday Closed
               Monday Closed
               Tuesday 5:30–10:30PM
               Wednesday 5:30–10:30PM
               Thursday	5:30–10:30PM",
    :dress_code => "Boho Chic",
    :website => "https://www.dirtcandynyc.com/", 
    :additional_features => "Michelin Starred, Woman Operated",
    :dining_style => "Fine dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/dirt_candy.jpeg')
rest21.photo.attach(io: file, filename: 'dirt_candy.jpeg')


rest22 = Restaurant.create!(
    :name => "Verōnika",
    :address => "281 Park Ave. S, Second Floor, E 22nd St Entrance, New York, NY 10010",
    :phone_number => "210-993-6999",
    :cuisine => "European",
    :details => "Just beyond the bar lies the Restaurant, designed to evoke an 
                 elegant brasserie-style setting. The menu offers continental 
                 European classics with a twist that highlights in-season produce, 
                 sustainable seafood, and humanely raised meats, with desserts 
                 showcasing traditional recipes prepared with modern techniques. 
                 Music and grand windows with views of the city complete the backdrop, 
                 creating a lively, bohemian vibe which builds into the night.",
    :hours => "Friday 5PM–2AM
               Saturday	5PM–2AM
               Sunday 5PM–2AM
               Monday 5PM–2AM
               Tuesday 5PM–2AM
               Wednesday 5PM–2AM
               Thursday	5PM–2AM",
    :dress_code => "Smart Casual",
    :website => "https://www.veronikanyc.com/", 
    :dining_style => "Fine dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/veronika.jpeg')
rest22.photo.attach(io: file, filename: 'veronika.jpeg')



rest23 = Restaurant.create!(
    :name => "Antique Garage Tribeca",
    :address => "313 Church St, New York, NY 10013",
    :phone_number => "212-226-0000",
    :cuisine => "Mediterranean, Turkish, Greek",
    :details => "One of the Soho's little gems opening up its doors to Tribeca 
                 with well-picked antiques and offers an eclectic, unique and 
                 romantic ambiance, charming and elegant in the tradition of old 
                 New York. We serve lunch and dinner daily as well as brunch on 
                 weekends, accompanied by live jazz music.",
    :hours => "Dinner Wed–Sat 5:00 pm–11:00 pm",
    :dress_code => "Smart Casual",
    :website => "antiquegaragetribeca.com", 
    :additional_features => "Every night live Jazz 7:00 PM to 10:00 PM",
    :dining_style => "Casual Dining"
)
file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/antique_garage_tribeca.jpeg')
rest23.photo.attach(io: file, filename: 'antique_garage_tribeca.jpeg')


rest24 = Restaurant.create!(
    :name => "A La Turka Restaurant",
    :address => "1417 2nd Ave, New York, NY 10021",
    :phone_number => "212-744-2444",
    :cuisine => "Turkish",
    :details => "Known for its family recipes and lively atmosphere. Sharing our 
                 authentic Mediterranean-style flavors with the world, we invite 
                 our guests to celebrate life’s special moments with a place to 
                 eat and drink in the heart of New York City.",
    :hours => "Friday 11AM–11PM
              Saturday 11AM–11PM
              Sunday 11AM–11PM
              Monday 11AM–11PM
              Tuesday 11AM–11PM
              Wednesday	11AM–11PM
              Thursday	11AM–11PM",
    :dress_code => "Smart Casual",
    :website => "alaturkany.com", 
    :dining_style => "Fine Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/a_la_turka.jpeg')
rest24.photo.attach(io: file, filename: 'a_la_turka.jpeg')


rest25 = Restaurant.create!(
    :name => "Tito Murphy's",
    :address => "346 W 46th St, New York, NY 10036",
    :phone_number => "212-245-2000",
    :cuisine => "Mexican",
    :details => "Tito Murphy’s is a lively cantina offering authentic Mexican 
                 Cuisine in the heart of the Theatre District on Restaurant Row. 
                 It’s the perfect location to enjoy fresh authentic food, amazing 
                 drinks and a great atmosphere. Outdoor Dining options for the 
                 Front Street Cafe, as well as our Rooftop Patio are both HEATED, 
                 and we welcome you to enjoy our Al Fresco dining!",
    :hours => "Mon, Sun 11:30 am–10:30 pm Tue–Thu 11:30 am–11:30 pm Fri, Sat 11:30 am–2:00 am",
    :dress_code => "Casual",
    :website => "https://www.titomurphys.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/tito_murphys.jpeg')
rest25.photo.attach(io: file, filename: 'tito_murphys.jpeg')


rest26 = Restaurant.create!(
    :name => "Peachy Keen",
    :address => "325 W 44th St, New York, NY 10036",
    :phone_number => "212-245-2333",
    :cuisine => "American, Cocktails",
    :details => "Peachy Keen combines '70s inspiration with a modern twist through 
                 high-quality eats, over-the-top sweets and nostalgic cocktails. 
                 Our colorful, comfortable space captures the spirit of the city 
                 with a vibrant atmosphere.",
    :hours => "Brunch Sat, Sun 10:00 am–3:45 pm Lunch Mon–Fri 11:00 am–4:00 pm Dinner Daily 4:00 pm–11:00 pm",
    :dress_code => "Casual",
    :website => "https://www.peachykeennyc.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/peachy_keen.jpeg')
rest26.photo.attach(io: file, filename: 'peachy_keen.jpeg')


rest27 = Restaurant.create!(
    :name => "Ashford & Simpson's Sugar Bar",
    :address => "254 W 72nd St, New York, NY 10023",
    :phone_number => "212-579-0222",
    :cuisine => "Soul food, Latin",
    :details => "Come to Ashford & Simpson's Sugar Bar, an eatery established by 
                 the couple behind Ain't No Mountain High Enough & Ain't Nothing Like The Real Thing.
                 Their culinary venture, Sugar Bar showcases the duo's love for 
                 great music and Southern accented dining.",
    :hours => "Friday 3–11PM
               Saturday	3–11PM
               Sunday 12–8PM
               Monday Closed
               Tuesday	3–10PM
               Wednesday 3–10PM
               Thursday	3PM–12AM",
    :dress_code => "Casual",
    :website => "https://www.sugarbarnyc.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/ashford_simpsons_sugar_bar.jpeg')
rest27.photo.attach(io: file, filename: 'ashford_simpsons_sugar_bar.jpeg')


rest28 = Restaurant.create!(
    :name => "Renaissance Harlem",
    :address => "2245 Adam Clayton Powell Jr Blvd, New York, NY 10030",
    :phone_number => "210-838-7444",
    :cuisine => "American",
    :details => "Renaissance Harlem offers delicious dining, takeout and delivery 
                 to New York, NY. Renaissance Harlem is a cornerstone in the New York 
                 community and has been recognized for its outstanding Italian cuisine, 
                 excellent service and friendly staff.Our restaurant is known for 
                 its modern interpretation of classic dishes and its insistence on 
                 only using high quality fresh ingredients.",
    :hours => " Friday 7–11PM
                Saturday 7–11PM
                Sunday 7–11PM
                Monday Closed
                Tuesday	Closed
                Wednesday Closed
                Thursday 7–11PM",
    :dress_code => "Casual",
    :website => "http://www.renaissanceharlemny.com/", 
    :dining_style => "Casual"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/renaissance_harlem.png')
rest28.photo.attach(io: file, filename: 'renaissance_harlem.png')



rest29 = Restaurant.create!(
    :name => "Chocobar Cortés",
    :address => "141 Alexander Ave, The Bronx, NY 10454",
    :phone_number => "210-841-9333",
    :cuisine => "Puerto-Rican",
    :details => "Chocolate Cortés is a 4th generation, family-owned, Caribbean, 
                 bean-to-bar chocolate manufacturing company. Originally established 
                 in the Dominican Republic in 1929 by Don Pedro Cortés Forteza, 
                 his pioneer spirit promptly moved him to export, and subsequently 
                 begin production of Cortés products from his native Puerto Rico; 
                 thus paving the way to fulfill his vision of developing Caribbean 
                 grown cacao to its fullest potential. Known for its rich and delicious 
                 hot chocolate, Chocolate Cortés quickly became a favorite of Puerto Rican 
                 and Dominican households to this very day.",
    :hours => "Friday 12–10PM
               Saturday	12–10PM
               Sunday 12–7PM
               Monday 12–8PM
               Tuesday	12–8PM
               Wednesday 12–8PM
               Thursday	12–8PM",
    :dress_code => "Casual",
    :website => "https://www.chocobarcortes.com/", 
    :dining_style => "Casual Dining"
)

file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/chocobar-cortes.jpeg')
rest29.photo.attach(io: file, filename: 'chocobar-cortes.jpeg')


rest30 = Restaurant.create!(
    :name => "Trailer Park Lounge",
    :address => "271 W 23rd St, New York, NY 10011",
    :phone_number => "210-261-2777",
    :cuisine => "American",
    :details => "Trailer Park Lounge is a good natured parody with questionable 
                 taste! For nearly 20 years Trailer Park Lounge has been serving 
                 NYC delicious food, delightful cocktails, collectible souvenirs 
                 and outstanding service. Hope to see you soon!",
    :hours => "Friday 4PM–12AM
               Saturday	4PM–12AM
               Sunday 4PM–12AM
               Monday 4PM–12AM
               Tuesday 4PM–12AM
               Wednesday 4PM–12AM
               Thursday	4PM–12AM",
    :dress_code => "Casual",
    :website => "http://www.trailerparklounge.com/", 
    :dining_style => "Fast Casual"
)


file = URI.open('https://eatingeasy-dev.s3.amazonaws.com/trailer-Park-Lounge.jpg')
rest30.photo.attach(io: file, filename: 'trailer-Park-Lounge.jpg')


#Reservations 

# reservation1 = Reservation.create(:user_id => 4, :restaurant_id => 61-119, :first_name => "Beyonce", :last_name => "DemoUser1", :phone_number => "808-867-5309", :email => "demo.user@ymail.com", :date =>, :time =>, :party_size =>, :special_requests => )

#Reviews

# review1 = Review.create(:user_id, :restaurant_id, :overall_rating, :food_rating, :ambiance_rating, :value_rating, :noise_level, :body )

#start user id at 44 and start restaruant id at 251

#Demo User 

user1 = User.create!(first_name: "Beyonce", last_name: "User", username: "DemoUser1", email: "demo.user@ymail.com", password: "password", phone_number: "808-867-5309")
user2 = User.create(first_name: "Larry", last_name: "Rekrap", username: "LRekrap", email: "demo.user1@ymail.com", password: "password", phone_number: "555-445-4656")
user3 = User.create(first_name: "Denise", last_name: "Rekrap", username: "DRekrap", email: "demo.user2@ymail.com", password: "password", phone_number: "555-357-8858")
user4 = User.create(first_name: "Vesha", last_name: "Rekrap", username: "VRekrap", email: "demo.user3@ymail.com", password: "password", phone_number: "555-674-6466")
user5 = User.create(first_name: "Vinia", last_name: "Rekrap", username: "VRekrap1", email: "demo.user4@ymail.com", password: "password", phone_number: "555-246-3465")
user6 = User.create(first_name: "Brittany", last_name: "Rehcturc", username: "BRehcturc", email: "demo.user5@ymail.com", password: "password", phone_number: "555-786-5686")
user7 = User.create(first_name: "Adele", last_name: "Sdnomde", username: "ASdnomde", email: "demo.user6@ymail.com", password: "password", phone_number: "555-246-6464")
user8 = User.create(first_name: "Elsa", last_name: "Noeled", username: "ENoled", email: "demo.user7@ymail.com", password: "password", phone_number: "555-678-2343")
user9 = User.create(first_name: "Mema", last_name: "Coleman", username: "MCole", email: "demo.user8@ymail.com", password: "password", phone_number: "555-257-5775")
user10 = User.create(first_name: "Pepa", last_name: "Coleman", username: "PCole", email: "demo.user9@ymail.com", password: "password", phone_number: "555-754-3637")
user11 = User.create(first_name: "Darnishia", last_name: "Salguod", username: "DDoug", email:"demo.user10@ymail.com", password: "password", phone_number: "555-345-3456") 


reviews = [

# Review.create!(:user_id => 1, :restaurant_id => 1, :overall_rating => 5, :food_rating=> 5, :ambiance_rating => 5, :value_rating => 4, :noise_level => 4, :body => "Oh! My! God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. The decor was unique and incredible. 5 stars!" )
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"This is one of my favorite places. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. I want to hire their decorator to furnish my apartment. I was happy to see how clean everything was. The waiter did an excellent job. This is definitely a spot I'll be frequenting."},
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Best experience ever! I found the ambiance to be very charming. The desserts must be sprinkled with crack because I just craved for more and more. The food was flavorful, savory, and succulent. I was happy to see how clean everything was. I'd give more than 5 stars if I could!"},
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Oh my God! So yummy! Try out the huge selection of incredible appetizers. Everything was just so yummy. I would eat here every day if I could afford it!"},
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I've got a fetish for good food and this place gets me hot! Everything was just so yummy. Try out the huge selection of incredible appetizers. I was happy to see how clean everything was. This is definitely a spot I'll be frequenting."},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I stumbled on this undiscovered gem right in our neighboorhood. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything I tried was bursting with flavor. The decor was unique and incredible. They got a new customer for life!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 5, :noise_level=> 1, :body=>"Best experience ever! I found the ambiance to be very charming. The desserts must be sprinkled with crack because I just craved for more and more. The food was flavorful, savory, and succulent. I was happy to see how clean everything was. I'd give more than 5 stars if I could!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"This is one of my favorite places. Everything was simply decadent. I found the ambiance to be very charming. 5 stars!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"Yumm-o! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything was just so yummy. Easily earned their 5 stars!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I stumbled on this undiscovered gem right in our neighboorhood. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything I tried was bursting with flavor. The decor was unique and incredible. They got a new customer for life!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"Oh my God! So yummy! Try out the huge selection of incredible appetizers. Everything was just so yummy. I would eat here every day if I could afford it!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"This is one of my favorite places. Everything was simply decadent. I found the ambiance to be very charming. 5 stars!"},
{:overall_rating => 5, :food_rating=> 3, :ambiance_rating=> 3, :value_rating=> 4, :noise_level=> 3, :body=>"I've got a fetish for good food and this place gets me hot! Everything was just so yummy. Try out the huge selection of incredible appetizers. I was happy to see how clean everything was. This is definitely a spot I'll be frequenting."},
{:overall_rating => 5, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I stumbled on this undiscovered gem right in our neighboorhood. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything I tried was bursting with flavor. The decor was unique and incredible. They got a new customer for life!"},
{:overall_rating => 5, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"Best experience ever! I found the ambiance to be very charming. The desserts must be sprinkled with crack because I just craved for more and more. The food was flavorful, savory, and succulent. I was happy to see how clean everything was. I'd give more than 5 stars if I could!"},
{:overall_rating => 5, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"Yumm-o! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything was just so yummy. Easily earned their 5 stars!"},
{:overall_rating => 5, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"This is one of my favorite places. Everything was simply decadent. I found the ambiance to be very charming. 5 stars!"},
{:overall_rating => 5, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 4, :body=>"I've got a fetish for good food and this place gets me hot! Everything was just so yummy. Try out the huge selection of incredible appetizers. I was happy to see how clean everything was. This is definitely a spot I'll be frequenting."},
{:overall_rating => 5, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 2, :noise_level=> 4, :body=>"Oh my God! So yummy! Try out the huge selection of incredible appetizers. Everything was just so yummy. I would eat here every day if I could afford it!"},
{:overall_rating => 5, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"Yumm-o! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything was just so yummy. Easily earned their 5 stars!"},
{:overall_rating => 5, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I stumbled on this undiscovered gem right in our neighboorhood. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything I tried was bursting with flavor. The decor was unique and incredible. They got a new customer for life!"},
{:overall_rating => 5, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I've got a fetish for good food and this place gets me hot! Everything was just so yummy. Try out the huge selection of incredible appetizers. I was happy to see how clean everything was. This is definitely a spot I'll be frequenting."},
{:overall_rating => 5, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 5, :body=>"Yumm-o! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything was just so yummy. Easily earned their 5 stars!"},
{:overall_rating => 5, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"Best experience ever! I found the ambiance to be very charming. The desserts must be sprinkled with crack because I just craved for more and more. The food was flavorful, savory, and succulent. I was happy to see how clean everything was. I'd give more than 5 stars if I could!"},
{:overall_rating => 5, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"This is one of my favorite places. Everything was simply decadent. I found the ambiance to be very charming. 5 stars!"},
{:overall_rating => 5, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I've got a fetish for good food and this place gets me hot! Everything was just so yummy. Try out the huge selection of incredible appetizers. I was happy to see how clean everything was. This is definitely a spot I'll be frequenting."},
{:overall_rating => 5, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"Oh my God! So yummy! Try out the huge selection of incredible appetizers. Everything was just so yummy. I would eat here every day if I could afford it!"},
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I stumbled on this undiscovered gem right in our neighboorhood. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything I tried was bursting with flavor. The decor was unique and incredible. They got a new customer for life!"},
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"Oh my God! So yummy! Try out the huge selection of incredible appetizers. Everything was just so yummy. I would eat here every day if I could afford it!"},
{:overall_rating => 5, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"Best experience ever! I found the ambiance to be very charming. The desserts must be sprinkled with crack because I just craved for more and more. The food was flavorful, savory, and succulent. I was happy to see how clean everything was. I'd give more than 5 stars if I could!"},

{:overall_rating => 4, :food_rating => 5, :ambiance_rating => 5, :value_rating => 4, :noise_level => 4, :body => "Oh! My! God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. The decor was unique and incredible. 5 stars!" },
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Decent place. Everything I tried was bursting with flavor. The desserts must be sprinkled with crack because I just craved for more and more. There were a lot of interesting decorations on the walls. 4 stars of satisfaction."},
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"This place was nearby and I decided to check it out. Everything was mostly decadent. I was happy to see how clean everything was. There were a lot of interesting decorations on the walls. The waitress did an excellent job. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! Everything was just so yummy. It failed to meet the 5-star experience because the wait to get in was so long."},
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"It was much better than I expected. There were a lot of interesting decorations on the walls. The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. It could have been perfect, but the chairs were a little sticky."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"This place was nearby and I decided to check it out. Everything was mostly decadent. I was happy to see how clean everything was. There were a lot of interesting decorations on the walls. The waitress did an excellent job. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 5, :noise_level=> 1, :body=>"Decent place. Everything I tried was bursting with flavor. The desserts must be sprinkled with crack because I just craved for more and more. There were a lot of interesting decorations on the walls. 4 stars of satisfaction."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"This place had a lot of heart. Everything was just so yummy. The waiter did an excellent job. Satisfactory experience, will come again."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I have been here several times before. Make sure to save room for dessert, because that was the best part of the meal! The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"It was much better than I expected. There were a lot of interesting decorations on the walls. The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. It could have been perfect, but the chairs were a little sticky."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! Everything was just so yummy. It failed to meet the 5-star experience because the wait to get in was so long."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"This place was nearby and I decided to check it out. Everything was mostly decadent. I was happy to see how clean everything was. There were a lot of interesting decorations on the walls. The waitress did an excellent job. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 3, :ambiance_rating=> 3, :value_rating=> 4, :noise_level=> 3, :body=>"Decent place. Everything I tried was bursting with flavor. The desserts must be sprinkled with crack because I just craved for more and more. There were a lot of interesting decorations on the walls. 4 stars of satisfaction."},
{:overall_rating => 4, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"This place had a lot of heart. Everything was just so yummy. The waiter did an excellent job. Satisfactory experience, will come again."},
{:overall_rating => 4, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"It was much better than I expected. There were a lot of interesting decorations on the walls. The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. It could have been perfect, but the chairs were a little sticky."},
{:overall_rating => 4, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! Everything was just so yummy. It failed to meet the 5-star experience because the wait to get in was so long."},
{:overall_rating => 4, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"This place was nearby and I decided to check it out. Everything was mostly decadent. I was happy to see how clean everything was. There were a lot of interesting decorations on the walls. The waitress did an excellent job. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 4, :body=>"Decent place. Everything I tried was bursting with flavor. The desserts must be sprinkled with crack because I just craved for more and more. There were a lot of interesting decorations on the walls. 4 stars of satisfaction."},
{:overall_rating => 4, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 2, :noise_level=> 4, :body=>"This place had a lot of heart. Everything was just so yummy. The waiter did an excellent job. Satisfactory experience, will come again."},
{:overall_rating => 4, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"It was much better than I expected. There were a lot of interesting decorations on the walls. The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. It could have been perfect, but the chairs were a little sticky."},
{:overall_rating => 4, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! Everything was just so yummy. It failed to meet the 5-star experience because the wait to get in was so long."},
{:overall_rating => 4, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"This place was nearby and I decided to check it out. Everything was mostly decadent. I was happy to see how clean everything was. There were a lot of interesting decorations on the walls. The waitress did an excellent job. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 5, :body=>"Decent place. Everything I tried was bursting with flavor. The desserts must be sprinkled with crack because I just craved for more and more. There were a lot of interesting decorations on the walls. 4 stars of satisfaction."},
{:overall_rating => 4, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"This place had a lot of heart. Everything was just so yummy. The waiter did an excellent job. Satisfactory experience, will come again."},
{:overall_rating => 4, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"It was much better than I expected. There were a lot of interesting decorations on the walls. The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. It could have been perfect, but the chairs were a little sticky."},
{:overall_rating => 4, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! Everything was just so yummy. It failed to meet the 5-star experience because the wait to get in was so long."},
{:overall_rating => 4, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"This place was nearby and I decided to check it out. Everything was mostly decadent. I was happy to see how clean everything was. There were a lot of interesting decorations on the walls. The waitress did an excellent job. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"This place had a lot of heart. Everything was just so yummy. The waiter did an excellent job. Satisfactory experience, will come again."},
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"It was much better than I expected. There were a lot of interesting decorations on the walls. The waiter was prompt and polite. I found the entrees to be very agreeable to my personal flavor-profile. It could have been perfect, but the chairs were a little sticky."},
{:overall_rating => 4, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"Decent place. Everything I tried was bursting with flavor. The desserts must be sprinkled with crack because I just craved for more and more. There were a lot of interesting decorations on the walls. 4 stars of satisfaction."},

{:overall_rating => 3, :food_rating=> 5, :ambiance_rating=> 5, :value_rating => 4, :noise_level => 4, :body => "Oh! My! God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. The decor was unique and incredible. 5 stars!" },
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I'm torn about this place. The entree I had was sublime. The ambiance gives off an earthy feel-good vibe. Overall experience: 3 stars."},
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"This place had a lot of heart. I was not very pleased to find out that the coffee wasn't fair trade. The menu didn't match the one on their website. There were a lot of interesting decorations on the walls. Satisfactory experience, will come again."},
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I had high hopes for this place. I felt the prices were too high given the quality of the food. The service wasn't that good and the waiter was clueless. Might be back. Time will tell."},
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"This place had a lot of heart. Some of my favorite dishes are no longer available. The entree I had was sublime. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 5, :noise_level=> 1, :body=>"This place had a lot of heart. I was not very pleased to find out that the coffee wasn't fair trade. The menu didn't match the one on their website. There were a lot of interesting decorations on the walls. Satisfactory experience, will come again."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I'm torn about this place. The entree I had was sublime. The ambiance gives off an earthy feel-good vibe. Overall experience: 3 stars."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I had high hopes for this place. I felt the prices were too high given the quality of the food. The service wasn't that good and the waiter was clueless. Might be back. Time will tell."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"This place had a lot of heart. Some of my favorite dishes are no longer available. The entree I had was sublime. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I had high hopes for this place. I felt the prices were too high given the quality of the food. The service wasn't that good and the waiter was clueless. Might be back. Time will tell."},
{:overall_rating => 3, :food_rating=> 3, :ambiance_rating=> 3, :value_rating=> 4, :noise_level=> 3, :body=>"I'm torn about this place. The entree I had was sublime. The ambiance gives off an earthy feel-good vibe. Overall experience: 3 stars."},
{:overall_rating => 3, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"This place had a lot of heart. I was not very pleased to find out that the coffee wasn't fair trade. The menu didn't match the one on their website. There were a lot of interesting decorations on the walls. Satisfactory experience, will come again."},
{:overall_rating => 3, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I had high hopes for this place. I felt the prices were too high given the quality of the food. The service wasn't that good and the waiter was clueless. Might be back. Time will tell."},
{:overall_rating => 3, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 4, :body=>"This place had a lot of heart. Some of my favorite dishes are no longer available. The entree I had was sublime. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 2, :noise_level=> 4, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I'm torn about this place. The entree I had was sublime. The ambiance gives off an earthy feel-good vibe. Overall experience: 3 stars."},
{:overall_rating => 3, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I had high hopes for this place. I felt the prices were too high given the quality of the food. The service wasn't that good and the waiter was clueless. Might be back. Time will tell."},
{:overall_rating => 3, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"This place had a lot of heart. Some of my favorite dishes are no longer available. The entree I had was sublime. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 5, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"This place had a lot of heart. I was not very pleased to find out that the coffee wasn't fair trade. The menu didn't match the one on their website. There were a lot of interesting decorations on the walls. Satisfactory experience, will come again."},
{:overall_rating => 3, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"I had high hopes for this place. I felt the prices were too high given the quality of the food. The service wasn't that good and the waiter was clueless. Might be back. Time will tell."},
{:overall_rating => 3, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I'm torn about this place. The entree I had was sublime. The ambiance gives off an earthy feel-good vibe. Overall experience: 3 stars."},
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"This place had a lot of heart. I was not very pleased to find out that the coffee wasn't fair trade. The menu didn't match the one on their website. There were a lot of interesting decorations on the walls. Satisfactory experience, will come again."},
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"I have been here several times before. Some of my favorite dishes are no longer available. The menu didn't match the one on their website. The chicken was a little dry. I had a satisfactory experience and will have to try it again."},
{:overall_rating => 3, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"I'm torn about this place. The entree I had was sublime. The ambiance gives off an earthy feel-good vibe. Overall experience: 3 stars."},

{:overall_rating => 2, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 4, :noise_level=> 4, :body => "Oh! My! God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. The decor was unique and incredible. 5 stars!" },
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Bleh. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waitress was tired. Meh."},
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I am never coming back here! Overhyped. The food was all right but seriously lacked presentation. I would be hard pressed to come back."},
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I felt like this place wasn't trying at all. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waiter was clueless. Too many things on the menu look like crap, smell like crap, and taste like crap. I shouldn't have to pay good money to be served vegetables from a can. They need to get their act together before I set foot in this place again."},
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I am never coming back here! The waitress was barely there. Too many things on the menu look like crap, smell like crap, and taste like crap. The chicken was a little dry. The menu didn't match the one on their website. I gave this place two stars because I was feeling extra generous."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I felt like this place wasn't trying at all. I found the entrees to not be very agreeable to my personal flavor-profile. Seriously, how difficult is it to get a clean glass around here? Meh."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 5, :noise_level=> 1, :body=>"Bleh. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waitress was tired. Meh."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I felt like this place wasn't trying at all. I found the entrees to not be very agreeable to my personal flavor-profile. Seriously, how difficult is it to get a clean glass around here? Meh."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I am never coming back here! The waitress was barely there. Too many things on the menu look like crap, smell like crap, and taste like crap. The chicken was a little dry. The menu didn't match the one on their website. I gave this place two stars because I was feeling extra generous."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I felt like this place wasn't trying at all. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waiter was clueless. Too many things on the menu look like crap, smell like crap, and taste like crap. I shouldn't have to pay good money to be served vegetables from a can. They need to get their act together before I set foot in this place again."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I felt like this place wasn't trying at all. I found the entrees to not be very agreeable to my personal flavor-profile. Seriously, how difficult is it to get a clean glass around here? Meh."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I am never coming back here! Overhyped. The food was all right but seriously lacked presentation. I would be hard pressed to come back."},
{:overall_rating => 2, :food_rating=> 3, :ambiance_rating=> 3, :value_rating=> 4, :noise_level=> 3, :body=>"Bleh. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waitress was tired. Meh."},
{:overall_rating => 2, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I am never coming back here! The waitress was barely there. Too many things on the menu look like crap, smell like crap, and taste like crap. The chicken was a little dry. The menu didn't match the one on their website. I gave this place two stars because I was feeling extra generous."},
{:overall_rating => 2, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I felt like this place wasn't trying at all. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waiter was clueless. Too many things on the menu look like crap, smell like crap, and taste like crap. I shouldn't have to pay good money to be served vegetables from a can. They need to get their act together before I set foot in this place again."},
{:overall_rating => 2, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I am never coming back here! Overhyped. The food was all right but seriously lacked presentation. I would be hard pressed to come back."},
{:overall_rating => 2, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I felt like this place wasn't trying at all. I found the entrees to not be very agreeable to my personal flavor-profile. Seriously, how difficult is it to get a clean glass around here? Meh."},
{:overall_rating => 2, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 4, :body=>"Bleh. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waitress was tired. Meh."},
{:overall_rating => 2, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 2, :noise_level=> 4, :body=>"I really wanted to like this place. I shouldn't have to pay good money to be served vegetables from a can. Too many things on the menu look like crap, smell like crap, and taste like crap. I found the entrees to not be very agreeable to my personal flavor-profile. I had a less than satisfactory experience and will probably not be here again."},
{:overall_rating => 2, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I felt like this place wasn't trying at all. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waiter was clueless. Too many things on the menu look like crap, smell like crap, and taste like crap. I shouldn't have to pay good money to be served vegetables from a can. They need to get their act together before I set foot in this place again."},
{:overall_rating => 2, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I am never coming back here! Overhyped. The food was all right but seriously lacked presentation. I would be hard pressed to come back."},
{:overall_rating => 2, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I am never coming back here! The waitress was barely there. Too many things on the menu look like crap, smell like crap, and taste like crap. The chicken was a little dry. The menu didn't match the one on their website. I gave this place two stars because I was feeling extra generous."},
{:overall_rating => 2, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 5, :body=>"Bleh. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waitress was tired. Meh."},
{:overall_rating => 2, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"I really wanted to like this place. I shouldn't have to pay good money to be served vegetables from a can. Too many things on the menu look like crap, smell like crap, and taste like crap. I found the entrees to not be very agreeable to my personal flavor-profile. I had a less than satisfactory experience and will probably not be here again."},
{:overall_rating => 2, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"I felt like this place wasn't trying at all. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waiter was clueless. Too many things on the menu look like crap, smell like crap, and taste like crap. I shouldn't have to pay good money to be served vegetables from a can. They need to get their act together before I set foot in this place again."},
{:overall_rating => 2, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I am never coming back here! Overhyped. The food was all right but seriously lacked presentation. I would be hard pressed to come back."},
{:overall_rating => 2, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I am never coming back here! The waitress was barely there. Too many things on the menu look like crap, smell like crap, and taste like crap. The chicken was a little dry. The menu didn't match the one on their website. I gave this place two stars because I was feeling extra generous."},
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"Bleh. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waitress was tired. Meh."},
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"I felt like this place wasn't trying at all. The photos of the food were appetizing and palpable, but didn't live up to the hype. The service wasn't that good and the waiter was clueless. Too many things on the menu look like crap, smell like crap, and taste like crap. I shouldn't have to pay good money to be served vegetables from a can. They need to get their act together before I set foot in this place again."},
{:overall_rating => 2, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"I am never coming back here! Overhyped. The food was all right but seriously lacked presentation. I would be hard pressed to come back."},

{:overall_rating => 1, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 4, :noise_level=> 4, :body=> "Oh! My! God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. The decor was unique and incredible. 5 stars!" },
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"I can summarize my visit in one word: Dreadful. The whole place was just dirty. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! Overhyped. Seriously, how difficult is it to get a clean glass around here? 1 star was too generous."},
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Dreadful place. I found a dead cockroach on the floor of my booth. They can survive a nuclear explosion, but the entree was too much for them. I threw up in my mouth a little when they brought me my food. Overhyped. I found an eyelash that definitely wasn't mine in my food. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Yuck! I found an eyelash that definitely wasn't mine in my food. Too many things on the menu look like crap, smell like crap, and taste like crap. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Worst experience ever! Even Chef Boyardee would be disgusted by this sorry attempt at a meal. I heard a rumor that the vegetarian dishes are prepared alongside the meat. I think this place was featured on Kitchen Nightmares, or at least it should have been. I wish I could put a sign out front that said. DONT EAT HERE!"},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 1, :value_rating=> 5, :noise_level=> 1, :body=>"Dreadful place. I found a dead cockroach on the floor of my booth. They can survive a nuclear explosion, but the entree was too much for them. I threw up in my mouth a little when they brought me my food. Overhyped. I found an eyelash that definitely wasnt mine in my food. Wild horses couldnt drag me back here."},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 5, :noise_level=> 1, :body=>"I can summarize my visit in one word: Dreadful. The whole place was just dirty. The kitchen screwed up my order completely, mixing it up with someone elses. It took almost an hour to get it corrected! Overhyped. Seriously, how difficult is it to get a clean glass around here? 1 star was too generous."},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"I can summarize my visit in one word: Horrible. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! I asked for my steak medium, but it was frozen in the center. The dead flies on the window sill indicated to me that they don't do a good job cleaning and the flies found the food to be toxic. I gave 1 star because I couldn't give 0."},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"Lame. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! Overhyped. This food will start the zombie apocalypse. Stay away!"},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"Yuck! I found an eyelash that definitely wasn't mine in my food. Too many things on the menu look like crap, smell like crap, and taste like crap. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"Dreadful place. I found a dead cockroach on the floor of my booth. They can survive a nuclear explosion, but the entree was too much for them. I threw up in my mouth a little when they brought me my food. Overhyped. I found an eyelash that definitely wasn't mine in my food. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 2, :value_rating=> 4, :noise_level=> 2, :body=>"Worst experience ever! Even Chef Boyardee would be disgusted by this sorry attempt at a meal. I heard a rumor that the vegetarian dishes are prepared alongside the meat. I think this place was featured on Kitchen Nightmares, or at least it should have been. I wish I could put a sign out front that said DONT EAT HERE!"},
{:overall_rating => 1, :food_rating=> 3, :ambiance_rating=> 3, :value_rating=> 4, :noise_level=> 3, :body=>"I can summarize my visit in one word: Dreadful. The whole place was just dirty. The kitchen screwed up my order completely, mixing it up with someone elses. It took almost an hour to get it corrected! Overhyped. Seriously, how difficult is it to get a clean glass around here? 1 star was too generous."},
{:overall_rating => 1, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I felt like this place wasnt trying at all. Eating here is like playing Russian Roulette, only you have a 5 out of 6 chance of getting food poisoning. Overhyped. The kitchen screwed up my order completely, mixing it up with someone elses. It took almost an hour to get it corrected! 1 star. Never again."},
{:overall_rating => 1, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I can summarize my visit in one word: Horrible. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! I asked for my steak medium, but it was frozen in the center. The dead flies on the window sill indicated to me that they don't do a good job cleaning and the flies found the food to be toxic. I gave 1 star because I couldn't give 0."},
{:overall_rating => 1, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"Yuck! I found an eyelash that definitely wasn't mine in my food. Too many things on the menu look like crap, smell like crap, and taste like crap. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 2, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 3, :body=>"I can summarize my visit in one word: Dreadful. The whole place was just dirty. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! Overhyped. Seriously, how difficult is it to get a clean glass around here? 1 star was too generous."},
{:overall_rating => 1, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 3, :noise_level=> 4, :body=>"Lame. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! Overhyped. This food will start the zombie apocalypse. Stay away!"},
{:overall_rating => 1, :food_rating=> 1, :ambiance_rating=> 3, :value_rating=> 2, :noise_level=> 4, :body=>"I felt like this place wasn't trying at all. Eating here is like playing Russian Roulette, only you have a 5 out of 6 chance of getting food poisoning. Overhyped. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! 1 star. Never again."},
{:overall_rating => 1, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"Yuck! I found an eyelash that definitely wasn't mine in my food. Too many things on the menu look like crap, smell like crap, and taste like crap. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"I felt like this place wasn't trying at all. Eating here is like playing Russian Roulette, only you have a 5 out of 6 chance of getting food poisoning. Overhyped. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! 1 star. Never again."},
{:overall_rating => 1, :food_rating=> 1, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 4, :body=>"Dreadful place. I found a dead cockroach on the floor of my booth. They can survive a nuclear explosion, but the entree was too much for them. I threw up in my mouth a little when they brought me my food. Overhyped. I found an eyelash that definitely wasn't mine in my food. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 2, :noise_level=> 5, :body=>"I can summarize my visit in one word: Horrible. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! I asked for my steak medium, but it was frozen in the center. The dead flies on the window sill indicated to me that they don't do a good job cleaning and the flies found the food to be toxic. I gave 1 star because I couldn't give 0."},
{:overall_rating => 1, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"Worst experience ever! Even Chef Boyardee would be disgusted by this sorry attempt at a meal. I heard a rumor that the vegetarian dishes are prepared alongside the meat. I think this place was featured on Kitchen Nightmares, or at least it should have been. I wish I could put a sign out front that said DON'T EAT HERE!"},
{:overall_rating => 1, :food_rating=> 5, :ambiance_rating=> 4, :value_rating=> 1, :noise_level=> 5, :body=>"I can summarize my visit in one word: Dreadful. The whole place was just dirty. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! Overhyped. Seriously, how difficult is it to get a clean glass around here? 1 star was too generous."},
{:overall_rating => 1, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"I can summarize my visit in one word: Horrible. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! I asked for my steak medium, but it was frozen in the center. The dead flies on the window sill indicated to me that they don't do a good job cleaning and the flies found the food to be toxic. I gave 1 star because I couldn't give 0."},
{:overall_rating => 1, :food_rating=> 5, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"Yuck! I found an eyelash that definitely wasn't mine in my food. Too many things on the menu look like crap, smell like crap, and taste like crap. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 1, :noise_level=> 5, :body=>"Worst experience ever! Even Chef Boyardee would be disgusted by this sorry attempt at a meal. I heard a rumor that the vegetarian dishes are prepared alongside the meat. I think this place was featured on Kitchen Nightmares, or at least it should have been. I wish I could put a sign out front that said DON'T EAT HERE!"},
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"Dreadful place. I found a dead cockroach on the floor of my booth. They can survive a nuclear explosion, but the entree was too much for them. I threw up in my mouth a little when they brought me my food. Overhyped. I found an eyelash that definitely wasn't mine in my food. Wild horses couldn't drag me back here."},
{:overall_rating => 1, :food_rating=> 4, :ambiance_rating=> 5, :value_rating=> 2, :noise_level=> 1, :body=>"I can summarize my visit in one word: Dreadful. The whole place was just dirty. The kitchen screwed up my order completely, mixing it up with someone else's. It took almost an hour to get it corrected! Overhyped. Seriously, how difficult is it to get a clean glass around here? 1 star was too generous."}

]; 

(0...reviews.length).each do |i|
    # give the review at that current index a variable 
    rev = reviews[i]
    # create your random restaurant id
    res_num = rand(1..30) 
    # create your random user id
    user_num = rand(1..11)
    #create user name
    user_name = User.find(user_num).first_name
    # create your new key-value pairs in the current review for user and resturant id
    rev[:user_id] = user_num
    rev[:restaurant_id] = res_num
    rev[:name] = user_name

    # send the whole object to .create
    Review.create(rev)
end


