from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from services.foodfacts import get_product_by_code, search_text,get_all_products



app = FastAPI(
    title="SoGood Backend",
    description="API analyse nutritionnelle",
    version="0.1.0",
    docs_url="/docs",      
    redoc_url="/redoc"     
)

@app.get("/", include_in_schema=False)
async def root_redirect():
    return RedirectResponse(url="/docs")

@app.get("/product/{code}", summary="Récupère un produit par code-barres")
async def fetch_product(code: str):
    return get_product_by_code(code)

@app.get("/product/search/{text}", summary="Recherche de produits par texte")
async def fetch_product_text(text: str):
    return search_text(text)

@app.get("/products", summary="Récupère tous les produits")
async def fetch_all_products():
    return get_all_products()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
