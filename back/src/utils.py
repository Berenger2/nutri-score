def _extract_field(data: dict, field: str):
    # Extrait une valeur d'un dictionnaire imbriqué via notation pointée.
    keys = field.split('.')
    value = data
    for k in keys:
        if isinstance(value, dict) and k in value:
            value = value[k]
        else:
            return None
    return value

def filter_fields(product: dict, fields: list[str]) -> dict:
    # Filtre les clés du produit selon la liste `fields`, supporte notation pointée.
    filtered = {}
    for field in fields:
        filtered[field] = _extract_field(product, field)
    return filtered