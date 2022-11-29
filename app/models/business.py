from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Business(db.Model):
    __tablename__ = 'businesses'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    business_name = db.Column(db.String(255), nullable=False, unique=True)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    postal_code = db.Column(db.String(255), nullable=False)
    lat = db.Column(db.Float, nullable=True)
    lng = db.Column(db.Float, nullable=True)
    phone_number = db.Column(db.String(255), nullable=False, unique=True)
    web_address = db.Column(db.String(255), nullable=True, unique=True)
    menu_web_address = db.Column(db.String(255), nullable=True, unique=True)
    operating_time = db.Column(db.String(255), nullable=False)
    business_type = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    # relationship attributes
    user = db.relationship("User", back_populates="businesses")
    reviews = db.relationship("Review", cascade="all, delete", back_populates="businesses")
    businessimages = db.relationship("BusinessImage", cascade="all, delete", back_populates="businesses")

    def avg_rating(self):
        if (self.reviews):
            reviews_to_dict = round(sum([review.stars for review in self.reviews]) / len(self.reviews), 2)
            return reviews_to_dict
        else:
            return 0

    def business_images(self):
        if (self.businessimages):
            image_to_dict = [image.url for image in self.businessimages]
            print(image_to_dict)
            return image_to_dict
        else:
            return 0

    def num_reviews(self):
        if (self.reviews):
            return len(self.reviews)
        else:
            return 0

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            # 'review_id': self.review_id,
            'business_name': self.business_name,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'postal_code': self.postal_code,
            'lat': self.lat,
            'lng': self.lng,
            'phone_number': self.phone_number,
            'web_address': self.web_address,
            'menu_web_address': self.menu_web_address,
            'operating_time': self.operating_time,
            'business_type': self.business_type,
            'price': self.price,
            'avg_rating': self.avg_rating(),
            'prev_image': self.business_images(),
            'num_reviews': self.num_reviews(),
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
