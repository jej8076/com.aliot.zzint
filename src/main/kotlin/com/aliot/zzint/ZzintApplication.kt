package com.aliot.zzint

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration

@Configuration
@SpringBootApplication
class ZzintApplication

fun main(args: Array<String>) {
    runApplication<ZzintApplication>(*args)
}
