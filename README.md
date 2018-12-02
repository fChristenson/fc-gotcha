# Gotcha

## What we will cover

* A fundamental problem with Node security
* What to look out for

## Notes

You may have heard that Node has security issues from various sources on the internet.

You may have asked why people associate open source and npm with this problem and if there is any truth to all of the talk.

Well I am afraid that there is some truth to it all.

The following is a list of practices that can help mitigate some of the risk.

* Never run a Node process as the root user
* Only depend on well maintained packages from trusted sources
* Run your Node code in a isolated environment
* Limit network communication
* Limit exposed ports
* Monitor network traffic
