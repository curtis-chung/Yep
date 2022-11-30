from app.models import db, environment, SCHEMA
"""create tables

Revision ID: 2caa51ea253f
Revises:
Create Date: 2022-11-27 01:38:35.013450

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2caa51ea253f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=False),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    op.create_table('businesses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('business_name', sa.String(length=255), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('state', sa.String(length=2), nullable=False),
    sa.Column('postal_code', sa.String(length=255), nullable=False),
    sa.Column('lat', sa.Float(), nullable=True),
    sa.Column('lng', sa.Float(), nullable=True),
    sa.Column('phone_number', sa.String(length=255), nullable=False),
    sa.Column('web_address', sa.String(length=2000), nullable=True),
    sa.Column('menu_web_address', sa.String(length=2000), nullable=True),
    sa.Column('operating_time', sa.String(length=255), nullable=False),
    sa.Column('business_type', sa.String(length=255), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('business_name'),
    sa.UniqueConstraint('menu_web_address'),
    sa.UniqueConstraint('phone_number'),
    sa.UniqueConstraint('web_address')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE businesses SET SCHEMA {SCHEMA};")
    op.create_table('business_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=2000), nullable=False),
    sa.Column('preview', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE business_images SET SCHEMA {SCHEMA};")
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('review_content', sa.String(length=2000), nullable=False),
    sa.Column('stars', sa.Float(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE reviews SET SCHEMA {SCHEMA};")
    op.create_table('review_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=2000), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['review_id'], ['reviews.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE review_images SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('review_images')
    op.drop_table('reviews')
    op.drop_table('business_images')
    op.drop_table('businesses')
    op.drop_table('users')
    # ### end Alembic commands ###
