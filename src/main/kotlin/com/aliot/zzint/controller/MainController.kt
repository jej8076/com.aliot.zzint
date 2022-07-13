package com.aliot.zzint.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class MainController {

    @RequestMapping("/lobby")
    fun main(m: Model): String{
        return "index"
    }
    
}