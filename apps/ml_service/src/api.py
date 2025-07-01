from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "ML Service is running"}

# TODO: Implement recommendation endpoints
# @app.post("/recommendations/")
# def get_recommendations(user_id: int, context: dict):
#     # Call your ML model here to get recommendations
#     pass

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
