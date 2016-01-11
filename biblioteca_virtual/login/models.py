# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class Material(models.Model):
    id_material = models.AutoField(primary_key=True)
    id_tipo_material = models.ForeignKey('TipoMaterial', db_column='id_tipo_material', blank=True, null=True)
    descripcion = models.CharField(max_length=-1, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'material'


class TipoMaterial(models.Model):
    id_tipo_material = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=-1, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_material'


class Usuarios(models.Model):
    id_usuarios = models.AutoField(primary_key=True)
    nombres_apellidos = models.CharField(max_length=-1, blank=True, null=True)
    usuario = models.CharField(max_length=-1, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'usuarios'
