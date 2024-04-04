package com.example.reactProject.repository;

import com.example.reactProject.model.Test;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test,Long> {

	List<com.example.reactProject.model.Test> findAll();
	
}
