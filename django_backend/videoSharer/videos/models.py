from django.db import models
from django.utils import timezone
from django.core.validators import FileExtensionValidator
import uuid

class Video(models.Model):
    video_id = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    video_file = models.FileField(upload_to="uploads/video_files", validators=[FileExtensionValidator(allowed_extensions=['mp4', 'mov'])])
    thumbnail = models.FileField(upload_to="uploads/thumbnails", validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])])
    video_length_time = models.DurationField()
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
    
    def delete(self, *args, **kwargs):
        # Delete image and video
        self.thumbnail.delete()
        self.video_file.delete()
        super(Video, self).delete(*args, **kwargs)
