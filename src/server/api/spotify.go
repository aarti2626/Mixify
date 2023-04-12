package api

import (
	"fmt"
	"log"

	"github.com/zmb3/spotify"
)

func Recommend(client *spotify.Client, user *Response) []spotify.SimpleTrack {

	trackID := []spotify.ID{}

	trackID = append(trackID, user.M.Track1)
	trackID = append(trackID, user.M.Track2)

	var seed spotify.Seeds
	seed.Tracks = trackID

	ta := spotify.NewTrackAttributes().TargetAcousticness(user.M.Acousticness).
		TargetPopularity(user.M.Popularity).
		TargetDanceability(user.M.Danceability).
		TargetEnergy(user.M.Energy)

	var opt spotify.Options
	var country string = "US"
	var offset int = 0
	var r string = "medium"
	opt.Country = &country
	opt.Offset = &offset
	opt.Timerange = &r

	recs, err := client.GetRecommendations(seed, ta, &opt)
	if err != nil {
		log.Fatalf("Couldn't get recommendation: %v", err)
	}

	recID := []spotify.ID{}

	for i := 0; i < len(recs.Tracks); i++ {
		recID = append(recID, recs.Tracks[i].ID)
	}

	var alessia *spotify.FullArtist
	alessia, err = client.GetArtist("2wUjUUtkb5lvLKcGKsKqsR")
	if err != nil {
		log.Fatalf("Couldn't get recommendation: %v", err)
	}
	fmt.Println(alessia.Images[0].URL)

	return recs.Tracks
}
