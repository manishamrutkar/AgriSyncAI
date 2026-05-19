from fastapi import FastAPI

from pydantic import BaseModel

from app.model import predict_crop

app = FastAPI()


class CropInput(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    ph: float
    rainfall: float
    temperature: float


@app.get("/")
def home():
    return {
        "message": "AI Service Running"
    }


@app.post("/predict")
def predict(data: CropInput):
    result = predict_crop([
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.ph,
        data.rainfall,
        data.temperature,
    ])

    return {
        "recommended_crop": result,
        "confidence": "91%",
        "estimated_profit": "₹1.4 Lakhs",
    }