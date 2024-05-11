package main

import (
	"fmt"

	_ "github.com/lib/pq"
)

func main() {
	err := connect()
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println(cfg)
	_, err = db.Exec(`INSERT INTO "test" ("name") VALUES('Arthur')`)
	if err != nil {
		fmt.Println(err.Error())
	}
}
