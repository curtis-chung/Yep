from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, BooleanField, IntegerField, TextAreaField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange, Regexp
from app.models import Business


def business_exists(form, field):
    # Checking if business exists
    name = field.data
    business = Business.query.filter(Business.business_name == name).first()
    if business:
        raise ValidationError('Business already exist.')



v = [DataRequired()]

class BusinessForm(FlaskForm):
    business_name = StringField(
        "business_name", validators=[DataRequired('Please enter your Business name.'), Length(min=1, max=100, message='Your business name cannot be greater than 100 characters.')])
    address = StringField("address", v)
    city = StringField('city', validators=[DataRequired(), Regexp(regex='^[A-Za-z]$')])
    state = StringField('state', validators=[DataRequired(), Length(min=2, max=2, message='The state you entered is invalid.'), Regexp(regex='^[A-Za-z]$')])
    postal_code = StringField(
        'postal_code', validators=[DataRequired(), Length(min=5, max=5, message='The ZIP code you entered is invalid.'), Regexp(regex='^[0-9]$')])
    lat = FloatField('lat')
    lng = FloatField('lng')
    phone_number = StringField(
        'phone_number', validators=[DataRequired(), Length(min=10, max=10, message='The phone number you entered is invalid. Did you include the area code?'), Regexp(regex='^[+-]?[0-9]$')])
    web_address = StringField(
        'web_address', validators=[DataRequired(), Email(message='The web address you entered is invalid. Please try again.')])
    menu_web_address = StringField(
        'menu_web_address', validators=[DataRequired(), Email(message='The web address you entered is invalid. Please try again.')])
    operating_time = StringField('operating_time', v)
    business_type = StringField(
        'business_type', validators=[NumberRange(min=1, max=4, message='The categories entered are invalid.')])
    price = IntegerField(
        'price', validators=[NumberRange(min=1, max=4, message='Price must be between 1 to 4.')])
    submit = SubmitField("submit")
