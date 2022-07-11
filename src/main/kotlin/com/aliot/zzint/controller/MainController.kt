package com.aliot.zzint.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class MainController {
    @RequestMapping("/lobby")
    fun main(m: Model): String{
        m.addAttribute("test","test12")
        println("test!")
        return "index"
    }
}