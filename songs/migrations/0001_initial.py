# Generated by Django 2.0.4 on 2018-09-30 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('artist', models.CharField(max_length=250)),
                ('length', models.DurationField()),
                ('views', models.CharField(max_length=250)),
            ],
        ),
    ]