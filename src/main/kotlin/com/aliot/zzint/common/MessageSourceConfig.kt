package com.aliot.zzint.common

import org.springframework.boot.autoconfigure.context.MessageSourceProperties
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.MessageSource
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.util.StringUtils
import java.time.Duration

@Configuration
open class MessageSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.messages")
    open fun properties(): MessageSourceProperties = MessageSourceProperties()

    @Bean
    open fun messageSource(properties: MessageSourceProperties): MessageSource{
        val messageSource = ExtendReloadableResourceBundleMessageSource()

        if(StringUtils.hasText(properties.basename)){
            messageSource.setBasenames(*StringUtils.commaDelimitedListToStringArray(StringUtils.trimAllWhitespace(properties.basename)))
        }

        if(properties.encoding != null){
            messageSource.setDefaultEncoding(properties.encoding.name())
        }

        messageSource.setFallbackToSystemLocale(properties.isFallbackToSystemLocale)
        val cacheDuration: Duration? = properties.cacheDuration

        if(cacheDuration != null){
            messageSource.setCacheMillis(cacheDuration.toMillis())
        }

        messageSource.setAlwaysUseMessageFormat(properties.isAlwaysUseMessageFormat)
        messageSource.setUseCodeAsDefaultMessage(properties.isUseCodeAsDefaultMessage)
        return messageSource
    }
}