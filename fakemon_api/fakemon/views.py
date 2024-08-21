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
    def get(self, request, id):
        """
            GET: Get a Fakemon by ID.
                Success status: 200 OK
                Not found status: 404
        """
        try:
            fakemon = Fakemon.objects.get(id=id)
            return Response(FakemonSerializer(fakemon).data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'message': 'Fakemon not found'}, status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request):
        """
            GET: Get the first Fakemon.
                Success status: 200 OK
        """
        fakemon = Fakemon.objects.get(id=1)
        return Response(FakemonSerializer(fakemon).data, status=status.HTTP_200_OK)
        
    def post(self, request):
        """
            POST: Create a new Fakemon.
                Success status: 201 Created
                Bad request status: 400
        """
        serializer = FakemonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        """
            DELETE: Delete a Fakemon by ID.
                Success status: 204 No Content
                Not found status: 404
        """
        try:
            fakemon = Fakemon.objects.get(id=id)
            fakemon.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ObjectDoesNotExist:
            return Response({'message': 'Fakemon not found'}, status=status.HTTP_404_NOT_FOUND)
        
class RandomFakemon(APIView):
    def get(self, request):
        """
            GET: Get a random Fakemon.
                Success status: 200 OK
        """
        fakemon = Fakemon.objects.order_by('?').first()
        return Response(FakemonSerializer(fakemon).data, status=status.HTTP_200_OK)
        
class ListAll(APIView):
    def get(self, request):
        """
            GET: Get all Fakemons.
                Success status: 200 OK
        """
        req_get = request.GET
        _type = req_get.get('type')
        print(_type)
        query = Q()


        if _type:
            query = Q(type1__iexact=_type) | Q(type2__iexact=_type)

        fakemons = Fakemon.objects.filter(query)
        return Response(FakemonSerializer(fakemons, many=True).data, status=status.HTTP_200_OK)