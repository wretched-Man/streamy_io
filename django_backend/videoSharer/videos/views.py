from .serializers import AddVideoSerializer, VideoCardSerializer, VideoDetailSerializer
from .models import Video
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class AddVideoView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        videoID = request.GET.get('item_id')
        videos = Video.objects.all()
        serializer = AddVideoSerializer(videos, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        videos_serializer = AddVideoSerializer(data=request.data)
        if videos_serializer.is_valid():
            videos_serializer.save()
            return Response(videos_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', videos_serializer.errors)
            return Response(videos_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VideoHomeView(APIView):
    # Fetch videos
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        item = request.GET.get("item")
        length = request.GET.get("length")

        if length:
            return Response({
                "length": Video.objects.all().count()
            })
        
        videos = Video.objects.all() if not item else Video.objects.all().exclude(video_id=item)
        serializer = VideoCardSerializer(videos, many=True)
        return Response(serializer.data)


class VideoDetailView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, video_id, *args, **kwargs):
        single_video = Video.objects.get(video_id=video_id)
        serializer = VideoDetailSerializer(single_video)
        return Response(serializer.data)


class VideoEditView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    http_method_names = ['get', 'put', 'delete']

    def get(self, request, *args, **kwargs):
        videoID = request.GET.get('item_id')
        serializer = None

        if videoID:
            serializer = AddVideoSerializer(
                Video.objects.get(video_id=videoID))
        else:
            serializer = AddVideoSerializer(Video.objects.all(), many=True)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        video_id = request.query_params.get("id", None)
        video = Video.objects.get(video_id=video_id)
        request_data = request.data
        final_input = dict()

        for key in request_data.keys():
            key_data = request_data[key]
            if key_data:
                final_input[key] = key_data

        deserialized = AddVideoSerializer(instance=video, data=final_input, partial=True)
        
        if not deserialized.is_valid():
            Response(
                {"error": "There is an error with the object in question."}
            )
        deserialized.save()
        return Response(deserialized.data, status=status.HTTP_206_PARTIAL_CONTENT)
    

    def delete(self, request, *args, **kwargs):
        video_id = request.query_params.get("id", None)
        video = Video.objects.get(video_id=video_id)
        video.delete()
        return(Response(status=status.HTTP_204_NO_CONTENT))
