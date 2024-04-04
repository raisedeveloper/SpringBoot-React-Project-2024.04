package com.example.reactProject.controller;

import com.example.reactProject.model.Test;
import com.example.reactProject.repository.TestService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class TestController {
    private final TestService testService;

    @GetMapping(value = "/test")
    public List<Test> getUserList() {
        return testService.getUserList();
    }
}
