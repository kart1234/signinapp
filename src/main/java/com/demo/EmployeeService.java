package com.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    private List<Employee> employees = new ArrayList<>();

    private final EmployeeRepository repository;

	@Autowired
	public EmployeeService(EmployeeRepository repository) {
		this.repository = repository;
	}

    public List<Employee> getEmployees() {
        return (List<Employee>) repository.findAll();
    }

    public List<Employee> addEmployee(String name) {
    	repository.save(new Employee(name));
        return (List<Employee>) repository.findAll();
    }
}
