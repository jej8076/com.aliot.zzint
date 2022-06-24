package com.aliot.zzint

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ZzintApplication{
    @Value("${my-app.welcome-message}")
    val myAppWelcomeMessage: String = ""

    @PostConstruct
    fun printMyAppWelcomeMessage() {
        println(myAppWelcomeMessage)
    }
}

fun main(args: Array<String>) {
    runApplication<ZzintApplication>(*args)
}
