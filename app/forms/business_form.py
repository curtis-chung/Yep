from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, BooleanField, IntegerField, TextAreaField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange, Regexp
from app.models import Business


# def business_exists(form, field):
#     # Checking if business exists
#     name = field.data
#     business = Business.query.filter(Business.business_name == name).first()
#     if business:
#         raise ValidationError('Business already exist.')

def url_valid(form, field):
    web_address = field.data
    if not ".com" in web_address:
        raise ValidationError("Please enter a valid web address.")


class BusinessForm(FlaskForm):
    business_name = StringField(
        "business_name", validators=[DataRequired(), Length(min=1, max=50, message='Business name must be between 1 and 50 characters.')])
    address = StringField("address", validators=[DataRequired(), Length(min=1, max=40, message='Address must be between 1 and 40 characters.')])
    city = StringField('city', validators=[DataRequired(), Length(min=1, max=20, message='City name must be between 1 and 20 characters.')])
    state = StringField('state', validators=[DataRequired(), Length(min=2, max=2, message='State must be 2 characters.')])
    postal_code = StringField(
        'postal_code', validators=[DataRequired(), Length(min=5, max=5, message='ZIP code must be 5 digits.')])
    lat = FloatField('lat')
    lng = FloatField('lng')
    phone_number = StringField(
        'phone_number', validators=[DataRequired(), Length(min=10, max=10, message='Phone number must be 10 digits.')])
    web_address = StringField(
        'web_address', validators=[DataRequired(), url_valid])
        # validators=[DataRequired(message='The web address you entered is invalid. Please try again.')]
    menu_web_address = StringField(
        'menu_web_address')
    operating_time = StringField('operating_time', validators=[DataRequired()])
    business_type = StringField('business_type', validators=[DataRequired(), Length(min=1, max=20, message='Business type must be between 1 and 20 characters.')])
    price = IntegerField(
        'price', validators=[DataRequired(), NumberRange(min=1, max=4, message='Price must be between 1 to 4.')])
    submit = SubmitField("submit")
