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
    review_content = StringField(
        "review_content", validators=[DataRequired('To submit your review, please explain your ratings to others.'), Length(min=1, max=255, message='Review must be between 1 and 255 characters.')])
    stars = IntegerField(
        'stars', validators=[DataRequired('To submit your review, please select a star rating for this business.'), NumberRange(min=1, max=5, message='Rating must be between 1 and 5 stars.')])
    submit = SubmitField("submit")
