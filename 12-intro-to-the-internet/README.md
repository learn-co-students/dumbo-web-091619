Intro to the Internet
===

* What will you get out of this Mod?
  * Developer -> Web Developer














## Introduction to the Internet

* What is the difference between the Internet and the Web?
  * https://en.wikipedia.org/wiki/ARPANET
  * https://en.wikipedia.org/wiki/Vint_Cerf (TCP)
  * https://en.wikipedia.org/wiki/Tim_Berners-Lee (HTML/HTTP)
  * http://info.cern.ch/hypertext/WWW/TheProject.html











* How is data sent over the internet?
  * TCP -> Transmission Control Protocol, how data is sent over the internet
  * IP -> Internet Protocol, IP address -> who you are, something to identify you on the internet
  * HTTP(s) -> HyperText Transfer Protocal
  * HTML -> HyperText Makup Langage










* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
    google.com -> 172.217.11.14
  * `nslookup`/Network Utility
  * https://iplocation.com/










* What is a server? What is a client?


* What is the request / response cycle?





* With a client and server, which makes the request? Which sends the response?









* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl









* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
    * https://http.cat/
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?
    - CRUD

    Create - POST
    Read - GET
    Update - PUT (complete overdo)/PATCH (fixing, partial update)
    Delete - DELETE










* What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?

https://www.google.com/search?q=coffee
oq=coffee
aqs=chrome..69i57j0l3j69i60j69i61.1532j0j8
sourceid=chrome
ie=UTF-8



















----
### 3 min break!
----

## Intro to Sinatra
* Build a basic web app in 14.7 seconds
* Do basic web requests in Sinatra
* Explain what Sinatra is
* Show how to use Corneal to generate Sinatra apps
