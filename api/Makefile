reset-db:
	docker-compose run --rm api /bin/sh -c "yarn reset-db"

reset-db-win:
	docker-compose run --rm api //bin/sh -c "yarn reset-db"

dev:
	docker-compose up

test:
	docker-compose -p grow_tests run --rm api yarn test

test-watch:
	docker-compose -p grow_tests run --rm api yarn test --watchAll

reset-containers:
	docker-compose down
	docker-compose build
	docker-compose -p grow_tests down
	docker-compose -p grow_tests build