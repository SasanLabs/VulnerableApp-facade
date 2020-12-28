# VulnerableApp-nginx

VulnerableApp nginx is used to build a distributed farm of Vulnerable Applications such that they can be built agnostic to tech stacks. One of the key highlights of Owasp VulnerableApp is **clear demarcation between UI, Backend components and there interactions** in a way that there is a well defined **schema** which is used by the UI to call backend. Now if any **vulnerable application** provides that schema then UI component can work for that vulnerable application.

Key benefits of VulnerableApp-nginx: 
1. multiple vulnerable applications served as a single application
2. vulnerabilities present across different tech stacks served as a single application
3. original idea of [Owasp VulnerableApp](https://github.com/SasanLabs/VulnerableApp) was to help the scanner developers to write vulnerable applications. This project takes that idea to one step ahead to remove the boundaries of tech stacks.
4. highly configurable component such that users can take one or multiple vulnerable applications as per there needs.

### VulnerableApp becomes Distributed !!!
