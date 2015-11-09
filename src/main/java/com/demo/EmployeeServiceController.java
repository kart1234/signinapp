package com.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeServiceController {

    private EmployeeService service;

    @Autowired
    public EmployeeServiceController(EmployeeService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Employee> getEmployees() {
        return service.getEmployees();
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Employee> addEmployees(String name) {
        return service.addEmployee(name);
    }

}
