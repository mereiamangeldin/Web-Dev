from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import *
from django.http.response import JsonResponse


def home(request):
    return HttpResponse('Hello, world!')


def product_list(request):
    products = Product.objects.all()
    products = [i.to_json() for i in products]
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(product.to_json(), safe=False)


def category_list(request):
    categories = Category.objects.all()
    categories = [i.to_json() for i in categories]
    return JsonResponse(categories, safe=False)


def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(category.to_json(), safe=False)


def category_products(request, category_id):
    products = Product.objects.filter(category__id=category_id)
    products = [i.to_json() for i in products]
    return JsonResponse(products, safe=False)
