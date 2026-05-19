from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Dummy training data

X = np.array([
    [90, 40, 40, 6.5, 200, 25],
    [60, 35, 30, 7.0, 150, 30],
    [40, 20, 20, 6.0, 100, 22],
])

y = np.array([
    "Rice",
    "Wheat",
    "Soybean",
])

model = RandomForestClassifier()

model.fit(X, y)


def predict_crop(data):
    prediction = model.predict([data])

    return prediction[0]