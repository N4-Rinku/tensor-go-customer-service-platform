# Tensor Go Customer Service Platform

This is a Tensor Go Customer Service Platform.
Backend - NodeJS
Frontend - ReactJS

HTML files are build by react js library
Backend is supported by express and a small sqlite database is used for authentication

Authentication type - Google OAuth and JWT Tokens/Cookies

## Objective of this task

Customers can interact with the website and send thier queries/requests
Employees or admins can then interact easily via intercom.com

## How this application works

Intercom.com connection is provided by intercom API that sends and recieves
requests and connects the user with employees

Authentication works by verifying with Google and then a CSRF JWT Token is issued 
for the user to access the application

Utility files have been used and the code is modular in structure