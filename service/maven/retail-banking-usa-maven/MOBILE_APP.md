# Demo retail banking application


## Getting started

To get your new project started, resolve the few TODO items in the project related to the app's application ID, package
name, and API root. Also change the package name in google-service.json, in two places:
```
"package_name": "com.example.banking" to your new package name
"package_name": "com.example.banking.debug" to your new package name with the debug suffix
```

In config.json, make sure a few values are properly set
URLs should point to your IP address (not localhost or local IP) and use the http protocol (not https), e.g.:
```
"serverURL": "http://172.30.1.96:7777"
"baseURL": "http://172.30.1.96:8180" (for Identity)
```
Also ensure the following values are set
```
"realm": "backbase",
"clientId": "mobile-client",
"applicationKey": "retail"
```
To be able to connect to the backend with the http protocol, enable clear text traffic in the app's network config and
reference this file in the AndroidManifest.xml file.
https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted

Once you've done this you can run the app and see how it looks.
From there you can customize the
[theme](app/src/main/res/values/theme.xml) or change any of the code in the project.
