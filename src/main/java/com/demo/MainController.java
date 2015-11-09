package com.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;
import java.util.concurrent.Future;

import javax.servlet.http.HttpSession;

@Controller
@EnableAsync
public class MainController {

    private EmployeeService service;

    private React react;

    private ObjectMapper mapper;

    @Autowired
    public MainController(EmployeeService service) {
        this.service = service;
        this.react = new React();
        this.mapper = new ObjectMapper();
    }

    @RequestMapping("/")
    public String index(Map<String, Object> model,HttpSession session) throws Exception {
    	RestTemplate restTemplate = new RestTemplate();
    	
    	HttpHeaders requestHeaders = new HttpHeaders();
    	requestHeaders.add("Cookie", "JSESSIONID=" + session.getId());
    	System.out.println(requestHeaders);
    	
    	HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
    	
    	ResponseEntity rssResponse = restTemplate.exchange(
    	    "http://m.samsclub.com/api/rfi/povs",
    	    HttpMethod.GET,
    	    requestEntity,Object.class);
 
    	System.out.println( rssResponse.getBody());
        List<Employee> employees = service.getEmployees();
        runAPIs();
        String employeeList = react.renderEmployeeList(employees);
        String data = mapper.writeValueAsString(employeeList);
        model.put("content", employeeList);
        model.put("data", data);
        return "index";
    }

    @Autowired
    GitHubLookupService gitHubLookupService;

    
    public void runAPIs() throws Exception {
        // Start the clock
        long start = System.currentTimeMillis();

        // Kick of multiple, asynchronous lookups
        Future<User> page1 = gitHubLookupService.findUser("PivotalSoftware");
        Future<User> page2 = gitHubLookupService.findUser("CloudFoundry");
        Future<User> page3 = gitHubLookupService.findUser("Spring-Projects");

        // Wait until they are all done
        while (!(page1.isDone() && page2.isDone() && page3.isDone())) {
            Thread.sleep(10); //10-millisecond pause between each check
        }

        // Print results, including elapsed time
        System.out.println("Elapsed time: " + (System.currentTimeMillis() - start));
        System.out.println(page1.get());
        System.out.println(page2.get());
        System.out.println(page3.get());
    }

}
