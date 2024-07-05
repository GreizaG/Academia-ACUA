"""empty message

Revision ID: e782c2b2ac85
Revises: 
Create Date: 2024-07-03 19:43:19.756660

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e782c2b2ac85'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('administrator',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('last_name', sa.String(length=50), nullable=True),
    sa.Column('cardID_type', sa.String(length=50), nullable=True),
    sa.Column('number_cardID', sa.String(length=20), nullable=True),
    sa.Column('birthday', sa.Date(), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('phone_number', sa.BigInteger(), nullable=True),
    sa.Column('province', sa.String(length=50), nullable=True),
    sa.Column('canton', sa.String(length=50), nullable=True),
    sa.Column('distric', sa.String(length=50), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('user_type', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('number_cardID')
    )
    op.create_table('contactform',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body_text', sa.String(length=300), nullable=True),
    sa.Column('body_name', sa.String(length=30), nullable=True),
    sa.Column('body_email', sa.String(length=30), nullable=True),
    sa.Column('body_requeriment', sa.String(length=30), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('course',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('professor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('last_name', sa.String(length=50), nullable=True),
    sa.Column('cardID_type', sa.String(length=50), nullable=True),
    sa.Column('number_cardID', sa.String(length=20), nullable=True),
    sa.Column('birthday', sa.Date(), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('phone_number', sa.BigInteger(), nullable=True),
    sa.Column('province', sa.String(length=50), nullable=True),
    sa.Column('canton', sa.String(length=50), nullable=True),
    sa.Column('distric', sa.String(length=50), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('user_type', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('number_cardID')
    )
    op.create_table('student',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('last_name', sa.String(length=50), nullable=True),
    sa.Column('cardID_type', sa.String(length=50), nullable=True),
    sa.Column('number_cardID', sa.String(length=20), nullable=True),
    sa.Column('birthday', sa.Date(), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('phone_number', sa.BigInteger(), nullable=True),
    sa.Column('province', sa.String(length=50), nullable=True),
    sa.Column('canton', sa.String(length=50), nullable=True),
    sa.Column('distric', sa.String(length=50), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('user_type', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('number_cardID')
    )
    op.create_table('electronic_invoice',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('cardID_type', sa.String(length=50), nullable=True),
    sa.Column('number_cardID', sa.BigInteger(), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('phone_number', sa.BigInteger(), nullable=True),
    sa.Column('province', sa.String(length=50), nullable=True),
    sa.Column('canton', sa.String(length=50), nullable=True),
    sa.Column('distric', sa.String(length=50), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('number_cardID')
    )
    op.create_table('new_course',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('professor_id', sa.Integer(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('course_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['course.id'], ),
    sa.ForeignKeyConstraint(['professor_id'], ['professor.id'], ),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('professor_payment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('payment_method', sa.String(length=50), nullable=True),
    sa.Column('phone_number', sa.BigInteger(), nullable=True),
    sa.Column('iban_account', sa.String(length=50), nullable=True),
    sa.Column('professor_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['professor_id'], ['professor.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('iban_account')
    )
    op.create_table('student_payment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=True),
    sa.Column('mount', sa.Integer(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('student_payment')
    op.drop_table('professor_payment')
    op.drop_table('new_course')
    op.drop_table('electronic_invoice')
    op.drop_table('student')
    op.drop_table('professor')
    op.drop_table('course')
    op.drop_table('contactform')
    op.drop_table('administrator')
    # ### end Alembic commands ###
