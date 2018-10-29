# Generated by Django 2.1.2 on 2018-10-28 14:30

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20181028_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='registerDate',
            field=models.DateTimeField(default=datetime.datetime(2018, 10, 28, 14, 30, 51, 999473, tzinfo=utc), verbose_name='date registered'),
        ),
        migrations.AlterField(
            model_name='participate',
            name='hackId',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='hackathon.HackathonInformation'),
        ),
    ]
