# Generated by Django 5.1 on 2024-08-20 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fakemon', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fakemon',
            name='image',
            field=models.URLField(),
        ),
    ]
