from app.models import db, Business, environment, SCHEMA


# Adds a demo Business, you can add other businesses here if you want
def seed_businesses():

    # 3 Michelin Stars
    Masa = Business(
        user_id="2",
        business_name='Masa',
        address="10 Columbus Circle",
        city='New York',
        state="NY",
        postal_code="10019",
        lat="40.817392383062085",
        lng="-73.91999186193864",
        phone_number="2128239800",
        web_address="https://www.masanyc.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Japanese",
        price="4"
    )

    LeBernardin = Business(
        user_id="2",
        business_name='Le Bernardin',
        address="155 W. 51st St",
        city='New York',
        state="NY",
        postal_code="10019",
        lat="40.76166559137585",
        lng="-73.98175579999999",
        phone_number="2125541515",
        web_address="https://www.le-bernardin.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Seafood",
        price="4"
    )

    ElevenMadisonPark = Business(
        user_id="2",
        business_name='Eleven Madison Park',
        address="11 Madison Ave.",
        city='New York',
        state="NY",
        postal_code="10010",
        lat="40.74176568258326",
        lng="-73.98721384354972",
        phone_number="2128890905",
        web_address="https://www.elevenmadisonpark.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Innovative",
        price="4"
    )

    PerSe = Business(
        user_id="2",
        business_name='Per Se',
        address="10 Columbus Circle.",
        city='New York',
        state="NY",
        postal_code="10010",
        lat="40.76830716046298",
        lng="-73.98284515704037",
        phone_number="2128239335",
        web_address="https://www.thomaskeller.com/perseny",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="French",
        price="4"
    )

    ChefTable = Business(
        user_id="2",
        business_name="Chef's Table at Brooklyn Fare",
        address="431 W. 37th St.",
        city='New York',
        state="NY",
        postal_code="10018",
        lat="40.756202549700845",
        lng="-73.99658970122222",
        phone_number="7182430050",
        web_address="https://www.brooklynfare.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Contemporary",
        price="4"
    )

    # 2 Michelin Stars
    TheModern = Business(
        user_id="2",
        business_name="The Modern",
        address="9 W. 53rd St.",
        city='New York',
        state="NY",
        postal_code="10019",
        lat="40.76112754971007",
        lng="-73.97675518648421",
        phone_number="2123331220",
        web_address="https://www.themodernnyc.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Contemporary",
        price="4"
    )

    Atomix = Business(
        user_id="2",
        business_name="Atomix",
        address="104 E. 30th St.",
        city='New York',
        state="NY",
        postal_code="10016",
        lat="40.74436986360897",
        lng="-73.98279655704071",
        phone_number="6464767217",
        web_address="https://www.atomixnyc.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Korean",
        price="4"
    )

    # 1 Michelin Star
    DonAngie = Business(
        user_id="2",
        business_name="Don Angie",
        address="103 Greenwich Ave.",
        city='New York',
        state="NY",
        postal_code="10014",
        lat="40.737925618434154",
        lng="-74.00204025704075",
        phone_number="2128898884",
        web_address="https://www.donangie.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Italian",
        price="3"
    )

    JejuNoodleBar = Business(
        user_id="2",
        business_name="Jeju Noodle Bar",
        address="679 Greenwich St.",
        city='New York',
        state="NY",
        postal_code="10014",
        lat="40.733143280562274",
        lng="-74.00730952348195",
        phone_number="6466660947",
        web_address="https://www.jejunoodlebar.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Korean",
        price="3"
    )

    MusketRoom = Business(
        user_id="2",
        business_name="The Musket Room",
        address="265 Elizabeth St.",
        city='New York',
        state="NY",
        postal_code="10012",
        lat="40.72413768438767",
        lng="-73.99377888587742",
        phone_number="2122190764",
        web_address="https://www.musketroom.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="American Contemporary",
        price="3"
    )

    Rolos = Business(
        user_id="2",
        business_name="Rolo's",
        address="853 Onderdonk Ave.",
        city='New York',
        state="NY",
        postal_code="11385",
        lat="40.702839696738614",
        lng="-73.903508",
        phone_number="7184176567",
        web_address="https://www.rolosnyc.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="American",
        price="2"
    )

    Jiang = Business(
        user_id="2",
        business_name="Jiang Nan",
        address="133-42 39th Ave.",
        city='New York',
        state="NY",
        postal_code="11354",
        lat="40.75985289006228",
        lng="-73.83275108465611",
        phone_number="7183538855",
        web_address="http://www.jiangnanny.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Chinese",
        price="2"
    )

    Momofuku = Business(
        user_id="2",
        business_name="Momofuku Noodle Bar",
        address="171 First Ave.",
        city='New York',
        state="NY",
        postal_code="10003",
        lat="40.72988668370398",
        lng="-73.98433416931222",
        phone_number="2127777773",
        web_address="https://momofuku.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Asian",
        price="2"
    )

    Noz = Business(
        user_id="2",
        business_name="Sushi Noz",
        address="181 E. 78th St.",
        city='New York',
        state="NY",
        postal_code="10075",
        lat="40.77424624254102",
        lng="-73.95810333862443",
        phone_number="9173381792",
        web_address="https://www.sushinoz.com/",
        operating_time="Mon-2:00PM-10:00PM,Tue-2:00PM-10:00PM,Wed-2:00PM-10:00PM,Thu-2:00PM-10:00PM,Fri-2:00PM-10:00PM,Sat-2:00PM-10:00PM,Sun-Closed",
        business_type="Japanese",
        price="4"
    )


    db.session.add(Masa)
    db.session.add(LeBernardin)
    db.session.add(ElevenMadisonPark)
    db.session.add(PerSe)
    db.session.add(ChefTable)
    db.session.add(TheModern)
    db.session.add(Atomix)
    db.session.add(DonAngie)
    db.session.add(JejuNoodleBar)
    db.session.add(MusketRoom)
    db.session.add(Rolos)
    db.session.add(Jiang)
    db.session.add(Momofuku)
    db.session.add(Noz)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the businesses table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_businesses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.businesses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM businesses")

    db.session.commit()
