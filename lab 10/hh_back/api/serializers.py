from rest_framework import serializers
from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=False)
    city = serializers.CharField(required=False)
    address = serializers.CharField(required=False)
    description = serializers.CharField(required=False)



    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'
        extra_kwargs = {'company': {'required': False}, 'name': {'required': False},
                        'description': {'required': False}, 'salary': {'required': False}}

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.save()
        return instance
