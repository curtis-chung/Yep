from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, BooleanField, IntegerField, TextAreaField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, Length, NumberRange, Regexp
from app.models import Business



v = [DataRequired()]

class ReviewForm(FlaskForm):
    review_content = StringField(
        "review_content", validators=[DataRequired('To submit your review, please explain your ratings to others.'), Length(min=1, max=2000, message='Review must be between 1 and 255 characters.')])
    stars = IntegerField(
        'stars', validators=[DataRequired('To submit your review, please select a star rating for this business.'), NumberRange(min=1, max=5, message='Rating must be between 1 and 5 stars.')])
    submit = SubmitField("submit")
