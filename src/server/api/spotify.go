package api

import (
	"log"
	"strings"

	"github.com/zmb3/spotify"
)

func Recommend(client *spotify.Client, user *Response) []string {

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
	var total string
	var add string = "embed/"
	join := []string{}
	recs, err := client.GetRecommendations(seed, ta, &opt)
	if err != nil {
		log.Fatalf("Couldn't get recommendation: %v", err)
	}

	formatted := []string{}
	Links := []string{}

	// var artist *spotify.FullArtist

	for i := 0; i < len(recs.Tracks); i++ {

		//artist, err = client.GetArtist(recs.Tracks[i].Artists[0].ID)
		// if err != nil {
		// 	log.Fatalf("Couldn't get artist: %v", err)
		// }
		formatted = append(formatted, recs.Tracks[i].Name)
		formatted = append(formatted, recs.Tracks[i].ExternalURLs["spotify"])
		format := recs.Tracks[i].ExternalURLs["spotify"]
		join = strings.SplitAfter(format, "com/")
		total = join[0] + add + join[1]
		Links = append(Links, total)
		//formatted = append(formatted, artist.Name)
		//formatted = append(formatted, string(artist.ExternalURLs["spotify"]))
		// if len(artist.Images) == 0 {
		// 	formatted = append(formatted, "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
		// } else {
		// 	formatted = append(formatted, artist.Images[0].URL)
		// }
	}

	//return formatted
	return Links
}
