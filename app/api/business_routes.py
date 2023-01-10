from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import Business, BusinessImage, Review, User, db, Image
from app.forms import BusinessForm, ReviewForm, BusinessImageForm
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

business_routes = Blueprint('business', __name__)

"""
Query for all businesses owned by current user and returns them in a dictionary
"""
@business_routes.route('/my-listings')
@login_required
def my_listings():
    curr_user = current_user.id
    businesses = Business.query.filter_by(
        user_id = int(curr_user)
    )

    businesses_dict = {}

    for business in businesses:
        businesses_dict[business.to_dict()["id"]] = business.to_dict()

    return businesses_dict



"""
Post a new business
"""
@business_routes.route('', methods=["POST"])
@login_required
def create_new_business():
    curr_user = current_user.id
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        # print("DATADATADATADATADATADATADATADATADATADATADATADATADATADATADATA", data)
        # print("OPTIMEOPTIMEOPTIMEOPTIMEOPTIMEOPTIMEOPTIMEOPTIMEOPTIMEOPTIME", data["operating_time"])

        new_business = Business(
            user_id = int(curr_user),
            business_name = data["business_name"],
            address = data["address"],
            city = data["city"],
            state = data["state"],
            postal_code = data["postal_code"],
            lat = data["lat"],
            lng = data["lng"],
            phone_number = data["phone_number"],
            web_address = data["web_address"],
            operating_time = data["operating_time"],
            business_type = data["business_type"],
            price = data["price"]
        )
        db.session.add(new_business)
        db.session.commit()
        return new_business.to_dict()
    return {"errors":validation_errors_to_error_messages(form.errors)}, 401



"""
Query for all businesses and returns them in a dictionary
"""
@business_routes.route('')
def all_businesses():
    businesses = Business.query.all()
    businesses_dict = []

    for business in businesses:
        businesses_dict.append(business.to_dict())
        # print(business.preview_image())

    return {"businesses": businesses_dict}



"""
Edit an existing business owned by current user
"""
@business_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_business(id):
    curr_business = Business.query.get(id)
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # print("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", id)

    if form.validate_on_submit():
        data = form.data

        curr_business.business_name = data["business_name"]
        curr_business.address = data["address"]
        curr_business.city = data["city"]
        curr_business.state = data["state"]
        curr_business.postal_code = data["postal_code"]
        curr_business.lat = data["lat"]
        curr_business.lng = data["lng"]
        curr_business.phone_number = data["phone_number"]
        curr_business.web_address = data["web_address"]
        curr_business.operating_time = data["operating_time"]
        curr_business.business_type = data["business_type"]
        curr_business.price = data["price"]

        db.session.commit()
        return curr_business.to_dict()
    # print("66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666", form.errors)
    return {"errors":validation_errors_to_error_messages(form.errors)}, 401



"""
Delete an existing business owned by current user
"""
@business_routes.route('/<int:id>', methods=["DELETE"])
def delete_business(id):
    curr_business = Business.query.get(id)
    db.session.delete(curr_business)
    db.session.commit()
    return dict(message="Business successfully deleted")



"""
Query for business by business id
"""
@business_routes.route('/<int:bizId>')
def current_business(bizId):
    curr_business = Business.query.get(bizId)

    return curr_business.to_dict()



"""
Query for all business images and returns them in a dictionary
"""
@business_routes.route('/images')
def all_business_images():
    business_images = BusinessImage.query.all()
    business_images_dict = {}

    for business_image in business_images:
        business_images_dict[business_image.to_dict()["id"]] = business_image.to_dict()

    return business_images_dict



"""
Post a new Review
"""
@business_routes.route('/<int:id>/reviews', methods=["POST"])
@login_required
def create_new_review(id):
    curr_user = current_user.id
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data

        new_review = Review(
            user_id = int(curr_user),
            business_id = int(id),
            review_content = data["review_content"],
            stars = data["stars"],
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {"errors":validation_errors_to_error_messages(form.errors)}, 401


"""
Query for all reviews for current biz and returns them in a dictionary
"""
@business_routes.route('/<int:id>/reviews/currBiz')
def curr_biz_reviews(id):
    reviews = Review.query.filter_by(
        business_id = id
    )

    reviews_dict = {}

    for review in reviews:
        # reviews_dict["author"] = author
        author = review.user.to_dict()
        review_images = review.reviewimages

        images = {}
        for image in review_images:
            image_dict = image.to_dict()
            images[image.to_dict()["id"]] = image_dict["url"]

        # print("review route: get biz images", images)

        res_review = review.to_dict()
        res_review["author"] = author
        res_review["reviewImages"] = images
        reviews_dict[review.to_dict()["id"]] = res_review

    return reviews_dict



"""
Post a new business images
"""
# @business_routes.route('/<int:id>/images', methods=["POST"])
# @login_required
# def create_new_business_images(id):
#     form = BusinessImageForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         data = form.data

#         new_business_images = BusinessImage(
#             business_id = id,
#             url = data["url"],
#             preview = data["preview"],
#         )
#         db.session.add(new_business_images)
#         db.session.commit()
#         return new_business_images.to_dict()
#     # print("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", form.errors)
#     return {"errors":validation_errors_to_error_messages(form.errors)}, 401

@business_routes.route('/<int:bizId>/images', methods=["POST"])
@login_required
def upload_image(bizId):
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)
    # print("UPLOADDDDDDDDDDDDDDDDDDDDDDDDDDDD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", upload)

    if "url" not in upload:
        print("upload",  upload)
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = BusinessImage(url=url, business_id=bizId, preview=True)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}

@business_routes.route('/<int:bizId>/images')
def get_all_images(bizId):
    images = BusinessImage.query.filter_by(business_id = bizId).all()
    # print("@@@@@@@@@@@@@@@@@@@", images)
    return {"images": [image.to_dict() for image in images]}
