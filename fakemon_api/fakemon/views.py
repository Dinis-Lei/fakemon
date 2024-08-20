from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Fakemon
from .serializers import FakemonSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q

# Create your views here.

class FakemonView(APIView):
    """
        GET: Get a Fakemon by ID.
            Success status: 200 OK
            Error status: 404 Not Found
    """

    def get(self, request, id):
        try:
            fakemon = Fakemon.objects.get(id=id)
            return Response(FakemonSerializer(fakemon).data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'message': 'Fakemon not found'}, status=status.HTTP_404_NOT_FOUND)
        
    def post(self, request):
        serializer = FakemonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class RandomFakemon(APIView):
    """
        GET: Get a random Fakemon.
            Success status: 200 OK
    """

    def get(self, request):
        fakemon = Fakemon.objects.order_by('?').first()
        return Response(FakemonSerializer(fakemon).data, status=status.HTTP_200_OK)
        
class ListAll(APIView):
    """
        GET: Get all Fakemons.
            Success status: 200 OK
    """

    def get(self, request):
        req_get = request.GET
        _type = req_get.get('type')
        print(_type)
        query = Q()


        if _type:
            query = Q(type1__iexact=_type) | Q(type2__iexact=_type)

        fakemons = Fakemon.objects.filter(query)
        return Response(FakemonSerializer(fakemons, many=True).data, status=status.HTTP_200_OK)