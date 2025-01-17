# Streamy.io
## About
Streamy.io is a web-application written in Python Django, Django Rest Framework, React and Tailwind CSS.

It allows the user to **Create**, **Read**, **Upload** and **Delete** videos.

It uses:
* Django - Backend
* Django Rest Framework
* React - Frontend

Features:
* Dark & Light Themes
* Responsive Design

## Installation
To run:
1. Install the requirements in the `django_backend/requirements.txt`
```
cd django_backend
pip install -r requirements.txt
```

2. Start the backend server on the port 8000:
```
python3 manage.py runserver
```

3. Enter the frontend folder `react_video_ui` and install the requirements. (Both the development and user dependencies. You can exclude Json Server from the list (it was only necessary for the build)).
```
npm install
```

4. Start the frontend server:
```
npm run dev
```
