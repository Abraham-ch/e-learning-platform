from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from courses import views
from .views import list_courses

router = routers.DefaultRouter()
router.register(r'course', views.CourseView,'course')
urlpatterns = [ 
    path('', list_courses),
    path('api/v1/',  include(router.urls)),
    path('docs', include_docs_urls(title='Courses API', description='RESTful API for Courses'))
]
