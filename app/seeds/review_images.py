from app.models import db, ReviewImage, environment, SCHEMA


def seed_review_images():
    MasaReviewImage1 = ReviewImage(
        review_id = "1",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/02vP2X2dAziFukNmxrlSOQ/o.jpg"
    )
    MasaReviewImage2 = ReviewImage(
        review_id = "1",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/uzllSeSbeUcJuaClbdEsfw/o.jpg"
    )
    MasaReviewImage3 = ReviewImage(
        review_id = "1",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/DQGv9lqt5GgFBSCK56IVEg/o.jpg"
    )
    MasaReviewImage4 = ReviewImage(
        review_id = "3",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/68FGbM-EU7-kyoGv4mitSQ/o.jpg"
    )
    MasaReviewImage5 = ReviewImage(
        review_id = "3",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/DGZg_LwfngFBXH4CRwWMlw/o.jpg"
    )

    LeBernardinReviewImage1 = ReviewImage(
        review_id = "6",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/4hIbyRP0OaYYLNMYQZQ0hw/o.jpg"
    )
    LeBernardinReviewImage2 = ReviewImage(
        review_id = "6",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/vfNFO621rP8FwUSy_FEj1w/o.jpg"
    )
    LeBernardinReviewImage3 = ReviewImage(
        review_id = "7",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/Mlm1CZY1VN764BWGdnbu8g/o.jpg"
    )
    LeBernardinReviewImage4 = ReviewImage(
        review_id = "8",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/inOMEtU2G2dHT40h6Auk-Q/o.jpg"
    )
    LeBernardinReviewImage5 = ReviewImage(
        review_id = "9",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/pt4Wj4ltl41atJrUa_3IkA/o.jpg"
    )

    ElevenMadisonParkReviewImage1 = ReviewImage(
        review_id = "11",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/MW5SDEu0gP99ezv4hfqdiA/o.jpg"
    )
    ElevenMadisonParkReviewImage2 = ReviewImage(
        review_id = "11",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/oQLh_BYjv0HKte9xZ_qMGA/o.jpg"
    )
    ElevenMadisonParkReviewImage3 = ReviewImage(
        review_id = "11",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/TkYM6no4gF576s9Grb-0iA/o.jpg"
    )
    ElevenMadisonParkReviewImage4 = ReviewImage(
        review_id = "11",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/03HbCmOYyA81L0jijYYo_Q/o.jpg"
    )
    ElevenMadisonParkReviewImage5 = ReviewImage(
        review_id = "11",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/IwGH24hOFbeT8MpyFCtxKA/o.jpg"
    )

    PerSeReviewImage1 = ReviewImage(
        review_id = "13",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/6MAS5K4Bo4mJeu2dEKc-SQ/o.jpg"
    )
    PerSeReviewImage2 = ReviewImage(
        review_id = "13",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/I-Sv_w4jLLA6_KtM6ylp0w/o.jpg"
    )
    PerSeReviewImage3 = ReviewImage(
        review_id = "14",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/YsPrAM1rqgqV8B5b0-oX1g/o.jpg"
    )
    PerSeReviewImage4 = ReviewImage(
        review_id = "14",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/g7Z9JxlRSHQZ3h8ER1ca4A/o.jpg"
    )
    PerSeReviewImage5 = ReviewImage(
        review_id = "15",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/hGqa6Y3B5WZ6Nox6vS3zCg/o.jpg"
    )

    ChefTableReviewImage1 = ReviewImage(
        review_id = "16",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/aYXXNWaSyP8temktj1MvXA/o.jpg"
    )
    ChefTableReviewImage2 = ReviewImage(
        review_id = "17",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/Oxf6KlzovU1TktErryYD5A/o.jpg"
    )
    ChefTableReviewImage3 = ReviewImage(
        review_id = "18",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/4bu-svqbaDe0R8koxuuF6g/o.jpg"
    )
    ChefTableReviewImage4 = ReviewImage(
        review_id = "18",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/b4ywF5ATf-n60co52d6imw/o.jpg"
    )
    ChefTableReviewImage5 = ReviewImage(
        review_id = "19",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/G1AEGgrnOGH4lgWanZYZuA/o.jpg"
    )

    TheModernReviewImage1 = ReviewImage(
        review_id = "19",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/JJQmh-MzcGCcaHsCIoaCJw/o.jpg"
    )
    TheModernReviewImage2 = ReviewImage(
        review_id = "19",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/Tnt4JT48wHJu1aDYzcCFQw/o.jpg"
    )
    TheModernReviewImage3 = ReviewImage(
        review_id = "19",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/rbEprPKH9E_cQy-_wzF5Bw/o.jpg"
    )
    TheModernReviewImage4 = ReviewImage(
        review_id = "19",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/EVHdzX8cbw-PEJMP8-e3Vg/o.jpg"
    )
    TheModernReviewImage5 = ReviewImage(
        review_id = "19",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/_tYmxQWVrtWOGutllQLNwg/o.jpg"
    )

    AtomixReviewImage1 = ReviewImage(
        review_id = "21",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/oa19-sVxW7nLthQbVqc-PA/o.jpg"
    )
    AtomixReviewImage2 = ReviewImage(
        review_id = "21",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/qulbIR7hK16d1BQpfs0N5g/o.jpg"
    )
    AtomixReviewImage3 = ReviewImage(
        review_id = "21",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/oHv4B3LZ8EXsnPp2AHvzzQ/o.jpg"
    )
    AtomixReviewImage4 = ReviewImage(
        review_id = "22",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/8UaLqK2e_VmpzydoQS2O3g/o.jpg"
    )
    AtomixReviewImage5 = ReviewImage(
        review_id = "22",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/Am3KL75ofmmDxgQX1Vl6Gg/o.jpg"
    )

    DonAngieReviewImage1 = ReviewImage(
        review_id = "23",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/hoUegiqX3aYwtrCHBnlQWA/o.jpg"
    )
    DonAngieReviewImage2 = ReviewImage(
        review_id = "23",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/6_yA5WYPAfQ93vATj8D0Sw/o.jpg"
    )
    DonAngieReviewImage3 = ReviewImage(
        review_id = "23",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/BRtRy7Jmy5nlpfvPDThOwQ/o.jpg"
    )
    DonAngieReviewImage4 = ReviewImage(
        review_id = "23",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/UYr0eqgHR1CPEEfXVvNBQA/o.jpg"
    )
    DonAngieReviewImage5 = ReviewImage(
        review_id = "23",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/eEOrnDm6xft5URFENtC2Yg/o.jpg"
    )

    JejuNoodleBarImage1 = ReviewImage(
        review_id = "24",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/VQ4w7eeS8Dr_B5KVoHHqmg/o.jpg"
    )
    JejuNoodleBarImage2 = ReviewImage(
        review_id = "24",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/9diAlFTyIXYeAfFSumMV9Q/o.jpg"
    )
    JejuNoodleBarImage3 = ReviewImage(
        review_id = "24",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/8b_M2nubtByCsOy5xCZosQ/o.jpg"
    )
    JejuNoodleBarImage4 = ReviewImage(
        review_id = "24",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/EQVcYzwvVoXvWh3ttbLM4w/o.jpg"
    )
    JejuNoodleBarImage5 = ReviewImage(
        review_id = "24",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/mixH3VoFaxPUDARbYWlGOA/o.jpg"
    )

    MusketRoomImage1 = ReviewImage(
        review_id = "25",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/YkSsKTKv5XlyQWtQoN-W7Q/o.jpg"
    )
    MusketRoomImage2 = ReviewImage(
        review_id = "25",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/SR9oqsx0IsYEWdJszT5bOA/o.jpg"
    )
    MusketRoomImage3 = ReviewImage(
        review_id = "25",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/I3-lqdNuLJrJuwvPGZ0nPw/o.jpg"
    )
    MusketRoomImage4 = ReviewImage(
        review_id = "25",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/z1fu2uz6UKr19ZCdMZINpg/o.jpg"
    )
    MusketRoomImage5 = ReviewImage(
        review_id = "25",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/9dTXAW42ZZadg2Xl65VBWQ/o.jpg"
    )

    db.session.add(MasaReviewImage1)
    db.session.add(MasaReviewImage2)
    db.session.add(MasaReviewImage3)
    db.session.add(MasaReviewImage4)
    db.session.add(MasaReviewImage5)
    db.session.add(LeBernardinReviewImage1)
    db.session.add(LeBernardinReviewImage2)
    db.session.add(LeBernardinReviewImage3)
    db.session.add(LeBernardinReviewImage4)
    db.session.add(LeBernardinReviewImage5)
    db.session.add(ElevenMadisonParkReviewImage1)
    db.session.add(ElevenMadisonParkReviewImage2)
    db.session.add(ElevenMadisonParkReviewImage3)
    db.session.add(ElevenMadisonParkReviewImage4)
    db.session.add(ElevenMadisonParkReviewImage5)
    db.session.add(PerSeReviewImage1)
    db.session.add(PerSeReviewImage2)
    db.session.add(PerSeReviewImage3)
    db.session.add(PerSeReviewImage4)
    db.session.add(PerSeReviewImage5)
    db.session.add(ChefTableReviewImage1)
    db.session.add(ChefTableReviewImage2)
    db.session.add(ChefTableReviewImage3)
    db.session.add(ChefTableReviewImage4)
    db.session.add(ChefTableReviewImage5)
    db.session.add(TheModernReviewImage1)
    db.session.add(TheModernReviewImage2)
    db.session.add(TheModernReviewImage3)
    db.session.add(TheModernReviewImage4)
    db.session.add(TheModernReviewImage5)
    db.session.add(AtomixReviewImage1)
    db.session.add(AtomixReviewImage2)
    db.session.add(AtomixReviewImage3)
    db.session.add(AtomixReviewImage4)
    db.session.add(AtomixReviewImage5)
    db.session.add(DonAngieReviewImage1)
    db.session.add(DonAngieReviewImage2)
    db.session.add(DonAngieReviewImage3)
    db.session.add(DonAngieReviewImage4)
    db.session.add(DonAngieReviewImage5)
    db.session.add(JejuNoodleBarImage1)
    db.session.add(JejuNoodleBarImage2)
    db.session.add(JejuNoodleBarImage3)
    db.session.add(JejuNoodleBarImage4)
    db.session.add(JejuNoodleBarImage5)
    db.session.add(MusketRoomImage1)
    db.session.add(MusketRoomImage2)
    db.session.add(MusketRoomImage3)
    db.session.add(MusketRoomImage4)
    db.session.add(MusketRoomImage5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the review_images table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_review_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.review_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM review_images")

    db.session.commit()
