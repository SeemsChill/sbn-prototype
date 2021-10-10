# Import built-in.
from django.db import models
# Import User models.
from SBN_User.models import UserInfo

# Create your models here.

class Category(models.Model):
    category = models.CharField(
        # Attributes.
        max_length=20,
        unique=True,
        # Details.
        verbose_name="product_category.",
        help_text="Following format: char(1 -> 20)."
    )

    class Meta:
        verbose_name = "product_category."
        verbose_name_plural = "product_categories."

    def __str__(self):
        return str(self.category)

class Product(models.Model):
    # Identity:
    owner_uid = models.ForeignKey(
        # Connection.
        UserInfo,
        on_delete=models.CASCADE,
        # Details.
        verbose_name="owner_uid.",
        help_text="Following format: char(1 -> 38).",
    )
    prod_uid = models.CharField(
        # Attributes.
        max_length=32,
        # Details.
        verbose_name="product_uid.",
        help_text="Following format: char(1 -> 32)."
    )
    # Details:
    name = models.CharField(
        # Attributes.
        max_length=40,
        # Details.
        verbose_name="product_name.",
        help_text="Following format: char(1 -> 40)."
    )
    category = models.ForeignKey(
        # Connection.
        Category,
        on_delete=models.CASCADE,
        # Details.
        verbose_name="product_category.",
        help_text="Following format: char(1 -> 38)."
    )
    description = models.TextField(
        # Details.
        verbose_name="product_description.",
        help_text="Following format: char(1 -> 40)."
    )
    price = models.DecimalField(
        # Attributes.
        max_digits=30,
        decimal_places=15,
        # Details.
        verbose_name="product_price.",
        help_text="Following format: dec(1 -> 30:15)."
    )
    discount = models.DecimalField(
        # Attributes.
        max_digits=30,
        decimal_places=15,
        # Details.
        verbose_name="product_discount.",
        help_text="Following format: dec(1 -> 30:15)."
    )
    # Data learning.
    graph = models.CharField(
        # Attributes.
        max_length=1000,
        # Details.
        verbose_name="product_name.",
        help_text="Following format: char(1 -> 1000)."
    )
    # Pair status:
    quantity = models.DecimalField(
        # Attributes.
        max_digits=30,
        decimal_places=15,
        # Details.
        verbose_name="product_quantity.",
        help_text="Following format: dec(1 -> 30:15)."
    )
    status = models.BooleanField(
        # Attributes.
        default=True,
        # Details.
        verbose_name="product_status?",
        help_text="products still have?"
    )

    class Meta:
        verbose_name = "product."
        verbose_name_plural = "products."

    def __str__(self):
        return str(self.prod_uid)