package com.aliot.zzint.dto

data class Convert(
    val orgContent: String?
    , val addFront : String?
    , val addBack : String?
    , val addLine : Boolean = false
)