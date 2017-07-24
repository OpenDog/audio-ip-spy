# Get an audio player IP address

This project is a simple service, deployed with Claudia.JS, that tells you the IP address of an assistant. 
You have to play a 250 ms item in with the audio player.
It is based on the binary-content example of the Claudia.JS tutorials.


* `/silence?id=<unique id>`: returns a short silent mp3. Use it in and SSML audio tag.
The call is "tagged" with an "id" variable in the query string.

* `/ip?id=<unique id>`: returns the IP address of the previous caller with the same id.


## Try it out

* run `npm install` to download the dependencies.

* run `npm run create` to deploy the project to Lambda. Grab the API ID from the result and replace `<API-ID>` 
in the example commands below. Also replace 'foo_bar' with a unique id.

* Queue this "stream" up with the audio player and play it (250 ms silence)
 
 `https://<API-ID>.execute-api.us-east-1.amazonaws.com/latest/silence?id=foo_bar`

* Then you can query the ip after the call with this GET (it returns the ip address as text)

 `curl "https://<API-ID>.execute-api.us-east-1.amazonaws.com/latest/ip?id=foo_bar"`

## More information

TODO

