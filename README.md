# ip Cron Job

## This project grabs the public ip of the current user and schedules sending an email to the user if the ip was updated

###


Create an .env file at the project root with the following values: 
```javascript
IPINFO_TOKEN=value
EMAIL_USERNAME=value
EMAIL_PASSWORD=value
USER_FIRST_NAME=value
USER_LAST_NAME=value
SMTP_SERVER=value
SMTP_PORT=value
```