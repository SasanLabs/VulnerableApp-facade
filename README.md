#  ![Owasp VulnerableApp-facade](https://raw.githubusercontent.com/SasanLabs/VulnerableApp/master/docs/logos/Coloured/iconColoured.png)Owasp VulnerableApp-facade
![OWASP Incubator](https://img.shields.io/badge/owasp-incubator-blue.svg) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

As we are seeing a lot of technological enhancements in the industry in the past few years, these technical enhancements are solving one or the other problem however, with that they also bring few different vulnerabilities. Vulnerable Applications are generally written in one of the tech stacks like either Node.js or Java with a SQL or NoSQL database etc and hence they are not able to expand to a whole new set of vulnerabilities that are present in other technologies. Also adding more vulnerabilities in a single vulnerable application makes it heavier and complex which finally makes it unmaintainable. So VulnerableApp-facade is built to solve this problem by building a distributed farm of Vulnerable Applications such that they can be built agnostic to tech stacks.

## High Level Design Details
![High Level Design](https://raw.githubusercontent.com/SasanLabs/VulnerableApp-facade/main/docs/images/VulnerableApp-facade.jpeg)

**VulnerableApp-facade** is a small component which acts as a webserver and a gateway. It routes the calls to different Vulnerable Applications which are registered with it based on a url pattern. It also exposes a schema/contract (Vulnerability Definition) and if a vulnerable application adhere to that then it will be able to intract and route the traffic to that vulnerable application. It also provides the generic skeleton UI which it builds by reading the provided schema (Vulnerability Definition) from the vulnerable application and then loads the UI specific to vulnerable application inside the skeleton UserInterface. 

### Glimpse of the Owasp VulnerableApp-Facade
![Owasp VulnerableApp-Facade](https://raw.githubusercontent.com/SasanLabs/VulnerableApp-facade/main/docs/images/gif/VulnerableApp-Facade.gif)

## How to run the project
VulnerableApp-facade is a farm of vulnerable applications where each application runs as a docker container. VulnerableApp-facade has `docker-compose.yml` file which contains docker configuration of other vulnerable applications along with docker configuration of VulnerableApp-facade. 
### Simple Start ###
In order to run entire suit please download and install [Docker Compose](https://docs.docker.com/compose/install/). After installation, please copy the [docker-compose.yml](https://github.com/SasanLabs/VulnerableApp-facade/blob/main/docker-compose.yml) and run the following command from terminal:
``` docker-compose up ```
Then naviate to ``` http://localhost:8080 ``` to play with the application

### Advanced Start ###
As [docker-compose.yml](https://github.com/SasanLabs/VulnerableApp-facade/blob/main/docker-compose.yml) contains all the applications which adhere to the schema of VulnerableApp-facade so in cause you are looking for specific vulnerable applications like only Java related vulnerable applications then remove other vulnerable applications from [docker-compose.yml](https://github.com/SasanLabs/VulnerableApp-facade/blob/main/docker-compose.yml) and then run steps as mentioned in the [Simple start step](#simple-start).

## How to Contribute to the project
VulnerableApp-facade have majorly 2 components:
1. Static files
2. Lua module

Static files are used to load the skeleton UserInterface and Lua module is used to merge the Vulnerability Definitions exposed by different vulnerable applications.
So you just need to do the changes in any of the components and then build the docker image using command ```docker build . -t owasp-vulnerableapp-facade``` and then run the project as mentioned at [How to run the project](#how-to-run-the-project) 

## Contact ##
Please raise a github issue for enhancement/issues in VulnerableApp-facade or send email to karan.sasan@owasp.org regarding queries
we will try to resolve issues asap.

## Other links ##
[Owasp Project link](https://owasp.org/www-project-vulnerableapp-facade/)
[Github pages](https://sasanlabs.github.io/VulnerableApp-facade/)
