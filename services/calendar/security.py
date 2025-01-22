from flask_cors import CORS
from flask import request, jsonify
import jwt

CORS(app)

SECRET_KEY = "mysecretkey"  # Usa una clave secreta más segura

def token_required(f):
    def decorator(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"message": "Token is missing!"}), 403
        
        try:
            decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except Exception as e:
            return jsonify({"message": "Token is invalid!"}), 403
        
        return f(*args, **kwargs)
    return decorator
