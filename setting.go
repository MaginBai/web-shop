package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type setting struct {
	PgHost     string
	PgPort     string
	PgUser     string
	PgPassword string
	PgBase     string
}

var cfg setting

func init() {
	file, err := os.Open("setting.json")
	if err != nil {
		fmt.Println(err.Error())
		panic("Не удалось открыть файл конфигурации")
	}
	defer file.Close()

	stat, err := file.Stat()
	if err != nil {
		fmt.Println(err.Error())
		panic("Не удалось прочитать информацию о файле конфигурации")
	}

	readByte := make([]byte, stat.Size())
	_, err = file.Read(readByte)
	if err != nil {
		fmt.Println(err.Error())
		panic("Не удалось прочитать файл конфигурации")
	}

	err = json.Unmarshal(readByte, &cfg)
	if err != nil {
		fmt.Println(err.Error())
		panic("Не удалось считать данные файла конфигурацит")
	}
}
