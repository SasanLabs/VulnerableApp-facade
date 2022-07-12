import {ResourceType} from "../interface/State";

const testFixture = {
    "activeApplication": "VulnerableApp",
    "isSuccessfullyLoaded": true,
    "activateAboutUsPage": false,
    "activateHomePage": false,
    "showHints": false,
    "activeLevel": "asdf",
    "activeVulnerability": "acv",
    "applicationData": [
        {
            "applicationName": "VulnerableApp",
            "vulnerabilityDefinitions": [
                {
                    "name": "CommandInjection",
                    "id": "CommandInjection",
                    "description": "Command injection is an attack in which the goal is execution of arbitrary commands on the host operating system via a vulnerable application. Command injection attacks are possible when an application passes unsafe user supplied data (forms, cookies, HTTP headers etc.) to a system shell. In this attack, the attacker-supplied operating system commands are usually executed with the privileges of the vulnerable application. Command injection attacks are possible largely due to insufficient input validation. <br/><br/>Important Links on Command Injection Vulnerability :<br/><ol> <li> <a href=\"https://cwe.mitre.org/data/definitions/77.html\" target=\"_blank\">CWE-77</a>  <li> <a href=\"https://owasp.org/www-community/attacks/Command_Injection\" target=\"_blank\">Owasp Wiki Link</a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "COMMAND_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "77"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "31"
                                        }
                                    ],
                                    "description": "\"ipaddress\" query param's value is directly executed."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "COMMAND_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "77"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "31"
                                        }
                                    ],
                                    "description": "\"ipaddress\" query param's value is directly executed if \";\", \"&\" or space characters are not present in it."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "COMMAND_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "77"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "31"
                                        }
                                    ],
                                    "description": "\"ipaddress\" query param's value is directly executed if \";\", \"&\", \"%26\", \"%3B\" or space characters are not present in it."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "COMMAND_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "77"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "31"
                                        }
                                    ],
                                    "description": "\"ipaddress\" query param's value is directly executed if \";\", \"&\", \"%26\", \"%3B\", \"%3b\" or space characters are not present in it."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "COMMAND_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "77"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "31"
                                        }
                                    ],
                                    "description": "\"ipaddress\" query param's value is directly executed if \";\", \"&\", \"%26\", \"%3B\", \"%3b\", \"%7C\", \"%7c\" or space characters are not present in it."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/CommandInjection/LEVEL_1/CI_Level1.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "UnrestrictedFileUpload",
                    "id": "UnrestrictedFileUpload",
                    "description": "Uploaded files represent a significant risk to applications. The first step in many attacks is to get some code to the system to be attacked. Then the attack only needs to find a way to get the code executed.<br/>The consequences of unrestricted file upload can vary, including complete system takeover, an overloaded file system or database, forwarding attacks to back-end systems, client-side attacks, or simple defacement. It depends on what the application does with the uploaded file and especially where it is stored.<br/><br/>Important Links:<br/><ol> <li> <a href=\"https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload\" target=\"_blank\">Owasp Wiki Link</a>  <li> <a href=\"https://www.youtube.com/watch?v=CmF9sEyKZNo\" target=\"_blank\">Ebrahim Hegazy talk on Unrestricted File Uploads</a> <li> <a href=\"https://www.sans.org/blog/8-basic-rules-to-implement-secure-file-uploads/\" target=\"_blank\">Sans rules to implement secure file uploads</a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "There is no validation on uploaded file's name."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "There is no validation on uploaded file's name."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except .html extensions."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except .html and .htm extensions."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except case insensitive .html, .htm extensions."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Only file name is allowed if it contains case insensitive .jpeg or .png."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Only file name is allowed if it ends with case insensitive .jpeg or .png and it is considered before Null Bytes only."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_8",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "There is no validation on uploaded file's name."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_9",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnrestrictedFileUpload/LEVEL_1/FileUpload.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNRESTRICTED_FILE_UPLOAD"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "434"
                                        },
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Only file name is allowed if it ends with case insensitive .jpeg or .png."
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "JWTVulnerability",
                    "id": "JWTVulnerability",
                    "description": "JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.There can be multiple things that can go wrong with the implementation of JWT and that can impact the Authentication or Authorization of the application and result in complete compromise of the system. <br/><br/> Important Links on JWT : <ol> <li> <a href=\"https://en.wikipedia.org/wiki/JSON_Web_Token\" target=\"_blank\">Wiki Link</a>  <li> <a href=\"https://jwt.io/introduction/\" target=\"_blank\">Jwt.io</a> </ol> Important Links on Vulnerable implementations in JWT : <ol>  <li><a href=\"https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-06\" target=\"_blank\">JSON Web Token Best Current Practices(ieft document)</a> <li><a href=\"https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet_for_Java.html\" target=\"_blank\"> OWASP cheatsheet for vulnerabilities in JWT implementation </a> <li><a href=\"https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries\" target=\"_blank\">For server side vulnerabilities in JWT implementations</a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_1/JWT_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_1/JWT_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_1/JWT_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "The request contains JWT token which is leaked in the URL. This can violate PCI and most organizational compliance policies."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but without Secure/HttpOnly flags and also without cookie prefixes."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                },
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "INSECURE_CONFIGURATION_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token signed using Weak key vulnerability."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                },
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "SERVER_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based Null byte vulnerable JWT token validator."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                },
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "SERVER_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based None algorithm vulnerable JWT token validator."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_7/JWT_Level.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_7/JWT_Level.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_7/JWT_Level.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but without Secure/HttpOnly flags and also without cookie prefixes."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_8",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                },
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "SERVER_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token with Key confusion vulnerability."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_9",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                },
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "SERVER_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token validator vulnerable to trusting JWK field without checking if public key provided is present in truststore or not. "
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_10",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/JWTVulnerability/LEVEL_2/JWT_Level2.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "CLIENT_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token but with HttpOnly flag but without Secure flag and also without cookie prefixes."
                                },
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "SERVER_SIDE_VULNERABLE_JWT"
                                        }
                                    ],
                                    "description": "Cookie based JWT token, vulnerable to empty token vulnerability attack."
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Http3xxStatusCodeBasedInjection",
                    "id": "Http3xxStatusCodeBasedInjection",
                    "description": "Open redirection vulnerabilities arise when an application incorporates user-controllable data into the target of a redirection in an unsafe way.<br/> An attacker can construct a URL within the application that causes a redirection to an arbitrary external domain. This behavior can be leveraged to facilitate phishing attacks against users of the application.<br/> The ability to use an authentic application URL, targeting the correct domain and with a valid SSL certificate (if SSL is used), lends credibility to the phishing attack because many users, even if they verify these features, will not notice the subsequent redirection to a different domain. <br/><br/> <a href=\"https://www.w3.org/Protocols/rfc2616/rfc2616.html\">RFC 2616 - \"Hypertext Transfer Protocol - HTTP/1.1\" target=\"_blank\"</a> defines a variety of 3xx status codes that will cause a browser to redirect to a specified location and this implementation is based on 3xx status codes <br/><br/>Important Links:<ol><li><a href=\"http://projects.webappsec.org/w/page/13246981/URL%20Redirector%20Abuse\" target=\"_blank\">WASC-38</a><br/></li><li><a href=\"https://cwe.mitre.org/data/definitions/601.html\" target=\"_blank\">CWE-601</a><br/></li><li><a href=\"https://portswigger.net/kb/issues/00500100_open-redirection-reflected\" target=\"_blank\">Port Swigger's vulnerability documentation</a><br/></li><li><a href=\"https://en.wikipedia.org/wiki/URL_redirection\" target=\"_blank\">Wiki link for describing the purpose of URL Redirection</a></li><li><a href=\"https://github.com/payloadbox/open-redirect-payload-list\" target=\"_blank\">Open Redirection payload list</a></li><li><a href=\"https://appsec-labs.com/portal/case-study-open-redirect/\" target=\"_blank\">Adding domain as prefix case study</a></li></ol>Some myths: <a href=\"https://security.stackexchange.com/questions/59517/are-url-shorteners-vulnerable-due-to-open-redirects\" target=\"_blank\">Are URL shorteners “vulnerable” due to open redirects?</a><br/>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header if it doesn't starts with \"http\" and \"https\" or domain is same as the application."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header if it doesn't starts with \"http\", \"https\" and \"//\" or domain is same as the application."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header if it doesn't starts with \"http\", \"https\", \"//\" and Null Byte or domain is same as the application."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header if it doesn't starts with \"http\", \"https\", \"//\" and character less than ascii value 33 or domain is same as the application."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header by prefixing it will applications domain name."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "OPEN_REDIRECT_3XX_STATUS_CODE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "601"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "38"
                                        }
                                    ],
                                    "description": "\"returnTo\" query parameter's value is directly added to the \"Location\" header by prefixing it will applications domain name."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_8",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/Http3xxStatusCodeBasedInjection/LEVEL_1/Http3xxStatusCodeBasedInjection.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "PathTraversal",
                    "id": "PathTraversal",
                    "description": "A directory traversal (or path traversal) consists in exploiting insufficient security validation/sanitization of user-supplied input file names, such that characters representing \"traverse to parent directory\" are passed through to the file APIs. <br/><br/>The goal of this attack is to use an affected application to gain unauthorized access to the file system. <br/><br/>Important Links:<br/><ol> <li> <a href=\"https://en.wikipedia.org/wiki/Directory_traversal_attack\" target=\"_blank\">Wiki Link</a>  <li> <a href=\"https://owasp.org/www-community/attacks/Path_Traversal\" target=\"_blank\">Owasp Wiki Link</a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value is directly appended to path to read the file."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value is directly appended to path to read the file."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value is directly appended if it doesn't contains \"..\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value is directly appended if it doesn't contains \"..\" or \"%2f\" which is URL encoding of \"/\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value is directly appended if it doesn't contains \"..\" or \"%2f\" or \"%2F\" which is URL encoding of \"/\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value is directly appended if it doesn't contains \"..\", takes care of URL encoding too."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value before Null Byte is directly appended to path to read the file."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_8",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value before Null Byte is directly appended if it doesn't contains \"../\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_9",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value before Null Byte is directly appended if it doesn't contains \"..\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_10",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value before Null Byte is directly appended if it doesn't contains \"..\" or \"%2f\" which is URL encoding of \"/\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_11",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value before Null Byte is directly appended if it doesn't contains \"..\" or \"%2f\" or \"%2F\" which is URL encoding of \"/\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_12",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PathTraversal/LEVEL_1/PathTraversal.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PATH_TRAVERSAL"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "22"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "33"
                                        }
                                    ],
                                    "description": "\"fileName\" query param's value before Null Byte is directly appended if it doesn't contains \"..\", takes care of URL encoding too."
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "RemoteFileInclusion",
                    "id": "RemoteFileInclusion",
                    "description": "Url based Local File Injection attack.",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/RemoteFileInclusion/.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/RemoteFileInclusion/.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/RemoteFileInclusion/.js"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/RemoteFileInclusion/.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/RemoteFileInclusion/.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/RemoteFileInclusion/.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "BlindSQLInjectionVulnerability",
                    "id": "BlindSQLInjectionVulnerability",
                    "description": "A SQL injection attack consists of insertion or \"injection\" of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. SQL injection attacks are a type of injection attack, in which SQL commands are injected into data-plane input in order to effect the execution of predefined SQL commands. <br> Important Links on SQLInjection : <ol> <li> <a href=\"https://en.wikipedia.org/wiki/SQL_injection\" target=\"_blank\">Wiki Link</a>  <li> <a href=\"https://owasp.org/www-community/attacks/SQL_Injection\" target=\"_blank\">Owasp SQLInjection</a> <li> <a href=\"https://www.youtube.com/watch?v=WkHkryIoLD0\" target=\"_blank\">Joe McCray talk on SQLInjection</a><li> <a href=\"https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/\" target=\"_blank\">SQL Injection cheat sheet by netsparker</a></ol> <br/><br/> Important Links on Prevention techniques : <ol>  <li><a href=\"https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html\" target=\"_blank\">Owasp Prevention cheatsheet</a> <li><a href=\"https://www.websec.ca/kb/sql_injection\" target=\"_blank\"> SQL Injection knowledge base </a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "BLIND_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is directly appended to the Query hence Query can be manipulated."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "BLIND_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is wrapped around \"'\" and then appended to the SQL Query hence query can be manipulated."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/BlindSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "ErrorBasedSQLInjectionVulnerability",
                    "id": "ErrorBasedSQLInjectionVulnerability",
                    "description": "A SQL injection attack consists of insertion or \"injection\" of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. SQL injection attacks are a type of injection attack, in which SQL commands are injected into data-plane input in order to effect the execution of predefined SQL commands. <br> Important Links on SQLInjection : <ol> <li> <a href=\"https://en.wikipedia.org/wiki/SQL_injection\" target=\"_blank\">Wiki Link</a>  <li> <a href=\"https://owasp.org/www-community/attacks/SQL_Injection\" target=\"_blank\">Owasp SQLInjection</a> <li> <a href=\"https://www.youtube.com/watch?v=WkHkryIoLD0\" target=\"_blank\">Joe McCray talk on SQLInjection</a><li> <a href=\"https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/\" target=\"_blank\">SQL Injection cheat sheet by netsparker</a></ol> <br/><br/> Important Links on Prevention techniques : <ol>  <li><a href=\"https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html\" target=\"_blank\">Owasp Prevention cheatsheet</a> <li><a href=\"https://www.websec.ca/kb/sql_injection\" target=\"_blank\"> SQL Injection knowledge base </a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "ERROR_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is directly appended to the SQL Query causing exception in certain scenarios and hence exposes the application data."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "ERROR_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is wrapped around \"'\" and then appended to the SQL Query causing exception in certain scenarios and hence exposes the application data."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "ERROR_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Single Quote is removed from Query param and then appended to SQL Query by wrapping with \"'\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "ERROR_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is appended directly to the SQL Query and then a parameterized query is formed. This is to depict that proper usage of PreparedStatement is important."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/ErrorBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "UnionBasedSQLInjectionVulnerability",
                    "id": "UnionBasedSQLInjectionVulnerability",
                    "description": "A SQL injection attack consists of insertion or \"injection\" of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. SQL injection attacks are a type of injection attack, in which SQL commands are injected into data-plane input in order to effect the execution of predefined SQL commands. <br> Important Links on SQLInjection : <ol> <li> <a href=\"https://en.wikipedia.org/wiki/SQL_injection\" target=\"_blank\">Wiki Link</a>  <li> <a href=\"https://owasp.org/www-community/attacks/SQL_Injection\" target=\"_blank\">Owasp SQLInjection</a> <li> <a href=\"https://www.youtube.com/watch?v=WkHkryIoLD0\" target=\"_blank\">Joe McCray talk on SQLInjection</a><li> <a href=\"https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/\" target=\"_blank\">SQL Injection cheat sheet by netsparker</a></ol> <br/><br/> Important Links on Prevention techniques : <ol>  <li><a href=\"https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html\" target=\"_blank\">Owasp Prevention cheatsheet</a> <li><a href=\"https://www.websec.ca/kb/sql_injection\" target=\"_blank\"> SQL Injection knowledge base </a> </ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNION_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is directly appended to the Query and hence \"Union\" keyword can be used to club the results and extract the application data."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNION_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Query param is wrapped around \"'\" and then appended to the Query and hence \"Union\" keyword can be used to club the results and extract the application data."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UNION_BASED_SQL_INJECTION"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "89"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "19"
                                        }
                                    ],
                                    "description": "Single Quote is removed from Query param and then appended to SQL Query by wrapping around \"'\"hence \"Union\" keyword can be used to club the results and extract the application data."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/UnionBasedSQLInjectionVulnerability/LEVEL_1/SQLInjection_Level1.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "SSRFVulnerability",
                    "id": "SSRFVulnerability",
                    "description": "In a Server-Side Request Forgery (SSRF) attack, the attacker can abuse functionality on the server to read or update internal resources.  The attacker can supply or modify a <strong>URL</strong> which the code running on the server will read or submit data to, and by carefully selecting the URLs, <strong>the attacker may be able to read server </strong>  configuration such as AWS metadata, connect to internal services like http enabled databases or perform post requests towards internal services which are not intended to be exposed. Important Links on SSRF : <ol> <li> <a href=\"https://en.wikipedia.org/wiki/Server-side_request_forgery\" target=\"_blank\">Wiki Link</a>  <li> <a href=\"https://owasp.org/www-community/attacks/Server_Side_Request_Forgery\" target=\"_blank\">Owasp SSRF</a> <li> <a href=\"https://www.youtube.com/watch?v=AsPpxqIlTDU\" target=\"_blank\">SSRF (Server Side Request Forgery) by Musab Khan</a></ol> ",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/SSRFVulnerability/LEVEL_1/SSRF.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/SSRFVulnerability/LEVEL_1/SSRF.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/SSRFVulnerability/LEVEL_1/SSRF.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "SIMPLE_SSRF"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "918"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "15"
                                        }
                                    ],
                                    "description": "The URL that the user enters is directly passed to a request."
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "PersistentXSSInHTMLTagVulnerability",
                    "id": "PersistentXSSInHTMLTagVulnerability",
                    "description": "Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it. <br/> <br/> An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page. <br/><br/> For more information on XSS: <ol><li><a href=\"https://owasp.org/www-community/attacks/xss/\" target=\"_blank\">Owasp XSS</a> <li><a href=\"https://www.google.com/about/appsecurity/learning/xss/\" target=\"_blank\">Google Application Security</a></ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "\"comment\" query param's value is directly added to \"div\" tag."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "\"comment\" query param's value is directly added to \"div\" tag after replacing \"<img\" and \"<input\" tags."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "\"comment\" query param's value is directly added to \"div\" tag after replacing case insensitive \"<img\" and \"<input\" tags."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "\"comment\" query param's value is directly added to \"div\" tag after replacing \"<img\" and \"<input\" tags if these tags are present before Null Byte."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "\"comment\" query param's value is directly added to \"div\" tag after replacing case insensitive \"<img\" and \"<input\" tags if these tags are present before Null Byte."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "PERSISTENT_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "\"comment\" query param's value is directly added to \"div\" tag after HTML escaping the content present before Null Byte and other portion is left as is."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/PersistentXSSInHTMLTagVulnerability/LEVEL_1/PersistentXSS.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                },
                {
                    "name": "XSSWithHtmlTagInjection",
                    "id": "XSSWithHtmlTagInjection",
                    "description": "Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it. <br/> <br/> An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page. <br/><br/> For more information on XSS: <ol><li><a href=\"https://owasp.org/www-community/attacks/xss/\" target=\"_blank\">Owasp XSS</a> <li><a href=\"https://www.google.com/about/appsecurity/learning/xss/\" target=\"_blank\">Google Application Security</a></ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Url Parameters are added directly into div tag."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Url Parameters are added directly into the div tag if they are not having Script/Image and Anchor tag."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSWithHtmlTagInjection/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Url Parameters are added directly into the div tag if they are not having Script/Image/Anchor tag and Javascript and Alert keywords."
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "XSSInImgTagAttribute",
                    "id": "XSSInImgTagAttribute",
                    "description": "Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it. <br/> <br/> An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page. <br/><br/> For more information on XSS: <ol><li><a href=\"https://owasp.org/www-community/attacks/xss/\" target=\"_blank\">Owasp XSS</a> <li><a href=\"https://www.google.com/about/appsecurity/learning/xss/\" target=\"_blank\">Google Application Security</a></ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Url Parameters are added directly into the src attribute of Image Tag."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Quotes are added to Url Parameters and then directly added into the src attribute of Image Tag"
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "HTML escaping is done on the Url Parameters and then directly added into the src attribute of Image Tag"
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "HTML escaping along with removal of values containing paranthesis is done on the Url Parameters and then directly added into the src attribute of Image Tag."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "HTML escaping is done on the Url Parameters and then inserted inside Quotes into the src attribute of Image Tag."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Url Parameters are HTML escaped, validated against whitelist of filenames and inserted into the src attribute of Image Tag, However validator for validating filenames is vulnerable with Null Byte Injection."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XSSInImgTagAttribute/LEVEL_1/XSS.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "REFLECTED_XSS"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "79"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "8"
                                        }
                                    ],
                                    "description": "Url Parameters are HTML escaped, validated against whitelist of filenames and inserted inside Quotes into the src attribute of Image Tag."
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "XXEVulnerability",
                    "id": "XXEVulnerability",
                    "description": "An XML External Entity attack is a type of attack against an application that parses XML input. This attack occurs when XML input containing a reference to an external entity is processed by a weakly configured XML parser. This attack may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning from the perspective of the machine where the parser is located, and other system impacts.<br/><br/>Important Links:<br/><ol> <li> <a href=\"https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing\" target=\"_blank\">Owasp Wiki Link</a>  <li> <a href=\"https://www.youtube.com/watch?v=DREgLWZqMWg\" target=\"_blank\">HackHappy's video tutorial</a> <li> <a href=\"https://medium.com/@onehackman/exploiting-xml-external-entity-xxe-injections-b0e3eac388f9\" target=\"_blank\">Medium article by OneHackMan</a><li> <a href=\"https://portswigger.net/web-security/xxe\" target=\"_blank\">Portswigger XXE documentation</a> <li> <a href=\"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.md1\" target=\"_blank\">Owasp Prevention cheat sheet</a></ol>",
                    "vulnerabilityTypes": [],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "XXE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "611"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "43"
                                        }
                                    ],
                                    "description": "There is no validation on the XML passed in request body."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "XXE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "611"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "43"
                                        }
                                    ],
                                    "description": "Parser is disabled from processing general external entities."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.js"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "XXE"
                                        },
                                        {
                                            "identifierType": "CWE",
                                            "value": "611"
                                        },
                                        {
                                            "identifierType": "WASC",
                                            "value": "43"
                                        }
                                    ],
                                    "description": "Parser is disabled from processing general and parameter entities."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.css"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "/VulnerableApp/templates/XXEVulnerability/LEVEL_1/XXE.js"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                }
            ]
        },
        {
            "applicationName": "VulnerableApp-jsp",
            "vulnerabilityDefinitions": [
                {
                    "name": "FileUpload",
                    "id": "FileUpload",
                    "description": "Uploaded files represent a significant risk to applications. The first step in many attacks is to get some code to the system to be attacked. Then the attack only needs to find a way to get the code executed.<br/>The consequences of unrestricted file upload can vary, including complete system takeover, an overloaded file system or database, forwarding attacks to back-end systems, client-side attacks, or simple defacement. It depends on what the application does with the uploaded file and especially where it is stored.<br/><br/>Important Links:<br/><ol> <li> <a href=\"https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload\" target=\"_blank\">Owasp Wiki Link</a>  <li> <a href=\"https://www.youtube.com/watch?v=CmF9sEyKZNo\" target=\"_blank\">Ebrahim Hegazy talk on Unrestricted File Uploads</a> <li> <a href=\"https://www.sans.org/blog/8-basic-rules-to-implement-secure-file-uploads/\" target=\"_blank\">Sans rules to implement secure file uploads</a> </ol>",
                    "vulnerabilityTypes": null,
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UnrestrictedFileUpload"
                                        }
                                    ],
                                    "description": "There is no validation on uploaded file's name or content."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UnrestrictedFileUpload"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except html/htm/svg extensions."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UnrestrictedFileUpload"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except html/htm/svg and if file content doesn't contains scriptlet\"."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UnrestrictedFileUpload"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except html/htm/svg/jsp."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UnrestrictedFileUpload"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except html/htm/svg/jsp/jspx."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": [
                                {
                                    "vulnerabilityTypes": [
                                        {
                                            "identifierType": "Custom",
                                            "value": "UnrestrictedFileUpload"
                                        }
                                    ],
                                    "description": "All file extensions are allowed except html/htm/svg/jsp. It is vulnerable to double extension attack."
                                }
                            ]
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "SECURE",
                            "description": "",
                            "resourceInformation": {
                                "htmlResource": {
                                    "absolute": false,
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "absolute": false,
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-jsp/static/templates/FileUpload/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                }
            ]
        },
        {
            "applicationName": "VulnerableApp-php",
            "vulnerabilityDefinitions": [
                {
                    "name": "FileUpload",
                    "id": "FileUpload",
                    "description": "Uploaded files represent a significant risk to applications. The first step in many attacks is to get some code to the system to be attacked. Then the attack only needs to find a way to get the code executed.\n<br/>The consequences of unrestricted file upload can vary, including complete system takeover, an overloaded file system or database, forwarding attacks to back-end systems, client-side attacks, or simple defacement. It depends on what the application does with the uploaded file and especially where it is stored.\n<br/><br/>\nImportant Links:<br/>\n<ol> <li> <a href=\"https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload\" target=\"_blank\">Owasp Wiki Link</a>  \n <li> <a href=\"https://www.youtube.com/watch?v=CmF9sEyKZNo\" target=\"_blank\">Ebrahim Hegazy talk on Unrestricted File Uploads</a> \n <li> <a href=\"https://www.sans.org/blog/8-basic-rules-to-implement-secure-file-uploads/\" target=\"_blank\">Sans rules to implement secure file uploads</a> \n</ol>",
                    "vulnerabilityTypes": [
                        {
                            "identifierType": "CUSTOM",
                            "value": "Unrestricted File Upload"
                        }
                    ],
                    "levels": [
                        {
                            "levelIdentifier": "LEVEL_1",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_2",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_3",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_4",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_5",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_6",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_7",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_8",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_9",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_10",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_11",
                            "variant": "UNSECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        },
                        {
                            "levelIdentifier": "LEVEL_12",
                            "variant": "SECURE",
                            "description": null,
                            "resourceInformation": {
                                "htmlResource": {
                                    "resourceType": ResourceType.HTML,
                                    "isAbsolute": false,
                                    "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.html"
                                },
                                "staticResources": [
                                    {
                                        "resourceType": ResourceType.JAVASCRIPT,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.js"
                                    },
                                    {
                                        "resourceType": ResourceType.CSS,
                                        "isAbsolute": false,
                                        "uri": "VulnerableApp-php/templates/FileUploadVulnerability/LEVEL_1/FileUpload.css"
                                    }
                                ]
                            },
                            "hints": []
                        }
                    ]
                }
            ]
        }
    ]
}

export default testFixture;

