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


class BusinessForm(FlaskForm):
    business_name = StringField(
        "business_name", validators=[DataRequired(), Length(min=1, max=100, message='Business name must be between 1 and 100 characters.'), business_exists])
    address = StringField("address", validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired(), Regexp(regex='^[A-Za-z]$', message="City must be alphabetical letters.")])
    state = StringField('state', validators=[DataRequired(), Length(min=2, max=2, message='State must be 2 alphabetical letters.'), Regexp(regex='^[A-Za-z]$')])
    postal_code = StringField(
        'postal_code', validators=[DataRequired(), Length(min=5, max=5, message='ZIP code must be 5 digits.'), Regexp(regex='^[0-9]$')])
    lat = FloatField('lat')
    lng = FloatField('lng')
    phone_number = StringField(
        'phone_number', validators=[DataRequired(), Length(min=10, max=10, message='Phone number must be 10 digits.'), Regexp(regex='^[0-9]$')])
    web_address = StringField(
        'web_address', validators=[DataRequired(), Email(message='The web address you entered is invalid. Please try again.')])
    menu_web_address = StringField(
        'menu_web_address', validators=[DataRequired(), Email(message='The web address you entered is invalid. Please try again.')])
    operating_time = StringField('operating_time', validators=[DataRequired()])
    business_type = StringField('business_type', validators=[DataRequired()])
    price = IntegerField(
        'price', validators=[DataRequired(), NumberRange(min=1, max=4, message='Price must be between 1 to 4.')])
    submit = SubmitField("submit")
