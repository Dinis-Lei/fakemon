from rest_framework import serializers
from .models import Fakemon

class FakemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fakemon
        fields = '__all__'