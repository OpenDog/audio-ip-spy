# Find out the IP address of an Alexa device (with audio player) 

This project is a simple lambda service, deployed with Claudia.JS. It tells you the IP address of an Alexa device. 
You have to play a 250 ms item with the audio player. NOTE: It doesn't work in audio tags in SSML strings.

The code is based on the binary-content example of the Claudia.JS tutorials.


## Try it out

* run `npm install` to download the dependencies.

* run `npm run create` to deploy the project to Lambda. Grab the API ID from the result and replace `<API-ID>` 
in the example commands below. Also replace 'foo_bar' with a unique id.

* Queue this "stream" up with the audio player and play it (250 ms silence)
 
 `https://<API-ID>.execute-api.us-east-1.amazonaws.com/latest/silence?id=foo_bar`

* Now you can query the ip after the call with this GET (it returns the ip address as text)

 `curl "https://<API-ID>.execute-api.us-east-1.amazonaws.com/latest/ip?id=foo_bar"`

## More information

TODO

