# BB-Fuel

https://github.com/Backbase/bb-fuel 

## Ingest Banking Services local data

You can ingest data into the local environment using bb-fuel, 
the following command line will download the executable jar and 
then load retail data into the environment:

```bash
sh download-bb-fuel.sh
java -Dspring.profiles.active=local -Denvironment.domain=backbase.eu -Dingest.access.control=true -Dingest.custom.service.agreements=false -Dingest.balance.history=false -Dingest.transactions=true -Duse.pfm.categories.for.transactions=true -Dingest.approvals.for.payments=false -Dingest.approvals.for.contacts=false -Dingest.approvals.for.notifications=false -Dingest.approvals.for.batches=false -Dingest.limits=false -Dingest.contacts=false -Dingest.notifications=false -Dingest.payments=true -Dingest.messages=false -Dtransactions.min=100 -Dtransactions.max=101 -Didentity.feature.toggle=true -Didentity.realm=backbase -Didentity.client=bb-tooling-client -Dlegal.entities.with.users.json=data/retail/legal-entities-with-users.json -Dproduct.group.seed.json=data/retail/product-group-seed.json -Dservice.agreements.json=data/retail/service-agreements.json -jar banking/bb-fuel/bb-fuel.jar
```
