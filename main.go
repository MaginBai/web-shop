package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

var router *gin.Engine

func main() {
	err := connect()
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	router = gin.Default()
	router.Static("/assets", cfg.Assets)
	// router.Use(static.Serve("/", static.LocalFile(cfg.Data, false)))
	router.LoadHTMLFiles(cfg.Html + "index.html")
	router.GET("/", index)
	router.Run(cfg.ServerHost + ":" + cfg.ServerPort)
}

func index(c *gin.Context) {
	c.HTML(200, "index.html", nil)
}
