from django.db import models

# Create your models here.

class Fakemon(models.Model):
    
    class Types(models.TextChoices):
        NORMAL = 'Normal'
        FIRE = 'Fire'
        WATER = 'Water'
        ELECTRIC = 'Electric'
        GRASS = 'Grass'
        ICE = 'Ice'
        FIGHTING = 'Fighting'
        POISON = 'Poison'
        GROUND = 'Ground'
        FLYING = 'Flying'
        PSYCHIC = 'Psychic'
        BUG = 'Bug'
        ROCK = 'Rock'
        GHOST = 'Ghost'
        DRAGON = 'Dragon'
        DARK = 'Dark'
        STEEL = 'Steel'
        FAIRY = 'Fairy'
    
    
    name = models.CharField(max_length=100)
    description = models.TextField()
    height = models.FloatField(default=0)
    weight = models.FloatField(default=0)
    image = models.URLField()
    type1 = models.CharField(max_length=100, choices=Types.choices)
    type2 = models.CharField(max_length=100, choices=Types.choices, blank=True)

    def __str__(self):
        return self.name
