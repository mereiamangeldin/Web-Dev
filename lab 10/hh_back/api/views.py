import http
import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.
@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=http.HTTPStatus.BAD_REQUEST)

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=http.HTTPStatus.BAD_REQUEST)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'Company is successfully deleted'})


def company_vacancy_list(request, company_id):
    vacancies = Vacancy.objects.filter(company__id=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=http.HTTPStatus.BAD_REQUEST)

@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=http.HTTPStatus.BAD_REQUEST)
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy is successfully deleted'})


def vacancy_list_top10(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
