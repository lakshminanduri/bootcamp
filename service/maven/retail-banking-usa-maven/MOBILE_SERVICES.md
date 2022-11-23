# Backend Services required for mobile

In order to support the mobile apps, the following backend capabilities must be run

Steps:

### Start Mysql and ActiveMQ
```bash
docker-compose -f foundation/docker-compose.yml up -d
```
### Start Foundation Services
```bash
mvn -f foundation/pom.xml blade:run
mvn -f foundation/pom.xml -pl edge package -Prun-edge
```
Wait for all services to finish startup

### Start IAM Services

First, you need to retrieve your IP address, e.g. with `ifconfig`.
It will be used in several steps throughout this guide.
This is NOT the localhost IP (127.0.0.1) but the IP on the local network, e.g. 192.168.0.1.


```bash
mvn -f iam/pom.xml clean install -Pclean-database
docker-compose -f iam/docker-compose.yml up --build -d
BACKBASE_OIDCTOKENCONVERTER_WHITELISTEDDOMAINS_0_ISSUERHOST=localhost BACKBASE_OIDCTOKENCONVERTER_WHITELISTEDDOMAINS_1_ISSUERHOST=<YOUR_IP> mvn -f iam/pom.xml blade:run
mvn -f iam/access-control/pom.xml clean install -Pclean-database
mvn -f iam/access-control/pom.xml blade:run
```
Wait for all services to finish startup.
Identity Will start with 3 default users:

| UserName  | Password  |
|---        |---        |
| admin     | admin     |
| manager   | manager   |
| user      | user      |

#### Configure users in identity
login into identity in the following URL 
```
http://localhost:8180/auth
```
with the credentials admin/admin

#### Start Banking services

Start the following capabilities

```bash
mvn -f banking/product-summary/pom.xml clean install -Pclean-database
mvn -f banking/product-summary/pom.xml blade:run
mvn -f banking/pfm/pom.xml clean install -Pclean-database
mvn -f banking/pfm/pom.xml blade:run
mvn -f banking/transactions/pom.xml clean install -Pclean-database
mvn -f banking/transactions/pom.xml blade:run
mvn -f banking/payments/pom.xml clean install -Pclean-database
mvn -f banking/payments/pom.xml blade:run
```

#### Optional: Start Foundation services

```bash
mvn -f foundation/pom.xml clean install -Pclean-database
mvn -f foundation/pom.xml blade:run
```

#### Ingest Banking local data

You can ingest data into the local environment using bb-fuel, the following command line will load retail data into the environment:

```bash
sh banking/bb-fuel/download-bb-fuel.sh
java -Dspring.profiles.active=local -Denvironment.domain=backbase.eu -Dingest.access.control=true -Dingest.custom.service.agreements=false -Dingest.balance.history=false -Dingest.transactions=true -Duse.pfm.categories.for.transactions=true -Dingest.approvals.for.payments=false -Dingest.approvals.for.contacts=false -Dingest.approvals.for.notifications=false -Dingest.approvals.for.batches=false -Dingest.limits=false -Dingest.contacts=false -Dingest.notifications=false -Dingest.payments=true -Dingest.messages=false -Dingest.actions=false -Dtransactions.min=100 -Dtransactions.max=101 -Didentity.feature.toggle=true -Didentity.realm=backbase -Didentity.client=bb-tooling-client -jar bb-fuel.jar
```

#### Configure Mobile Authentication

Before continuing, you need to run the Android application at least once to retrieve the FacetID from the log.
Follow the steps in the other guide, copy the FacetID (it won't change after that) and come back here...

In order to be able to login using the mobile app, you need to create the application inside Identity and store the facetId of your app on it. This can be done following these steps:

1) Get an authentication token using this command:
```bash
curl --location --request POST 'http://localhost:7777/api/token-converter/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=bb-client' \
--data-urlencode 'client_secret=bb-secret' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=api:service'
```
Store the value of the access_token for the next command. The token expires after few minutes, so if you need to run the same commands again, make sure you get a new token first.

2) Create the application in the fido-service:
```
curl --location --request POST 'http://localhost:8181/fido-service/service-api/v1/applications/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
	"appKey": "retail",
    "appId": "http://{{YOUR_IP}}:8180/auth/realms/backbase/protocol/fido-uaf/applications/retail/facets",
    "trustedFacetIds": [
    	"android:app-key-hash:com.backbase.examplebanking",
    	"android:apk-key-hash:{{FACET_ID}}",
        "ios:bundle-id:com.backbase.start"
    ]
}'
```

Replace {{ACCESS_TOKEN}} with the value obtained in the first step
Replace {{YOUR_IP}} in the appId with your IP address (not the localhost address 127.0.0.1 but the real IP address on your network)
Replace {{FACET_ID}} with the facetId generated for your app e.g. "Fy0Dsi2q1B475nH3o16I6ZDXjTY"

After that you will be able to login in your mobile app with the following users: "user", "manager", "admin"
