# Generated by Django 3.2.11 on 2022-02-05 16:44

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DictWord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en', models.CharField(max_length=100)),
                ('bn', models.CharField(max_length=100)),
                ('pron', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=2)),
                ('en_syn', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('bn_syn', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('sentence', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=300), size=None)),
            ],
        ),
    ]
