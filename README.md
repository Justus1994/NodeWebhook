# NodeWebhook

1. 

2. Setup Webhook in Gitlab 
*  Enter endpoint
*  Enter Secret 
*  Select branch for push events

3. Configure Hook.sh
*  Enter Repo path 
*  Add commands for build (optional)

4. Configure dotenv
*  Create .env file in root 
*  Enter value for MY_SECRET

5. Configure Webhook as System Service
* `$ sudo nano /etc/systemd/system/webhook.service`
* change PORT and User

6. Start Service 
*  `$ sudo systemctl start webhook`