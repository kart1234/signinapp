package com.demo;

import java.util.concurrent.Future;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;



@SpringBootApplication
public class DemoApplication {
	
    public static void main(String[] args) {
    /*	HttpHeaders requestHeaders = new HttpHeaders();
    	requestHeaders.add("Cookie", "JSESSIONID=" + session.getValue());
    	HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
    	ResponseEntity rssResponse = restTemplate.exchange(
    	    "https://jira.example.com/sr/jira.issueviews:searchrequest-xml/18107/SearchRequest-18107.xml?tempMax=1000",
    	    HttpMethod.GET,
    	    requestEntity,
    	    Rss.class);*/
    	//Rss rss = rssResponse.getBody();
        SpringApplication.run(DemoApplication.class, args);
    }
}
