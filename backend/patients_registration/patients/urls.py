from django.urls import path
from .views import RegisterView, LoginView, PatientDetailView
from . import views

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('me/', PatientDetailView.as_view(), name='me'),
    path('', views.index, name='index'),   
]
