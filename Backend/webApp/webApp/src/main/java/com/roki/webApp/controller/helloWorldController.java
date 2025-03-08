package com.roki.webApp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class helloWorldController {
    
    @GetMapping("/hello-world")
    public String helloWorld(){
        return "Welcome to RoKi application";
    }
}
