from django.shortcuts import render
from rest_framework import viewsets
from .serializer import CourseSerializer
from .models import Course
# Create your views here.
def list_courses(request):
    return render(request, 'list_course.html')

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()