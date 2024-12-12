from django.urls import path
from . import views

urlpatterns = [
    path('', views.VideoHomeView.as_view(), name="video-view-home"),
    path('add-video/', views.AddVideoView.as_view(), name="add-video-view"),
    path('video-edit/', views.VideoEditView.as_view(), name="edit-video-view"),
    path('<video_id>/', views.VideoDetailView.as_view(), name="video-detail-view")
]