from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import Business, BusinessImage, db
from app.forms import BusinessForm, BusinessImageForm

business_routes = Blueprint('business', __name__)



"""
Query for all businesses and returns them in a dictionary
"""
@business_routes.route('')
def all_businesses():
    businesses = Business.query.all()
    businesses_dict = {}

    for business in businesses:
        businesses_dict[business.to_dict()["id"]] = business.to_dict()

    return businesses_dict



"""
Query for business by business id
"""
@business_routes.route('/<int:id>')
def current_business():
    curr_business = Business.query.get(id)

    return curr_business.to_dict()



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

        new_business = BusinessForm(
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
            price = data["price"],
        )
        db.session.add(new_business)
        db.session.commit()
        return new_business.to_dict()



"""
Edit an existing business owned by current user
"""
@business_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_business(id):
    data = request.get_json()
    curr_business = Business.query.get(id)

    curr_business.business_name = data["business_name"],
    curr_business.address = data["address"],
    curr_business.city = data["city"],
    curr_business.state = data["state"],
    curr_business.postal_code = data["postal_code"],
    curr_business.lat = data["lat"],
    curr_business.lng = data["lng"],
    curr_business.phone_number = data["phone_number"],
    curr_business.web_address = data["web_address"],
    curr_business.operating_time = data["operating_time"],
    curr_business.business_type = data["business_type"],
    curr_business.price = data["price"],

    db.session.commit()
    return curr_business.to_dict()



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
Query for climbing
"""
@business_routes.route('/images')
def climbing_business():
    business_images = BusinessImage.query.all()
    business_images_dict = {}

    for business_image in business_images:
        business_images_dict[business_image.to_dict()["id"]] = business_image.to_dict()

    return business_images_dict




"""
Query for top rated
"""
@business_routes.route('/images')
def top_rated_business():
    business_images = BusinessImage.query.all()
    business_images_dict = {}

    for business_image in business_images:
        business_images_dict[business_image.to_dict()["id"]] = business_image.to_dict()

    return business_images_dict



"""
Query for new
"""
@business_routes.route('/images')
def new_business():
    business_images = BusinessImage.query.all()
    business_images_dict = {}

    for business_image in business_images:
        business_images_dict[business_image.to_dict()["id"]] = business_image.to_dict()

    return business_images_dict
