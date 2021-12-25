from fastai.vision.all import *
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def get_y(): pass
def calc_acc(): pass
learn_inf = load_learner('/home/yoga/Downloads/export_resnet50_0_799.pkl')

@app.route("/predict", methods=['POST'])
@cross_origin()
def predict_words():
    img = PILImage.create(request.get_data())
    prediction = learn_inf.predict(img)
    return str(round(prediction[0][0], 2))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
