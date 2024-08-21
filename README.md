# Fakemon

This project is a simple website that allows the user to upload their own pokemon (fakemon).

## Frontend

The frontend is a React application comprised of 3 pages.

### Pages

- Main Page: Shows a random Fakemon.
- List Page: Shows all Fakemons.
- Upload Page: Allows the user to post their own Fakemon.

## Backend

The backend is a Django REST API that creates and stores fakemons.

### Endpoints

- `GET /fakemon/` - fetches the first fakemon.
- `GET /fakemon/<int:id>` - fetches a fakemon by id.
- `GET /fakemon/random` - fetches a random fakemon.
- `GET /fakemon/list_all?type=[TYPE]` - fetches all fakemon, allowing to filter by type [TYPE].
- `POST /fakemon/` - uploads a fakemon.
- `DELETE /fakemon/<int:id>` - deletes a fakemon by id.

## How to run

1. Clone the repository

```
git clone git@github.com:Dinis-Lei/fakemon.git
cd fakemon/fakemon_api
```

2. Set up virtual environment (optional)

```
python3 -m venv venv
source venv/bin/activate
```

3. Install requirements

```
pip install -r requirements.txt
```

4. Run migrations

```
python3 manage.py migrate
```

5. Run server

```
python3 manage.py runserver
```

Server available at http://localhost:8000

6. Populate database (optional)

```
chmod +x populate_database.sh

```

7. Install frontend dependencies

```
cd ../fakemon_frontend
npm install
```

8. Run frontend

```
npm start
```



