from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Business(db.Model):
    __tablename__ = 'businesses'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    # review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")), nullable=True)
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
    reviews = db.relationship("Review", back_populates="businesses")



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            # 'review_id': self.review_id,
            'business_name': self.business_name,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'postal_code': self.zip,
            'lat': self.lat,
            'lng': self.lng,
            'phone_number': self.phone_number,
            'web_address': self.web_address,
            'menu_web_address': self.menu_web_address,
            'operating_time': self.operating_time,
            'business_type': self.business_type,
            'price': self.price,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
