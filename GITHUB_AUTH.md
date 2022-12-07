# Github Authorization
Follow the below steps to implement GitHub OAuth in your nodejs app

- Create OAuth App on github and get client_id and client_secret. Also specify OAuth callback url in OAuth App

- Save client_id, client_secret and callback url values in .env file (get help from .env.sample file)

- Create a frontend part (using template engine or any other library) to enable click to precede github OAuth

- Also save the secrets on frontend part

- On clicking github OAuth button it would redirect to github for authorization

- On successful authorization it would redirect back to callback url