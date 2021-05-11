#  ![VulnerableApp-nginx](https://raw.githubusercontent.com/SasanLabs/VulnerableApp/master/docs/logos/Coloured/iconColoured.png)VulnerableApp-nginx
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

As we are seeing a lot of technological enhancements in the industry from past few years, these technical enhancements are solving one or the other problem however with that they also bring few different vulnerabilities. VulnerableApps are generally written in one of the techstacks like either Node.js or Java with a SQL or NoSQL database etc and hence they are not able to expand to a whole new set of Vulnerabilities which are present in other technologies. Also adding more vulnerabilities in a single vulnerable application makes it heavier and complex which finally makes it unmaintainable. So VulnerableApp-Nginx is built to solve this problem by building a distributed farm of Vulnerable Applications such that they can be built agnostic to tech stacks.

## Design Details
![High Level Design](https://github.com/SasanLabs/VulnerableApp-nginx/blob/main/docs/images/VulnerableApp-Nginx.jpeg)

**VulnerableApp-Nginx** is a small component which acts a webserver and a gateway. It routes the calls to different Vulnerable Applications which are registered with it based on a criteria. It also exposes a schema/contract and if a vulnerable application adhere to that then it will be able to intract and route the traffic to that vulnerable application. It also provides the generic skeleton UI which it builds by reading the provided schema from vulnerable application and also loads the UI specific to vulnerable application inside a skeleton UI. 

## Project Setup



VulnerableApp nginx is used to build a distributed farm of Vulnerable Applications such that they can be built agnostic to tech stacks. 

One of the key highlights of Owasp VulnerableApp is clear demarcation between UI, Backend components and there interactions in a way that there is a well defined schema which is used by the UI to call backend. Now if any vulnerable application provides that schema then UI component can work for that vulnerable application.

### Key benefits of VulnerableApp-nginx: 
1. multiple vulnerable applications served as a single application
2. vulnerabilities present across different tech stacks served as a single application
3. original idea of [Owasp VulnerableApp](https://github.com/SasanLabs/VulnerableApp) was to help the scanner developers to write vulnerable applications. This project takes that idea to one step ahead to remove the boundaries of tech stacks.
4. highly configurable component such that users can take one or multiple vulnerable applications as per there needs.

#### VulnerableApp becomes Distributed !!!
