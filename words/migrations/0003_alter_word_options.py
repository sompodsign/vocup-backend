# Generated by Django 3.2.11 on 2022-02-25 08:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0002_auto_20220204_1830'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='word',
            options={'ordering': ['-created_at']},
        ),
    ]