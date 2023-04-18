package api

import (
	"context"
	"log"

	"github.com/zmb3/spotify"
	"golang.org/x/oauth2/clientcredentials"
)

func Authenticate() *spotify.Client {

	authConfig := &clientcredentials.Config{
		ClientID:     "enter clientID here",
		ClientSecret: "enter clientSecret here",
		TokenURL:     spotify.TokenURL,
	}

	accessToken, err := authConfig.Token(context.Background())
	if err != nil {
		log.Fatalf("error retrieve access token: %v", err)
	}

	a := spotify.NewAuthenticator("/response", spotify.ScopePlaylistModifyPublic)
	client := a.NewClient(accessToken)

	return &client
}
