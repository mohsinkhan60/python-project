from flask import request, jsonify
from config import app, db
from models import Contact

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts}), 200

@app.route("/create_contact", methods=["POST"])
def create_contact():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")

    if not first_name or not last_name or not email:
        return jsonify({"error": "Missing data"}), 400
    
    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        # Ready for database
        db.session.add(new_contact) 
        # commit to add in database
        db.session.commit()
    except Exception as e:
        return jsonify({"error": str(e)}), 400

    return jsonify({"message": "Contact created successfully"}), 201


# @app.route("/update_contact/<int:user_id>", methods=["PUT"])

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)