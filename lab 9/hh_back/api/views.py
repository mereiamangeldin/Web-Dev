from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy


# Create your views here.

def company_list(request):
    companies = Company.objects.all()
    products = [i.to_json() for i in companies]
    return JsonResponse(products, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json())


def company_vacancy_list(request, company_id):
    vacancies = Vacancy.objects.filter(company__id=company_id)
    vacancies = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    products = [i.to_json() for i in vacancies]
    return JsonResponse(products, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())


def vacancy_list_top10(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies, safe=False)
