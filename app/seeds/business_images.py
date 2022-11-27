from app.models import db, BusinessImage, environment, SCHEMA


def seed_business_images():
    MasaBusinessImage1 = BusinessImage(
        business_id = "1",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/02vP2X2dAziFukNmxrlSOQ/o.jpg",
        preview = False
    )
    MasaBusinessImage2 = BusinessImage(
        business_id = "1",
        url = "https://s3-media0.fl.yelpcdn.com/bphoto/uzllSeSbeUcJuaClbdEsfw/o.jpg",
        preview = False
    )
    MasaBusinessImage3 = BusinessImage(
        business_id = "1",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/134746190cbc4d3dae03d03d2588f48c?width=1000",
        preview = True
    )
    MasaBusinessImage4 = BusinessImage(
        business_id = "1",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/3d33cf16cfe14adb801dd13fe455c00a?width=1000",
        preview = False
    )
    MasaBusinessImage5 = BusinessImage(
        business_id = "1",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/958287c2c2184b42b3d39718639dff2e?width=1000",
        preview = False
    )

    LeBernardinBusinessImage1 = BusinessImage(
        business_id = "2",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/0d1cd770a519459faa94f5919e845018?width=1000",
        preview = True
    )
    LeBernardinBusinessImage2 = BusinessImage(
        business_id = "2",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/528fc2e3a47b46a29bcdc22fa59a186d?width=1000",
        preview = False
    )
    LeBernardinBusinessImage3 = BusinessImage(
        business_id = "2",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/7dcd70d8dc644a129d7cededd5744eca?width=1000",
        preview = False
    )
    LeBernardinBusinessImage4 = BusinessImage(
        business_id = "2",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/ac76bc3db4374e3c8ff10c7be7b69874?width=1000",
        preview = False
    )
    LeBernardinBusinessImage5 = BusinessImage(
        business_id = "2",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/1952ee901afe4ef9a494f68461192d25?width=1000",
        preview = False
    )

    ElevenMadisonParkBusinessImage1 = BusinessImage(
        business_id = "3",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/9fc13922bf68472f83eda38e1adcc92e?width=1000",
        preview = True
    )
    ElevenMadisonParkBusinessImage2 = BusinessImage(
        business_id = "3",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/ac6e7ab1c0214fbb95d7764778a744f2?width=1000",
        preview = False
    )
    ElevenMadisonParkBusinessImage3 = BusinessImage(
        business_id = "3",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/c929c38deddb4c34a5ee7ebf6d797de8?width=1000",
        preview = False
    )
    ElevenMadisonParkBusinessImage4 = BusinessImage(
        business_id = "3",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a0901d731ef84cb09280114531406b77?width=1000",
        preview = False
    )
    ElevenMadisonParkBusinessImage5 = BusinessImage(
        business_id = "3",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a51a75e128444ebb9320bf1c83ff64bf?width=1000",
        preview = False
    )

    PerSeBusinessImage1 = BusinessImage(
        business_id = "4",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/747fc51503b24b12b8741c3170cdcd18?width=1000",
        preview = True
    )
    PerSeBusinessImage2 = BusinessImage(
        business_id = "4",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5d3f7397a7194f9db45093cd4e6f9c5b?width=1000",
        preview = False
    )
    PerSeBusinessImage3 = BusinessImage(
        business_id = "4",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/d07bdb46eeaa418fa8a613ed275b0eb0?width=1000",
        preview = False
    )
    PerSeBusinessImage4 = BusinessImage(
        business_id = "4",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/c96fc0ce34144e2ba008606e5c65604e?width=1000",
        preview = False
    )
    PerSeBusinessImage5 = BusinessImage(
        business_id = "4",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/85f8583d57cb43c7a7536e01d2dc5548?width=1000",
        preview = False
    )

    ChefTableBusinessImage1 = BusinessImage(
        business_id = "5",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/eab4ff563ac94d3783ecb65e1280a39c?width=1000",
        preview = True
    )
    ChefTableBusinessImage2 = BusinessImage(
        business_id = "5",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/4f55ba966607458a9db9d9998f345726?width=1000",
        preview = False
    )
    ChefTableBusinessImage3 = BusinessImage(
        business_id = "5",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/d1687a7e694c4dc4b0aa92a675e2f368?width=1000",
        preview = False
    )
    ChefTableBusinessImage4 = BusinessImage(
        business_id = "5",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/82bf4573817544dda48e908e1a4b395f?width=1000",
        preview = False
    )
    ChefTableBusinessImage5 = BusinessImage(
        business_id = "5",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/34b01178076146f4986a9108e68bacfb?width=1000",
        preview = False
    )

    TheModernBusinessImage1 = BusinessImage(
        business_id = "6",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/4bca6aaaf9d4449cb5afddd235f65a63?width=1000",
        preview = True
    )
    TheModernBusinessImage2 = BusinessImage(
        business_id = "6",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/8f66450c93f448b98ff063dac39e684a?width=1000",
        preview = False
    )
    TheModernBusinessImage3 = BusinessImage(
        business_id = "6",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/e15182f28fbb475d8bcb2348bb25fd4c?width=1000",
        preview = False
    )
    TheModernBusinessImage4 = BusinessImage(
        business_id = "6",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/b5ad958b2dcb4674a2ddd1166969b56f?width=1000",
        preview = False
    )
    TheModernBusinessImage5 = BusinessImage(
        business_id = "6",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/2997aa1833db48369d1e2828ac656947?width=1000",
        preview = False
    )

    AtomixBusinessImage1 = BusinessImage(
        business_id = "7",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/fb589fab0f914a81ba0302d855fae6ed?width=1000",
        preview = True
    )
    AtomixBusinessImage2 = BusinessImage(
        business_id = "7",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/6ea2ebe9fee0418d9337fd7b953db8e2?width=1000",
        preview = False
    )
    AtomixBusinessImage3 = BusinessImage(
        business_id = "7",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/28b9eb11bde64c7ea6517d27bfcc7b3c?width=1000",
        preview = False
    )
    AtomixBusinessImage4 = BusinessImage(
        business_id = "7",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/6a844cb620c74ef191645a2f47709302?width=1000",
        preview = False
    )
    AtomixBusinessImage5 = BusinessImage(
        business_id = "7",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/4a4a43d07a49417c93c56e850930bdf3?width=1000",
        preview = False
    )

    DonAngieBusinessImage1 = BusinessImage(
        business_id = "8",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a2221ad0d3e74554bbbf5c76b8d0da37?width=1000",
        preview = True
    )
    DonAngieBusinessImage2 = BusinessImage(
        business_id = "8",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/55caf339b74a46bdb52cce5f93cee617?width=1000",
        preview = False
    )
    DonAngieBusinessImage3 = BusinessImage(
        business_id = "8",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a65555a36f334782a58409ebbcc72fd5?width=1000",
        preview = False
    )
    DonAngieBusinessImage4 = BusinessImage(
        business_id = "8",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/dc3b48715a61472eab00c5d19e948b51?width=1000",
        preview = False
    )
    DonAngieBusinessImage5 = BusinessImage(
        business_id = "8",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/4f4e0ca4f43a476bb12c73b07f98a943?width=1000",
        preview = False
    )

    JejuNoodleBarImage1 = BusinessImage(
        business_id = "9",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a366b194b2b446b6b135b0d54efaa907?width=1000",
        preview = True
    )
    JejuNoodleBarImage2 = BusinessImage(
        business_id = "9",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/b0d98f125326477eb5e7e958bdca2dfa?width=1000",
        preview = False
    )
    JejuNoodleBarImage3 = BusinessImage(
        business_id = "9",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/9546d2da957a4494811f7aa61363302b?width=1000",
        preview = False
    )
    JejuNoodleBarImage4 = BusinessImage(
        business_id = "9",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/b528436fd351415a99f2f3dd979930e0?width=1000",
        preview = False
    )
    JejuNoodleBarImage5 = BusinessImage(
        business_id = "9",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/890482c2868d4c9fafe12b0a3ca03c8e?width=1000",
        preview = False
    )

    MusketRoomImage1 = BusinessImage(
        business_id = "10",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/afaac5624b7f448cb212af6319438e6e?width=1000",
        preview = True
    )
    MusketRoomImage2 = BusinessImage(
        business_id = "10",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/7518a093da324356a088f077cabf8fbd?width=1000",
        preview = False
    )
    MusketRoomImage3 = BusinessImage(
        business_id = "10",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/c81a845798dc49f08227e9b8fb16e9f0?width=1000",
        preview = False
    )
    MusketRoomImage4 = BusinessImage(
        business_id = "10",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/47b26a7f35cd4d3da762c37143c640d3?width=1000",
        preview = False
    )
    MusketRoomImage5 = BusinessImage(
        business_id = "10",
        url = "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/c18e2138e1b242aa9b56f892d7a04fc0?width=1000",
        preview = False
    )

    db.session.add(MasaBusinessImage1)
    db.session.add(MasaBusinessImage2)
    db.session.add(MasaBusinessImage3)
    db.session.add(MasaBusinessImage4)
    db.session.add(MasaBusinessImage5)
    db.session.add(LeBernardinBusinessImage1)
    db.session.add(LeBernardinBusinessImage2)
    db.session.add(LeBernardinBusinessImage3)
    db.session.add(LeBernardinBusinessImage4)
    db.session.add(LeBernardinBusinessImage5)
    db.session.add(ElevenMadisonParkBusinessImage1)
    db.session.add(ElevenMadisonParkBusinessImage2)
    db.session.add(ElevenMadisonParkBusinessImage3)
    db.session.add(ElevenMadisonParkBusinessImage4)
    db.session.add(ElevenMadisonParkBusinessImage5)
    db.session.add(PerSeBusinessImage1)
    db.session.add(PerSeBusinessImage2)
    db.session.add(PerSeBusinessImage3)
    db.session.add(PerSeBusinessImage4)
    db.session.add(PerSeBusinessImage5)
    db.session.add(ChefTableBusinessImage1)
    db.session.add(ChefTableBusinessImage2)
    db.session.add(ChefTableBusinessImage3)
    db.session.add(ChefTableBusinessImage4)
    db.session.add(ChefTableBusinessImage5)
    db.session.add(TheModernBusinessImage1)
    db.session.add(TheModernBusinessImage2)
    db.session.add(TheModernBusinessImage3)
    db.session.add(TheModernBusinessImage4)
    db.session.add(TheModernBusinessImage5)
    db.session.add(AtomixBusinessImage1)
    db.session.add(AtomixBusinessImage2)
    db.session.add(AtomixBusinessImage3)
    db.session.add(AtomixBusinessImage4)
    db.session.add(AtomixBusinessImage5)
    db.session.add(DonAngieBusinessImage1)
    db.session.add(DonAngieBusinessImage2)
    db.session.add(DonAngieBusinessImage3)
    db.session.add(DonAngieBusinessImage4)
    db.session.add(DonAngieBusinessImage5)
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


# Uses a raw SQL query to TRUNCATE or DELETE the business_images table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_business_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.business_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM business_images")

    db.session.commit()
