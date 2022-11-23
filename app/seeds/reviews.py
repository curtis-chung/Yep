from app.models import db, Review, environment, SCHEMA


# Adds a demo Business, you can add other reviews here if you want
def seed_reviews():
    MasaReview = Review(
        user_id="2",
        business_id="1",
        review_content="PICK THE CHEF'S COUNTER!",
        stars="4"
    )

    db.session.add(MasaReview)
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