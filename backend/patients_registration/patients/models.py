from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class Patient(AbstractUser):
    phone = models.CharField(max_length=15)

    groups = models.ManyToManyField(
        Group,
        related_name='patient_set',  # Add related_name
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='patient_set',  # Add related_name
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )
