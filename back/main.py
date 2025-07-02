from fastapi import FastAPI
from fastapi.responses import RedirectResponse

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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
