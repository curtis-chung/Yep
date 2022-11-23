from app.models import db, Business, environment, SCHEMA


# Adds a demo Business, you can add other businesses here if you want
def seed_businesses():
    Masa = Business(
        user_id="1",
        business_name='Masa',
        address="10 Columbus Circle",
        city='New York',
        state="NY",
        postal_code="10019",
        lat="40.817392383062085",
        lng="-73.91999186193864",
        phone_number="2128239800",
        web_address="https://www.masanyc.com/",
        operating_time="Tuesday 12PM-8PM",
        business_type="Japanese",
        price="4"
    )

    db.session.add(Masa)
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
