from django.contrib import admin

# Register your models here.

from django.contrib import admin
from api.models import *

admin.site.register(Product)
admin.site.register(Category)
