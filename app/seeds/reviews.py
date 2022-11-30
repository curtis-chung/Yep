from app.models import db, Review, environment, SCHEMA


# Adds a demo Business, you can add other reviews here if you want
def seed_reviews():
    MasaReview1 = Review(
        user_id="2",
        business_id="1",
        review_content="Unfortunately, you cannot take pictures when you enter the restaurant, but that is also its charm. The experience of getting served one piece of sushi at a time is magical.",
        stars="4"
    )
    MasaReview2 = Review(
        user_id="3",
        business_id="1",
        review_content="We ate at the counter and watched unique cocktails being prepared. Delicious meal ~ Uni with Foie-gras, Sushi, Miso Cod, Tacos… nice ice creams. Very enjoyable experience.",
        stars="4"
    )
    MasaReview3 = Review(
        user_id="4",
        business_id="1",
        review_content="Yes, this place deserves all three Michelin stars and yes it's worth making that reservation. No, I haven't found another omakase that is on par with this yet. Frankly, I've never had a meal in my life that comes close to this.",
        stars="5"
    )
    MasaReview4 = Review(
        user_id="5",
        business_id="1",
        review_content="Every course was excellent and the sake was my favorite I've ever had. You pay for the fantastic food but also the service and the intimacy of the experience. It's expensive but a very cool experience and we enjoyed it a ton.",
        stars="4"
    )
    MasaReview5 = Review(
        user_id="6",
        business_id="1",
        review_content="Amazing Michelin 3 star experience. We were on the waitlist even though we booked a month ahead of time. Lucky enough to get the front row seats served by the master chef Masa. The bill came up to $2100 for two with two drinks.",
        stars="5"
    )

    LeBernardinReview1 = Review(
        user_id="1",
        business_id="2",
        review_content="It lives up to the hype! Exceptional food! Chef's menu with wine pairing.",
        stars="4"
    )
    LeBernardinReview2 = Review(
        user_id="6",
        business_id="2",
        review_content="Nice place but the food could be better. I expected more of an authentic French flair. It's ok if you want a nice place but wouldn't go out of my way for food.",
        stars="3"
    )
    LeBernardinReview3 = Review(
        user_id="4",
        business_id="2",
        review_content="Immaculate service, well trained and orchestrated, nicely paced. Would we go back - no, it's ridiculously expensive. Are we glad we dined there once - yes, wouldn't have missed it for the world.",
        stars="4"
    )
    LeBernardinReview4 = Review(
        user_id="3",
        business_id="2",
        review_content="Le Bernardin is deserving of the Michelin 3 stars because it's simply that outstanding.  Both the lunch and the dinner are impeccable meals and everything on the menu is worthy of trying.",
        stars="5"
    )

    ElevenMadisonParkReview1 = Review(
        user_id="2",
        business_id="3",
        review_content="The experience, atmosphere, and food make this place an absolute must visit. The cocktails are delicious, the great combination of food, textures, herbs, and preparation make each dish dance on your tongue...a great palate pleaser.",
        stars="5"
    )
    ElevenMadisonParkReview2 = Review(
        user_id="5",
        business_id="3",
        review_content="TOTALLY WORTH IT! I've booked dining in the bar (6-7 courses) to celebrate my 22nd birthday with my boyfriend and totally loved it. Explosive plant-based dishes with amazing flavors. My favorite part? Dessert!",
        stars="5"
    )
    ElevenMadisonParkReview3 = Review(
        user_id="4",
        business_id="3",
        review_content="This was my favorite spot in NYC. Is a vegan menu worth $335 USD? Absolutely. EMP elevates simple ingredients to another dimension. I can guarantee that your perspective on vegan food will change after this experience.",
        stars="5"
    )

    PerSeReview1 = Review(
        user_id="5",
        business_id="4",
        review_content="A wonderful experience from start to finish. The staff was warm and friendly. The food was absolutely delicious. The wines were great and plentiful. The music was surprisingly eclectic and fun. We couldn't have asked for anything else.",
        stars="5"
    )
    PerSeReview2 = Review(
        user_id="3",
        business_id="4",
        review_content="Just an incredible dining experience. From the champagne to the custom cocktails and each beautifully plated and delicious course, I loved every aspect of being at Per Se. The desserts were dreamy and the kitchen tour was also impressive.",
        stars="5"
    )
    PerSeReview3 = Review(
        user_id="6",
        business_id="4",
        review_content="What an amazing dinner and a top-notch experience. Some dishes on the tasting menu are similar to the French Laundry and some are unique to Per Se. Hard to say which one is better, they both have their own character.",
        stars="5"
    )

    ChefTableReview1 = Review(
        user_id="2",
        business_id="5",
        review_content="I've only been to just three 3-star restaurants in my life and this one was definitely interesting. Not exactly sure what went wrong, the food was mediocre (maybe because I'm not a fan of raw stuff like sashimi) but the service was great.",
        stars="3"
    )
    ChefTableReview2 = Review(
        user_id="3",
        business_id="5",
        review_content="Perhaps here the food was once innovative, pushing boundaries and discovering new culinary territory, but the cuisine, while good, is not worthy of the accolades to which it still lays claim much less to the price that is charged.",
        stars="2"
    )
    ChefTableReview3 = Review(
        user_id="4",
        business_id="5",
        review_content="This was disappointing, and looking at other reviews I have an idea why. If it's the first time a person is trying Japanese French fusion fine dining they might like the presentation and perhaps some of the dishes might taste new.",
        stars="3"
    )

    TheModernReview1 = Review(
        user_id="4",
        business_id="6",
        review_content="I've been coming to the Modern for years now. And I've enjoyed Lunch, Dinner, and the casual Bar Room experience. I can say with the utmost confidence that this is my favorite restaurant In the world.",
        stars="5"
    )
    TheModernReview2 = Review(
        user_id="3",
        business_id="6",
        review_content="We have been in 5-6 Michelin restaurants this year. The Modern give me the best experience so far. From the food quality and environment to the service, they are all excellent. Every single dish was great, especially the 14 days dry age duck.",
        stars="5"
    )

    AtomixReview1 = Review(
        user_id="6",
        business_id="7",
        review_content="…. I'm utterly speechless. Each course was an explosion of flavor. You have to respect the level of precision at this restaurant along with the presentation of the dishes. Definitely deserves its Two-Michelin Star rating.",
        stars="5"
    )
    AtomixReview2 = Review(
        user_id="5",
        business_id="7",
        review_content="Best fine dinning experience at the bar, period. Everything was great: food, cocktails, and service. My only complaint is that it's too hard to reserve a seat and we do want to visit again!",
        stars="5"
    )
    DonAngieReview1 = Review(
        user_id="2",
        business_id="8",
        review_content="Don Angie is a Michelin-star restaurant and it's one of my favorite Italian restaurants in NYC. It's incredibly hard to get a reservation. I tried making a reservation on Resy for a while and setting alerts for multiple days but it didn't work. One day I just randomly opened the Resy app and took a look at Don Angie and saw an open slot at 4:30 pm a couple of days later on Saturday, and I immediately booked that time slot. The restaurant was almost full when we got there around 4:30 pm on Saturday. We ordered two cocktails, amberjack Crudo as the appetizer, lasagna as the main course, caramelized pear sorbet, and black cocoa tiramisu as dessert. The amberjack crudo was quite unique - its mushrooms wrapped in crudo and it's tasty. 'Our lasagna for two' was creamy and mouthwatering. It's one of the best lasagnas I've ever had. If you are planning to order only one dish, definitely try the lasagna. It's served with garlic flatbread which was also delicious. In terms of the desserts, I like the tiramisu better than the sorbet, but they were both good. We were stuffed after dinner. We definitely ordered too much food since it's so hard to get a reservation and we don't know when we'll come back again. The service was good. I'd highly recommend this restaurant.",
        stars="5"
    )
    JejuNoodleBarReview1 = Review(
        user_id="5",
        business_id="9",
        review_content="After hearing about some of my friends' visits here, I was nervous about coming because as much as I wanted to love it, I heard very mixed reviews. But, even as a girl who grew up eating Korean food all her life (shoutout to my amazing grandma), I am so thankful I got to try this place. Ever since I saw the YouTube video on this place that showed a 'day in the life' of the chefs, I appreciated how much effort went into each dish and had been sincerely waiting to secure a res. Highly recommend checking out the video! It is incredibly hard to get a reservation, but just keep it bookmarked on your phone and casually check on a Wednesday or when reservations drop at midnight EST. I luckily found a dinner res for Friday on a random workday afternoon and came with three of my friends. We ordered all the popular favs. The toro ssambap was worth the hype - the soft fish just melts in your mouth and tastes even better with the seaweed. I was so shocked at the amount of caviar that comes with the fried chicken, but it was the yogurt sauce that really blew me away. It was also one of the juiciest chickens I've tried. NOTHING COMPARES to the jjajang ribs; it's the perfect amount of char and complements the taste of the jjajang paste very well. The ribs just glide off the bone. The wagyu ramen was delicious. Will I be dreaming about it? Eh. My boyfriend loved the family style ramen though. I think the appetizers blew me away more than the ramen, but that's just because I'm not a huge ramen person. The service here was impeccable, with waiters checking in on us and refilling out waters throughout the night. Ambience is also lovely and very intimate. I would love to come back!!!",
        stars="5"
    )
    MusketRoomImage1 = Review(
        user_id="4",
        business_id="10",
        review_content="Really enjoyed the iberico, tartare and caviar bite that all really stood out. Loved the dim lit dark wood ambiance that was sophisticated without being overly stuffy. Not too loud from music but good liveliness from other tables. Amazing service and they accommodated so easily to all dietary restrictions despite it being a set tasting menu, and great service pace.",
        stars="5"
    )

    db.session.add(MasaReview1)
    db.session.add(MasaReview2)
    db.session.add(MasaReview3)
    db.session.add(MasaReview4)
    db.session.add(MasaReview5)
    db.session.add(LeBernardinReview1)
    db.session.add(LeBernardinReview2)
    db.session.add(LeBernardinReview3)
    db.session.add(LeBernardinReview4)
    db.session.add(ElevenMadisonParkReview1)
    db.session.add(ElevenMadisonParkReview2)
    db.session.add(ElevenMadisonParkReview3)
    db.session.add(PerSeReview1)
    db.session.add(PerSeReview2)
    db.session.add(PerSeReview3)
    db.session.add(ChefTableReview1)
    db.session.add(ChefTableReview2)
    db.session.add(ChefTableReview3)
    db.session.add(TheModernReview1)
    db.session.add(TheModernReview2)
    db.session.add(AtomixReview1)
    db.session.add(AtomixReview2)
    db.session.add(DonAngieReview1)
    db.session.add(JejuNoodleBarReview1)
    db.session.add(MusketRoomImage1)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the reviews table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
