package com.example.reactProject.repository;

import com.example.reactProject.model.Test;
import com.example.reactProject.repository.TestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TestService {
    private TestRepository testRepository;

    public List<com.example.reactProject.model.Test> getUserList() {
        return testRepository.findAll();
    }
}
