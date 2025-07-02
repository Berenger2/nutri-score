import openfoodfacts
from openfoodfacts import API, APIVersion, Environment
from src.utils import filter_fields, _extract_field
from src.config import DEFAULT_PRODUCT_FIELDS

api = API(
    user_agent="SoGoodBackend/1.0",
    version=APIVersion.v3,
    environment=Environment.net
)

def get_product_by_code(code: str, fields: list[str] = None) -> dict:
    if fields is None:
        fields = DEFAULT_PRODUCT_FIELDS
    result = api.product.get(code, fields=fields)
    return result

def search_text(text: str, fields: list[str] = None) -> dict:
    if fields is None:
        fields = DEFAULT_PRODUCT_FIELDS
    
    results = api.product.text_search(text)
    products = results.get("products") or []
    filtered = [filter_fields(prod, fields) for prod in products]
    return {
        "count": results.get("count"),
        "page": results.get("page"),
        "page_count": results.get("page_count"),
        "page_size": results.get("page_size"),
        "products": filtered,
    }

def get_all_products(fields: list[str] = None) -> dict:
    if fields is None:
        fields = DEFAULT_PRODUCT_FIELDS
    
    results = api.product.text_search("", page_size=1000)
    products = results.get("products") or []
    filtered = [filter_fields(prod, fields) for prod in products]
    return {
        "count": results.get("count"),
        "page": results.get("page"),
        "page_count": results.get("page_count"),
        "page_size": results.get("page_size"),
        "products": filtered,
    }

def parse_ingredients(text: str, lang: str = "fr") -> list[dict]:
    results = api.product.parse_ingredients(text, lang=lang)
    return results