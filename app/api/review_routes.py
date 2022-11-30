from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint('review', __name__)



"""
Query for all reviews and returns them in a dictionary
"""
@review_routes.route('')
def all_reviews():
    reviews = Review.query.all()
    reviews_dict = {}

    for review in reviews:
        reviews_dict[review.to_dict()["id"]] = review.to_dict()

    return reviews_dict



"""
Query for all reviews owned by current user and returns them in a dictionary
"""
@review_routes.route('/my-reviews')
@login_required
def my_reviews():
    curr_user = current_user.id
    reviews = Review.query.filter_by(
        user_id = int(curr_user)
    )

    reviews_dict = {}

    for review in reviews:
        reviews_dict[review.to_dict()["id"]] = review.to_dict()

    return reviews_dict



"""
Edit an existing Review owned by current user
"""
@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_review(id):
    data = request.get_json()
    curr_review = Review.query.get(id)

    curr_review.review_content = data["review_content"],
    curr_review.stars = data["stars"],

    db.session.commit()
    return curr_review.to_dict()



"""
Delete an existing Review owned by current user
"""
@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_Review(id):
    curr_review = Review.query.get(id)
    db.session.delete(curr_review)
    db.session.commit()
    return dict(message="Review successfully deleted")
