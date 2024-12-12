from rest_framework import serializers
from .models import Video

# Adding A Video
class AddVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['title', 'description', 'video_file', 'thumbnail', 'video_length_time']

# Displaying a video
class VideoCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['video_id', 'title', 'thumbnail', 'video_length_time', 'date_posted']

# Detail view of video
class VideoDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['video_id', 'title', 'description', 'video_file', 'thumbnail', 'video_length_time', 'date_posted']