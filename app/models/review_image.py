from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class ReviewImage(db.Model):
    __tablename__ = 'review_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")), nullable=False)
    url = db.Column(db.String(255), nullable=False, unique=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    # relationship attributes
    review = db.relationship("Review", back_populates="reviewimages")



    def to_dict(self):
        return {
            'id': self.id,
            'review_id': self.review_id,
            'url': self.url,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
