package com.ems.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ems.models.Job;
import com.ems.services.JobService;


@RestController
public class JobController {

	@Autowired
	JobService jobService;
	
	
	@RequestMapping(value = "job", method = RequestMethod.GET)
	List<Job> getJob(){
		return jobService.getJobs();
	}
	
	@RequestMapping(value = "job", method = RequestMethod.POST)
	void addJob(@RequestBody Job job){
		jobService.addJob(job);
	}
	
}
