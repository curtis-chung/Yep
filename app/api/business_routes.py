from flask import Blueprint, jsonify, redirect, request
from flask_login import current_user, login_required
from app.models import Business, db
from app.forms import BusinessForm

business_routes = Blueprint('business', __name__)



"""
Query for all businesses
"""
@business_routes.route('')
def all_businesses():
    """
    Query for all transactions and returns them in a list of transaction dictionaries
    """
    businesses = Business.query.all()
    businesses_dict = {}

    for business in businesses:
        businesses_dict[business.to_dict()["id"]] = business.to_dict()

    return businesses_dict
