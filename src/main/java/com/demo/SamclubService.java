package com.demo;

import java.util.Date;
import java.util.concurrent.Future;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SamclubService {
	
	 RestTemplate restTemplate = new RestTemplate();

	    @Async
	    public Future<Object> makeSamsClubApiCalls(HttpEntity requestEntity,String api) throws InterruptedException {
	    	
	    	ResponseEntity rssResponse = null;
	        if(api.equalsIgnoreCase("categoryInfo1")){
	        	System.out.println("Looking up " + (new Date()).getTime() );
	        	 rssResponse = restTemplate.exchange(
	        	    "http://m.samsclub.com/api/sams/samsapi/v1/categoryInfo?loadType=full&sortBy=4&pageSize=30&class=category&sortDirection=1&cnpApp=false&filter=all&pageNum=1&bypassEGiftCardViewOnly=true&repositoryId=shockingValues&ignoreInventoryLevels=true",
	        	    HttpMethod.GET,
	        	    requestEntity,Object.class);
	     
	        } else if(api.equalsIgnoreCase("categoryInfo2")){
	        	System.out.println("Looking up " + (new Date()).getTime() );
	        	 rssResponse = restTemplate.exchange(
	        	    "http://m.samsclub.com/api/sams/samsapi/v1/categoryInfo?repositoryId=100001&loadType=partial&sortBy=4&pageSize=10&class=category&sortDirection=1&cnpApp=false&filter=all&pageNum=1",
	        	    HttpMethod.GET,
	        	    requestEntity,Object.class);
	        	
	        } else {
	        	System.out.println("Looking up " + (new Date()).getTime() );
	        	 rssResponse = restTemplate.exchange(
	            	    "http://m.samsclub.com/api/rfi/povs",
	            	    HttpMethod.GET,
	            	    requestEntity,Object.class);
	        }
	        
	        return new AsyncResult<Object>(rssResponse);
	    }


}
