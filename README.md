# Mixify

Mixify is a free full-stack web application that aims to expand a user's Spotify discography by generating a unique playlist tailored to the user's personality, mood, and desires. After users take a Buzzfeed-style quiz, we use Spotify's web API to match the user's preferences with song properties such as danceability, tempo, loudness, etc. 
---
## Members

Aarti Kalamangalam - Backend 

Ursa Pillay - Frontend 

Cathy Quan - Frontend 

Nathan Schoedl - Backend
---
## Set up frontend
1. Check to see if you have node installed on your computer by running the command `node -v` in a terminal. If you do not have node installed, you can download it [here](https://nodejs.org/en/download/). From there, download Angular CLI by running the following command in the terminal: ```npm install -g @angular/cli```
2. Clone the repository with the command `git clone` or by downloading a zip file.
## Set up backend
1. Install Golang using the instructions [here] (https://go.dev/doc/install). 
2. Install the following packages using the command ```go get```: ```github.com/google/uuid```, ```github.com/gorilla/mux```,	```github.com/zmb3/spotify```, and ```golang.org/x/oauth2/clientcredentials```. For more information on the "go get" installation command, read [here](https://pkg.go.dev/cmd/go).
3. Generate a Spotify Client ID and Client Secret using the instructions [here](https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow) or, alternatively, email us ("Schoedl, Nathan W." <nathanschoedl@ufl.edu>, "Kalamangalam,Aarti" <akalamangalam@ufl.edu>) for these details. Using either approach, fill in the Client ID and Client Secret in the respective spots in the file ```authenticate.go```. This file is located under src/server/api. The function in question is called ``Authenticate```.
```
authConfig := &clientcredentials.Config{
		ClientID:     "YOUR-CODE-HERE",
		ClientSecret: "YOUR-CODE-HERE",
		TokenURL:     spotify.TokenURL,
	}
  ```
3. To start the backend, run ``go run main.go``` in the terminal, making sure you are in the directory src/server.
4. Open a different terminal and in the main Mixify directory, run the command ```ng serve```.
5. Open a browser on your computer and type ```localhost:8080``` in the search bar.
