export class Song {
  title: String;  
  link: String;  
  album: String;  
  artist: String;
  pic: String;

  constructor(t:String, l:String, a:String, ar:String, p:String) {
    this.title = t;
    this.link = l;
    this.album = a;
    this.artist = ar;
    this.pic = p;
  }
}
