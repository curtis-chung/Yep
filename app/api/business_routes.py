from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import Business, db
from app.forms import BusinessForm

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
Query for all businesses owned by current user and returns them in a dictionary
"""
@business_routes.route('/my-listings')
@login_required
def all_businesses():
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
def create_buy_transaction(symbol):
    curr_user = current_user.id
    # LookupSymbol = symbol.upper()

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data

        # insert data into UserTransactions model
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
