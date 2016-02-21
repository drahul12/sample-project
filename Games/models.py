from django.db import models

# Create your models here.

class Game(models.Model):
    name = models.CharField(max_length = 50, null= True, default = None, blank = True)
    description = models.TextField(null= True, default = None, blank = True)
